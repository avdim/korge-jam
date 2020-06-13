import com.soywiz.korge.Korge
import com.soywiz.korge.scene.Module
import com.soywiz.korge.scene.Scene
import com.soywiz.korge.view.Container
import com.soywiz.korge.view.text
import com.soywiz.korim.color.Colors
import com.soywiz.korim.color.RGBA
import com.soywiz.korinject.AsyncInjector
import com.soywiz.korma.geom.SizeInt
import cs.SceneCounterStrike
import minesweeper.SceneMineSweeper
import windows.WINDOWS_HEIGHT
import windows.WINDOWS_WIDTH
import kotlin.reflect.KClass

suspend fun main() = Korge(
    Korge.Config(
        module = MyModule
    )
)

object MyModule : Module() {
//    override val mainScene: KClass<out Scene> = SceneCounterStrike::class
//    override val mainScene: KClass<out Scene> = SceneMineSweeper::class
//    override val mainScene: KClass<out Scene> = SceneDesktop::class
    override val mainScene: KClass<out Scene> = StartScene::class
    override val windowSize: SizeInt
        get() = SizeInt(
            WINDOWS_WIDTH,
            WINDOWS_HEIGHT
        )
    override val size: SizeInt get() = windowSize
    override val bgcolor: RGBA = Colors.BLACK

    override suspend fun AsyncInjector.configure() {
        mapInstance(MyDependency("HELLO WORLD"))
        mapPrototype { StartScene(get()) }
        mapPrototype { SceneCounterStrike(get()) }
        mapPrototype { SceneLoading(get()) }
        mapPrototype { SceneDesktop(get()) }
        mapPrototype { SceneMineSweeper(get()) }
    }

}

class MyDependency(val value: String)

class StartScene(val myDependency: MyDependency) : Scene() {

    override suspend fun Container.sceneInit() {
        text("Loading...")
        SoundManager.firstSceneInit(stage!!)
    }

    override suspend fun Container.sceneMain() {
        sceneContainer.changeTo<SceneLoading>()
    }

}

