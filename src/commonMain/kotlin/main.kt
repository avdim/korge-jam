import com.soywiz.korau.sound.readSound
import com.soywiz.korge.Korge
import com.soywiz.korge.input.onClick
import com.soywiz.korge.scene.Module
import com.soywiz.korge.scene.Scene
import com.soywiz.korge.view.*
import com.soywiz.korim.color.Colors
import com.soywiz.korim.color.RGBA
import com.soywiz.korim.format.readBitmap
import com.soywiz.korinject.AsyncInjector
import com.soywiz.korio.file.std.resourcesVfs
import com.soywiz.korma.geom.SizeInt
import kotlin.reflect.KClass

suspend fun main() = Korge(
    Korge.Config(
        module = MyModule

    )
)

object MyModule : Module() {
    override val mainScene: KClass<out Scene> = SceneLoading::class
    override val windowSize: SizeInt get() = SizeInt(900, 600)
    override val size: SizeInt get() = windowSize
    override val bgcolor: RGBA = Colors.TEAL

    override suspend fun init(injector: AsyncInjector): Unit = injector.run {
        mapInstance(MyDependency("HELLO WORLD"))
        mapPrototype { SceneLoading(get()) }
        mapPrototype { MyScene2(get()) }
    }
}

class MyDependency(val value: String)

class SceneLoading(val myDependency: MyDependency) : Scene() {

    override suspend fun Container.sceneInit() {
        val soundLoadWin95 = resourcesVfs["win95_loading.mp3"].readSound()
        val lazyPlaySoundLoadWin95 by lazy { soundLoadWin95.play() }

        val backgroundWin95 = image(resourcesVfs["win95.jpg"].readBitmap())
        text("Press any key to continue")
            .alignBottomToBottomOf(backgroundWin95)
            .centerXOn(backgroundWin95)//todo blink

        sceneView.onClick {
            sceneContainer.changeTo<MyScene2>()
            lazyPlaySoundLoadWin95//play sound once
        }

    }
}

class MyScene2(val myDependency: MyDependency) : Scene() {
    override suspend fun Container.sceneInit() {
        text("MyScene2: ${myDependency.value}") { filtering = false }
        solidRect(100, 100, Colors.BLUE) {
            position(200, 200)
            onClick {
//                sceneContainer.changeTo<SceneLoading>(MyDependency("From MyScene2"))
            }
        }
    }
}


suspend fun main2() = Korge(width = 900, height = 600, bgcolor = Colors["#2b2b2b"]) {

}
