package mine

import lib.transformI

fun mineSweepReduce(state: MineState, intent: Intent): MineState =
    when (intent) {
        is Intent.Demine -> {
            state.copy(
                matrix = state.matrix.transformI(intent.row) {
                    it.transformI(intent.col) {
                        it.copy(
                            mine = !it.mine
                        )
                    }
                }
            )
        }
    }
