package windows

import MenuItem
import minesweeper.SceneMineSweeper
import com.soywiz.korge.scene.Scene
import com.soywiz.korge.view.*
import com.soywiz.korim.format.readBitmap
import com.soywiz.korio.file.std.resourcesVfs
import cs.SceneCounterStrike
import myOnInteract

suspend fun Container.panelStartWin95(scene: Scene, menuItems: List<MenuItem>) {
    var menuShown = false
    val downPanel = solidRect(
        WINDOWS_WIDTH_D,
        WINDOWS_PANEL_HEIGHT,
        COLOR_WIN_PANEL
    )
        .alignBottomToBottomOf(scene.sceneView)

    val startMenuContainer = container {
        menuWin95(downPanel, menuItems)
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
        myOnInteract {
            menuShown = !menuShown
        }
    }
}