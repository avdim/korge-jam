
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

const val BASE_WIDTH = 900
const val BASE_HEIGHT = 600
const val BASE_WIDTH_D: Double = BASE_WIDTH.toDouble()
const val BASE_HEIGHT_D: Double = BASE_HEIGHT.toDouble()

suspend fun main() = Korge(
    Korge.Config(
        module = MyModule

    )
)

object MyModule : Module() {
    override val mainScene: KClass<out Scene> = SceneLoading::class
    override val windowSize: SizeInt get() = SizeInt(BASE_WIDTH, BASE_HEIGHT)
    override val size: SizeInt get() = windowSize
    override val bgcolor: RGBA = Colors.BLACK

    override suspend fun init(injector: AsyncInjector): Unit = injector.run {
        mapInstance(MyDependency("HELLO WORLD"))
        mapPrototype { SceneLoading(get()) }
        mapPrototype { SceneDesktop(get()) }
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
            sceneContainer.changeTo<SceneDesktop>()
            lazyPlaySoundLoadWin95//play sound once
        }

    }
}

class SceneDesktop(val myDependency: MyDependency) : Scene() {

    companion object {
        private const val PANEL_HEIGHT = 50.0
    }

    override suspend fun Container.sceneInit() {
        sceneContainer
        solidRect(BASE_WIDTH_D, BASE_HEIGHT_D, hexColor(0x008080))
        val panel = solidRect(BASE_WIDTH_D, PANEL_HEIGHT, hexColor(0xc3c3c3))
            .alignBottomToBottomOf(sceneView)

        image(resourcesVfs["win95_logo.png"].readBitmap())
            .alignBottomToBottomOf(panel)
            .alignLeftToLeftOf(panel)

        text("MyScene2: ${myDependency.value}") { filtering = false }
        solidRect(100, 100, Colors.BLUE) {
            position(200, 200)
            onClick {
//                sceneContainer.changeTo<SceneLoading>(MyDependency("From MyScene2"))
            }
        }
    }

    suspend fun Container.button() =
        container {

        }

}

fun hexColor(hex: Int): RGBA = RGBA(r = hex ushr 16 and 0xFF, g = hex ushr 8 and 0xFF, b = hex and 0xFF)
