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
import kotlin.math.absoluteValue

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
            near0 = resourcesVfs["minesweeper/cellDepressed.png"].readBitmap(),
            near1 = resourcesVfs["minesweeper/box1.png"].readBitmap(),
            near2 = resourcesVfs["minesweeper/box2.png"].readBitmap(),
            near3 = resourcesVfs["minesweeper/box3.png"].readBitmap(),
            near4 = resourcesVfs["minesweeper/box4.png"].readBitmap(),
            near5 = resourcesVfs["minesweeper/box5.png"].readBitmap(),
            near6 = resourcesVfs["minesweeper/box6.png"].readBitmap(),
            near7 = resourcesVfs["minesweeper/box7.png"].readBitmap(),
            near8 = resourcesVfs["minesweeper/box8.png"].readBitmap(),
            bang = resourcesVfs["minesweeper/mineExploded.png"].readBitmap(),
            mine = resourcesVfs["minesweeper/mine.png"].readBitmap(),
            hidden = resourcesVfs["minesweeper/cellCovered.png"].readBitmap()
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
    val near0: Bitmap,
    val mine: Bitmap,
    val hidden: Bitmap,
    val bang: Bitmap,
    val near1: Bitmap,
    val near2: Bitmap,
    val near3: Bitmap,
    val near4: Bitmap,
    val near5: Bitmap,
    val near6: Bitmap,
    val near7: Bitmap,
    val near8: Bitmap
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
            val bitmap: Bitmap = if (cell.mine) {
                assets.mine
            } else {
                when(state.calcNearMines(col, row)) {
                    0 -> assets.near0
                    1 -> assets.near1
                    2 -> assets.near2
                    3 -> assets.near3
                    4 -> assets.near4
                    5 -> assets.near5
                    6 -> assets.near6
                    7 -> assets.near7
                    8 -> assets.near8
                    else -> assets.bang
                }
            }
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

fun MineSweeperState.calcNearMines(nearCol: Int, nearRow: Int): Int =
    matrix.withIndex().sumBy { (row, cols) ->
        cols.withIndex().count { (col, cell) ->
            cell.mine && (col - nearCol).absoluteValue <= 1 && (row - nearRow).absoluteValue <= 1
        }
    }

sealed class Intent {
    class Demine(val col: Int, val row: Int) : Intent()
}


