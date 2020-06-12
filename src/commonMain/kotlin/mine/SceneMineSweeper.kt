package mine

import MyDependency
import SceneDesktop
import com.soywiz.korge.scene.Scene
import com.soywiz.korge.view.Container
import com.soywiz.korge.view.image
import com.soywiz.korge.view.xy
import com.soywiz.korim.bitmap.Bitmap
import com.soywiz.korim.format.readBitmap
import com.soywiz.korio.file.std.resourcesVfs
import onInteract
import windows.WINDOWS_PANEL_HEIGHT
import windows.buttonWin95

class SceneMineSweeper(val myDependency: MyDependency) : Scene() {

    override suspend fun Container.sceneInit() {
        val state = MineState(
            listOf(
                listOf(MineState.Cell(true), MineState.Cell(true), MineState.Cell(true)),
                listOf(MineState.Cell(false), MineState.Cell(true), MineState.Cell(true)),
                listOf(MineState.Cell(true), MineState.Cell(true), MineState.Cell(true)),
                listOf(MineState.Cell(true), MineState.Cell(true), MineState.Cell(true))
            )
        )
        drawMineState(state, 100.0, 100.0)

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

private const val CELL_SIZE = 32
private const val BITMAP_SCALE = 2.0

suspend fun Container.drawMineState(state: MineState, x:Double, y:Double) {
    val emptyBM = resourcesVfs["mine/cellDepressed.png"].readBitmap()
    val mineBM = resourcesVfs["mine/mine.png"].readBitmap()
    val x0 = 0.0 + x
    val y0 = 0.0 + y
    val dx = CELL_SIZE + 8
    val dy = CELL_SIZE + 8
    for (row in state.matrix.indices) {
        val columns = state.matrix[row]
        for (col in columns.indices) {
            val cell = state.matrix[row][col]
            val bitmap: Bitmap = if (cell.mine) mineBM else emptyBM
            image(bitmap) {
                xy(x0 + dx * col, y0 + dy * row)
                scale = BITMAP_SCALE
            }
        }
    }
}

