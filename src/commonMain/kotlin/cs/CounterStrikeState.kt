package cs

data class CounterStrikeState(
    val terrorists: List<Terrorist>,
    val health:Int
)

data class Terrorist(
    val x: Double,
    val y: Double
)

fun CounterStrikeState.tick():CounterStrikeState {
    return copy()
}
