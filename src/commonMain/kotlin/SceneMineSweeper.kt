import com.soywiz.korge.scene.Scene
import com.soywiz.korge.view.Container
import com.soywiz.korim.format.readBitmap
import com.soywiz.korio.file.std.resourcesVfs

class SceneMineSweeper(val myDependency: MyDependency) : Scene() {

    companion object {

    }

    override suspend fun Container.sceneInit() {
        buttonWin95(
            WINDOWS_PANEL_HEIGHT * 3,
            WINDOWS_PANEL_HEIGHT,
            resourcesVfs["win95_logo.png"].readBitmap(),
            "Close"
        ) {
            onInteract {
                sceneContainer.changeTo<SceneDesktop>()
            }
        }

    }
}

