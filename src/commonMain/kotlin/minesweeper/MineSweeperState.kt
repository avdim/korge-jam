package minesweeper

import lib.transformI

data class MineSweeperState(
    val matrix: List<List<Cell>>
) {
    data class Cell(
        val mine: Boolean,
        val state: CellState = CellState.Close
    )

    sealed class CellState {
        object Close : CellState()
        object Open : CellState()
        object Bang : CellState()
    }
}

val MineSweeperState.minesCount get() = matrix.sumBy { it.count { it.mine } }
val MineSweeperState.cellsCount get() = matrix.sumBy { it.size }
fun MineSweeperState.copyAndSetMines(targetMinesCount: Int): MineSweeperState {
    val minesLimit = (cellsCount * 0.8).toInt()
    if (targetMinesCount > minesLimit) {
        return copyAndSetMines(minesLimit)
    }
    var result = this
    while (result.minesCount != targetMinesCount) {
        result = result.copy(
            matrix = result.matrix.transformI(matrix.indices.random()) { row ->
                row.transformI(row.indices.random()) {
                    it.copy(mine = result.minesCount <= targetMinesCount)
                }
            }
        )
    }
    return result
}

fun randomState(rows: Int, cols: Int, mines: Int): MineSweeperState =
    emptyState(rows, cols).copyAndSetMines(mines)

fun emptyState(rows: Int, cols: Int): MineSweeperState {
    return MineSweeperState(matrix = List(rows) {
        List(cols) {
            MineSweeperState.Cell(false)
        }
    })
}