import com.soywiz.korge.input.onClick
import com.soywiz.korge.scene.Scene
import com.soywiz.korge.view.*
import com.soywiz.korim.bitmap.Bitmap
import com.soywiz.korim.color.Colors
import com.soywiz.korim.format.readBitmap
import com.soywiz.korio.file.std.resourcesVfs
import kotlin.random.Random

class SceneDesktop(val myDependency: MyDependency) : Scene() {

    companion object {
        private const val PANEL_HEIGHT = 50.0
    }

    override suspend fun Container.sceneInit() {
        sceneContainer
        solidRect(WINDOWS_WIDTH_D, WINDOWS_HEIGHT_D, COLOR_WIN_DESKTOP)
        val panel = solidRect(WINDOWS_WIDTH_D, PANEL_HEIGHT, COLOR_WIN_PANEL)
            .alignBottomToBottomOf(sceneView)

        buttonWin95(PANEL_HEIGHT * 3, PANEL_HEIGHT, resourcesVfs["win95_logo.png"].readBitmap(), "Start") {
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
}

suspend fun Container.buttonWin95(
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