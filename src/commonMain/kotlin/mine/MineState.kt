package mine

data class MineState(
    val matrix: List<List<Cell>>
) {
    data class Cell(
        val mine: Boolean
    )
}
