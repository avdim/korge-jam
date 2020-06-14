import com.soywiz.korge.scene.Scene
import com.soywiz.korge.view.*
import com.soywiz.korim.bitmap.Bitmap
import com.soywiz.korim.format.readBitmap
import com.soywiz.korio.file.std.resourcesVfs
import cs.SceneCounterStrike
import minesweeper.SceneMineSweeper
import windows.*

class SceneDesktop(val myDependency: GlobalDependencies) : Scene() {

    override suspend fun Container.sceneInit() {
        solidRect(
            WINDOWS_WIDTH_D,
            WINDOWS_HEIGHT_D,
            COLOR_WIN_DESKTOP
        )

        val menuItems: List<MenuItem> = listOf(
            MenuItem(
                resourcesVfs["cs.png"].readBitmap(),
                "Counter Strike",
                100,
                80
            ) {
                sceneContainer.changeTo<SceneCounterStrike>()
            },
            MenuItem(
                resourcesVfs["iexplorer.png"].readBitmap(),
                "Internet Explorer",
                100,
                180
            ) {

            },
            MenuItem(
                resourcesVfs["mine.png"].readBitmap(),
                "Minesweeper",
                100,
                280
            ) {
                sceneContainer.changeTo<SceneMineSweeper>()
            }
        )

        menuItems.forEach { item ->
            container {
                val img = image(item.img).size(WINDOWS_PANEL_HEIGHT, WINDOWS_PANEL_HEIGHT)
                text(item.label).centerXOn(img).alignTopToBottomOf(img)
            }.position(item.desktopX, item.desktopY).myOnInteract {
                item.clickAction()
            }
        }
        panelStartWin95(this@SceneDesktop, menuItems)
    }

    override suspend fun Container.sceneMain() {

    }
}

class MenuItem(
    val img: Bitmap,
    val label: String,
    val desktopX: Int,
    val desktopY: Int,
    val clickAction: suspend () -> Unit = {}
)


