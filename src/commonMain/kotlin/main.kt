import com.soywiz.korge.Korge
import com.soywiz.korge.scene.Module
import com.soywiz.korge.scene.Scene
import com.soywiz.korim.color.Colors
import com.soywiz.korim.color.RGBA
import com.soywiz.korinject.AsyncInjector
import com.soywiz.korma.geom.SizeInt
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.SupervisorJob
import kotlin.coroutines.CoroutineContext
import kotlin.reflect.KClass

const val WINDOWS_WIDTH = 900
const val WINDOWS_HEIGHT = 600
const val WINDOWS_WIDTH_D: Double = WINDOWS_WIDTH.toDouble()
const val WINDOWS_HEIGHT_D: Double = WINDOWS_HEIGHT.toDouble()
val COLOR_WIN_DESKTOP = hexColor(0x008080)
val COLOR_WIN_PANEL = hexColor(0xc3c3c3)
val COLOR_WIN_BUTTON_DEFAULT = COLOR_WIN_PANEL
val COLOR_WIN_BUTTON_BORDER = hexColor(0xc3c3c3 - 0x202020)//COLOR_WIN_BUTTON_DEFAULT.minus(hexColor(0x202020))
val COLOR_WIN_BUTTON_DOWN = COLOR_WIN_BUTTON_DEFAULT.plus(hexColor(0x202020))
val BACKGROUND_SCOPE:CoroutineScope = object : CoroutineScope {
    override val coroutineContext: CoroutineContext get() = SupervisorJob()
}

suspend fun main() = Korge(
    Korge.Config(
        module = MyModule
    )
)

object MyModule : Module() {
    override val mainScene: KClass<out Scene> = SceneLoading::class//todo loading
    override val windowSize: SizeInt get() = SizeInt(WINDOWS_WIDTH, WINDOWS_HEIGHT)
    override val size: SizeInt get() = windowSize
    override val bgcolor: RGBA = Colors.BLACK

    override suspend fun init(injector: AsyncInjector): Unit = injector.run {
        mapInstance(MyDependency("HELLO WORLD"))
        mapPrototype { SceneLoading(get()) }
        mapPrototype { SceneDesktop(get()) }
    }
}

class MyDependency(val value: String)

fun hexColor(hex: Int): RGBA = RGBA(r = hex ushr 16 and 0xFF, g = hex ushr 8 and 0xFF, b = hex and 0xFF)
