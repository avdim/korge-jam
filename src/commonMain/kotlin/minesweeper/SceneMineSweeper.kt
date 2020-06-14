package minesweeper

import GlobalDependencies
import MenuItem
import com.soywiz.korge.scene.Scene
import com.soywiz.korge.view.*
import com.soywiz.korim.bitmap.Bitmap
import com.soywiz.korim.color.Colors
import com.soywiz.korim.format.readBitmap
import com.soywiz.korio.file.std.resourcesVfs
import cs.SceneCounterStrike
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.collectLatest
import kotlinx.coroutines.launch
import myOnClickOnce
import windows.*
import kotlin.math.absoluteValue

class SceneMineSweeper(val myDependency: GlobalDependencies) : Scene() {

    override suspend fun Container.sceneInit() {
    }

    override suspend fun Container.sceneMain() {
        val background = solidRect(
            WINDOWS_WIDTH_D,
            WINDOWS_HEIGHT_D,
            COLOR_WIN_DESKTOP
        )

        val stateFlow = MutableStateFlow(randomState(12, 20, 15))

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
            closed = resourcesVfs["minesweeper/cellCovered.png"].readBitmap()
        )

        container {
            launch {
                stateFlow.collectLatest { state ->
                    removeChildren()
                    renderMineState(myDependency, background, assets, state, (900-640)/2.0, (600 - 12*32)/2.0, userInput = {
                        stateFlow.value = mineSweepReduce(state, it)//todo actor save concurrency
                    })
                }
            }
        }

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
                resourcesVfs["mine.png"].readBitmap(),
                "Minesweeper",
                100,
                180
            ) {
                sceneContainer.changeTo<SceneMineSweeper>()
            }
        )
        panelStartWin95(this@SceneMineSweeper, menuItems)
    }
}

private const val CELL_SIZE = 32
private const val BITMAP_SCALE = 2.0

class MineSwipeAssets(
    val near0: Bitmap,
    val mine: Bitmap,
    val closed: Bitmap,
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
    myDependency: GlobalDependencies,
    background:View,
    assets: MineSwipeAssets,
    state: MineSweeperState,
    x: Double,
    y: Double,
    userInput: (Intent) -> Unit
) {
    val x0 = 0.0 + x
    val y0 = 0.0 + y
    val dx = CELL_SIZE
    val dy = CELL_SIZE
    for (row in state.matrix.indices) {
        val columns = state.matrix[row]
        for (col in columns.indices) {
            val cell = state.matrix[row][col]
            val calcNearMines = { state.calcNearMines(row, col) }
            val bitmap: Bitmap = getCellBitmap(cell, assets, calcNearMines)
            image(bitmap) {
                xy(x0 + dx * col, y0 + dy * row)
                scale = BITMAP_SCALE
                myOnClickOnce {
                    userInput(Intent.Demine(col, row))
                }
            }
        }
    }
    if (state.checkWin()) {
        val rect = solidRect(400, 100, Colors.LIGHTGRAY).apply {
            alpha = 0.6
            centerOn(background)
            this.y -= WINDOWS_PANEL_HEIGHT/2
        }
        text("You Win!", 30.0, Colors.GREEN).centerOn(this).centerOn(rect)
        stage?.myOnClickOnce {
            GlobalScope.launch {
                myDependency.exit()
            }
        }
    }
    if (state.checkLoose()) {
        val rect = solidRect(400, 100, Colors.LIGHTGRAY).apply {
            alpha = 0.6
            centerOn(background)
            this.y -= WINDOWS_PANEL_HEIGHT/2
        }
        text("You loose :(", 30.0, Colors.RED).centerOn(this).centerOn(rect)
        stage?.myOnClickOnce {
            GlobalScope.launch {
                myDependency.exit()
            }
        }
    }
}

private fun getCellBitmap(
    cell: MineSweeperState.Cell,
    assets: MineSwipeAssets,
    calcNearMines: () -> Int
): Bitmap =
    when (cell.state) {
        is MineSweeperState.CellState.Close -> assets.closed
        is MineSweeperState.CellState.Bang -> assets.bang
        is MineSweeperState.CellState.Open -> {
            if (cell.mine) {
                assets.mine
            } else {
                when (calcNearMines()) {
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
        }
    }

fun isNear(currentRow: Int, currentCol: Int, row: Int, col: Int): Boolean {
    val sameCells: Boolean = currentRow == row && currentCol == col
    val maxDeltaOneCell: Boolean = (col - currentCol).absoluteValue <= 1 && (row - currentRow).absoluteValue <= 1

    return !sameCells && maxDeltaOneCell
}

fun MineSweeperState.calcNearMines(currentRow: Int, currentCol: Int): Int =
    matrix.withIndex().sumBy { (row, cols) ->
        cols.withIndex().count { (col, cell) ->
            cell.mine && isNear(currentRow, currentCol, row, col)
        }
    }

sealed class Intent {
    class Demine(val col: Int, val row: Int) : Intent()
}

fun MineSweeperState.checkWin() = checkLoose().not() && matrix.all {
    it.all {
        it.mine || it.state == MineSweeperState.CellState.Open
    }
}

fun MineSweeperState.checkLoose() = matrix.any {
    it.any {
        it.state == MineSweeperState.CellState.Bang
    }
}
