import com.soywiz.korge.scene.Scene
import com.soywiz.korge.view.*
import com.soywiz.korim.bitmap.Bitmap
import windows.*

class SceneDesktop(val myDependency: GlobalDependencies) : Scene() {

    override suspend fun Container.sceneInit() {
        solidRect(
            WINDOWS_WIDTH_D,
            WINDOWS_HEIGHT_D,
            COLOR_WIN_DESKTOP
        )
        panelStartWin95(this@SceneDesktop)
    }
}

class MenuItem(val img: Bitmap, val label: String, val clickAction: suspend () -> Unit = {})


