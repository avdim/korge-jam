import com.soywiz.korge.Korge
import com.soywiz.korge.scene.Module
import com.soywiz.korge.scene.Scene
import com.soywiz.korim.color.Colors
import com.soywiz.korim.color.RGBA
import com.soywiz.korinject.AsyncInjector
import com.soywiz.korma.geom.SizeInt
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.SupervisorJob
import minesweeper.SceneMineSweeper
import windows.WINDOWS_HEIGHT
import windows.WINDOWS_WIDTH
import kotlin.coroutines.CoroutineContext
import kotlin.reflect.KClass

val BACKGROUND_SCOPE:CoroutineScope = object : CoroutineScope {
    override val coroutineContext: CoroutineContext get() = SupervisorJob()
}

suspend fun main() = Korge(
    Korge.Config(
        module = MyModule
    )
)

object MyModule : Module() {
    override val mainScene: KClass<out Scene> = SceneMineSweeper::class
//    override val mainScene: KClass<out Scene> = SceneDesktop::class
//    override val mainScene: KClass<out Scene> = SceneLoading::class
    override val windowSize: SizeInt get() = SizeInt(
    WINDOWS_WIDTH,
    WINDOWS_HEIGHT
)
    override val size: SizeInt get() = windowSize
    override val bgcolor: RGBA = Colors.BLACK

    override suspend fun AsyncInjector.configure() {
        mapInstance(MyDependency("HELLO WORLD"))
        mapPrototype { SceneLoading(get()) }
        mapPrototype { SceneDesktop(get()) }
        mapPrototype { SceneMineSweeper(get()) }
    }

}

class MyDependency(val value: String)

fun hexColor(hex: Int): RGBA = RGBA(r = hex ushr 16 and 0xFF, g = hex ushr 8 and 0xFF, b = hex and 0xFF)
