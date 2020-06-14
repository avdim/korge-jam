package minesweeper

import lib.transformI

fun mineSweepReduce(state: MineSweeperState, intent: Intent): MineSweeperState =
    when (intent) {
        is Intent.Demine -> {
            val cell = state.matrix[intent.row][intent.col]
            if (cell.mine) {
                state.openAll().let { state ->
                    state.copy(
                        matrix = state.matrix.transformI(intent.row) {
                            it.transformI(intent.col) {
                                it.copy(state = MineSweeperState.CellState.Bang)
                            }
                        }
                    )
                }
            } else {
                state.openRecursive(intent.row, intent.col)
            }
        }
    }

fun MineSweeperState.openRecursive(currentRow: Int, currentCol: Int): MineSweeperState {
    var result = copy(
        matrix = matrix.transformI(currentRow) {
            it.transformI(currentCol) {
                it.copy(
                    state = MineSweeperState.CellState.Open
                )
            }
        }
    )

    if (result.calcNearMines(currentRow, currentCol) == 0) {
        for (row in result.matrix.indices) {
            for (col in result.matrix[row].indices) {
                if (result.matrix[row][col].state != MineSweeperState.CellState.Open) {
                    if (isNear(currentRow, currentCol, row, col)) {
                        result = result.openRecursive(row, col)
                    }
                }
            }
        }
    }
    if (result.checkWin()) {
        result = result.openAll()
    }
    return result
}

private fun MineSweeperState.openAll(): MineSweeperState =
    copy(
        matrix = matrix.map {
            it.map {
                it.copy(state = MineSweeperState.CellState.Open)
            }
        }
    )


