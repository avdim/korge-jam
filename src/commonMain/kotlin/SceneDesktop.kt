import com.soywiz.korge.scene.Scene
import com.soywiz.korge.scene.SceneContainer
import com.soywiz.korge.view.*
import com.soywiz.korim.bitmap.Bitmap
import com.soywiz.korim.color.Colors
import com.soywiz.korim.format.readBitmap
import com.soywiz.korio.file.std.resourcesVfs
import kotlin.random.Random

class SceneDesktop(val myDependency: MyDependency) : Scene() {

    companion object {

    }

    override suspend fun Container.sceneInit() {
        windowsStartMenu(this@SceneDesktop)
        text("MyScene2: ${myDependency.value}") { filtering = false }
        solidRect(100, 100, Colors.BLUE) {
            position(200, 200)
            onInteract {
//                sceneContainer.changeTo<SceneLoading>(MyDependency("From MyScene2"))
            }
        }
    }
}

class MenuItem(val img: Bitmap, val label: String, val clickAction: suspend () -> Unit = {})

suspend fun Container.windowsStartMenu(alignDownPanel: View, items: List<MenuItem>) {
    var previousYAnchor: View = alignDownPanel
    items.forEach { item ->
        alignLeftToLeftOf(alignDownPanel)
        previousYAnchor = menuButton(item.img, item.label) {
            alignBottomToTopOf(previousYAnchor)
            onInteract {
                item.clickAction()
            }
        }
    }
}

suspend fun Container.menuButton(img: Bitmap, text: String, lambda: Container.() -> Unit) =
    buttonWin95(WINDOWS_PANEL_HEIGHT * 6, WINDOWS_PANEL_HEIGHT, img, text, lambda)

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

suspend fun Container.windowsStartMenu(scene: Scene) {
    var menuShown = false

    solidRect(WINDOWS_WIDTH_D, WINDOWS_HEIGHT_D, COLOR_WIN_DESKTOP)
    val downPanel = solidRect(WINDOWS_WIDTH_D, WINDOWS_PANEL_HEIGHT, COLOR_WIN_PANEL)
        .alignBottomToBottomOf(scene.sceneView)

    val startMenuContainer = container {
        windowsStartMenu(downPanel, listOf(
            MenuItem(resourcesVfs["iexplorer.png"].readBitmap(), "Internet Explorer") {

            },
            MenuItem(resourcesVfs["iexplorer.png"].readBitmap(), "Internet Explorer") {

            },
            MenuItem(resourcesVfs["iexplorer.png"].readBitmap(), "Mine Sweeper") {
                scene.sceneContainer.changeTo<SceneMineSweeper>()
            }
        ))
    }

    addUpdater {
        startMenuContainer.visible = menuShown
    }

    buttonWin95(
        WINDOWS_PANEL_HEIGHT * 3,
        WINDOWS_PANEL_HEIGHT,
        resourcesVfs["win95_logo.png"].readBitmap(),
        "Start"
    ) {
        alignBottomToBottomOf(downPanel)
        alignLeftToLeftOf(downPanel)
        onInteract {
            menuShown = !menuShown
        }
    }
}
