package minesweeper

import MyDependency
import SceneDesktop
import com.soywiz.korge.scene.Scene
import com.soywiz.korge.view.Container
import com.soywiz.korge.view.container
import com.soywiz.korge.view.image
import com.soywiz.korge.view.xy
import com.soywiz.korim.bitmap.Bitmap
import com.soywiz.korim.format.readBitmap
import com.soywiz.korio.file.std.resourcesVfs
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.collectLatest
import myOnClickOnce
import myOnInteract
import windows.WINDOWS_PANEL_HEIGHT
import windows.buttonWin95

class SceneMineSweeper(val myDependency: MyDependency) : Scene() {

    override suspend fun Container.sceneInit() {

    }

    override suspend fun Container.sceneMain() {
        buttonWin95(
            WINDOWS_PANEL_HEIGHT * 3,
            WINDOWS_PANEL_HEIGHT,
            resourcesVfs["win95_logo.png"].readBitmap(),
            "Close"
        ) {
            myOnInteract {
                sceneContainer.changeTo<SceneDesktop>()
            }
        }

        val stateFlow = MutableStateFlow(randomState(5, 4, 7))
        val assets = MineSwipeAssets(
            emptyBM = resourcesVfs["minesweeper/cellDepressed.png"].readBitmap(),
            mineBM = resourcesVfs["minesweeper/mine.png"].readBitmap()
        )

        container {
            stateFlow.collectLatest { state ->
                removeChildren()
                renderMineState(assets, state, 100.0, 100.0, userInput = {
                    stateFlow.value = mineSweepReduce(state, it)//todo actor save concurrency
                })
            }
        }
    }
}

private const val CELL_SIZE = 32
private const val BITMAP_SCALE = 2.0

class MineSwipeAssets(
    val emptyBM: Bitmap,
    val mineBM: Bitmap
)

suspend fun Container.renderMineState(
    assets: MineSwipeAssets,
    state: MineSweeperState,
    x: Double,
    y: Double,
    userInput: (Intent) -> Unit
) {
    val x0 = 0.0 + x
    val y0 = 0.0 + y
    val dx = CELL_SIZE + 8
    val dy = CELL_SIZE + 8
    for (row in state.matrix.indices) {
        val columns = state.matrix[row]
        for (col in columns.indices) {
            val cell = state.matrix[row][col]
            val bitmap: Bitmap = if (cell.mine) assets.mineBM else assets.emptyBM
            image(bitmap) {
                xy(x0 + dx * col, y0 + dy * row)
                scale = BITMAP_SCALE
                myOnClickOnce {
                    userInput(Intent.Demine(col, row))
                }
            }
        }
    }
}

sealed class Intent {
    class Demine(val col: Int, val row: Int) : Intent()
}


