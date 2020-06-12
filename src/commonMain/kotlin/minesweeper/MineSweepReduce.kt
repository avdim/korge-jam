package minesweeper

import lib.transformI

fun mineSweepReduce(state: MineSweeperState, intent: Intent): MineSweeperState =
    when (intent) {
        is Intent.Demine -> {
            state.copy(
                matrix = state.matrix.transformI(intent.row) {
                    it.transformI(intent.col) {
                        it.copy(
                            state = MineSweeperState.CellState.Open
                        )
                    }
                }
            )
        }
    }
