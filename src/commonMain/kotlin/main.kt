import com.soywiz.klock.seconds
import com.soywiz.korau.sound.readSound
import com.soywiz.korge.Korge
import com.soywiz.korge.input.MouseEvents
import com.soywiz.korge.input.mouse
import com.soywiz.korge.input.onClick
import com.soywiz.korge.scene.Module
import com.soywiz.korge.scene.Scene
import com.soywiz.korge.time.delay
import com.soywiz.korge.view.*
import com.soywiz.korim.bitmap.Bitmap
import com.soywiz.korim.color.Colors
import com.soywiz.korim.color.RGBA
import com.soywiz.korim.format.readBitmap
import com.soywiz.korinject.AsyncInjector
import com.soywiz.korio.file.std.resourcesVfs
import com.soywiz.korma.geom.SizeInt
import kotlin.random.Random
import kotlin.reflect.KClass

const val BASE_WIDTH = 900
const val BASE_HEIGHT = 600
const val BASE_WIDTH_D: Double = BASE_WIDTH.toDouble()
const val BASE_HEIGHT_D: Double = BASE_HEIGHT.toDouble()
val COLOR_WIN_DESKTOP = hexColor(0x008080)
val COLOR_WIN_PANEL = hexColor(0xc3c3c3)
val COLOR_WIN_BUTTON_DEFAULT = COLOR_WIN_PANEL
val COLOR_WIN_BUTTON_BORDER = hexColor(0xc3c3c3 - 0x202020)//COLOR_WIN_BUTTON_DEFAULT.minus(hexColor(0x202020))
val COLOR_WIN_BUTTON_DOWN = COLOR_WIN_BUTTON_DEFAULT.plus(hexColor(0x202020))

suspend fun main() = Korge(
    Korge.Config(
        module = MyModule
    )
)

object MyModule : Module() {
    override val mainScene: KClass<out Scene> = SceneLoading::class//todo loading
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

        val backgroundWin95 = image(resourcesVfs["win95.jpg"].readBitmap())
        text("Press any key to continue")
            .alignBottomToBottomOf(backgroundWin95)
            .centerXOn(backgroundWin95)//todo blink

        sceneView.onClick {
            sceneContainer.changeTo<SceneDesktop>()
        }
        MouseEvents::click.get(stage!!.mouse).once {
            // once stage mouse click handler
            soundLoadWin95.play()
        }
        //todo wait 2 seconds and open desktop
        addUpdater {  }
//        delay(2.seconds)
//        sceneContainer.changeTo<SceneDesktop>()
    }
}

class SceneDesktop(val myDependency: MyDependency) : Scene() {

    companion object {
        private const val PANEL_HEIGHT = 50.0
    }

    override suspend fun Container.sceneInit() {
        sceneContainer
        solidRect(BASE_WIDTH_D, BASE_HEIGHT_D, COLOR_WIN_DESKTOP)
        val panel = solidRect(BASE_WIDTH_D, PANEL_HEIGHT, COLOR_WIN_PANEL)
            .alignBottomToBottomOf(sceneView)

        winButton(PANEL_HEIGHT * 3, PANEL_HEIGHT, resourcesVfs["win95_logo.png"].readBitmap(), "Start") {
            alignBottomToBottomOf(panel)
            alignLeftToLeftOf(panel)
            onClick {
                alpha = Random.nextDouble()
            }
        }

        text("MyScene2: ${myDependency.value}") { filtering = false }
        solidRect(100, 100, Colors.BLUE) {
            position(200, 200)
            onClick {
//                sceneContainer.changeTo<SceneLoading>(MyDependency("From MyScene2"))
            }
        }
    }

    suspend fun Container.winButton(
        width: Double,
        height: Double,
        img: Bitmap? = null,
        label: String? = null,
        lambda: Container.() -> Unit
    ) =
        fixedSizeContainer(width, height) {
            val btnContainer = this
            val outerBorder = solidRect(width, height, COLOR_WIN_BUTTON_BORDER).centerOn(btnContainer)
            val innerBorder = solidRect(width * 0.9, height * 0.9, COLOR_WIN_BUTTON_DEFAULT)
                .centerOn(outerBorder)

//            this.width = width
//            this.height = height

            val imageIcon = img?.let {
                image(it) {
                    size(height * 0.8, height * 0.8)
                    alignLeftToLeftOf(innerBorder)
                    centerYOn(innerBorder)
                }
            }
            if (label != null) {
                if (imageIcon != null) {
                    text(label) {
                        alignLeftToRightOf(imageIcon)
                        centerYOn(innerBorder)
                        color = Colors.BLACK
                    }
                } else {
                    text(label)
                        .centerOn(innerBorder)
                }
            }
            lambda()
        }

}

fun hexColor(hex: Int): RGBA = RGBA(r = hex ushr 16 and 0xFF, g = hex ushr 8 and 0xFF, b = hex and 0xFF)
