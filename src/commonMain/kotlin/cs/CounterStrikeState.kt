package cs

import kotlin.random.Random

class CounterStrikeState(
    val terrorists: List<Terrorist> = listOf(),
    val health: Int = 100,
    var tick: Int = 0,
    var kills: Int = 0
)

class Terrorist(
    var x: Double,
    var y: Double,
    val showX: Double,
    val showY: Double,
    val hideX: Double,
    val hideY: Double,
    var state: TerroristState = TerroristState.Hidden
)

const val FIRE_SINCE_TICK = 20
const val DIE_TICKS = 30

sealed class TerroristState {
    class Die(val tick: Int) : TerroristState()
    object Hidden : TerroristState()
    class Show(val tick: Int) : TerroristState()
}

sealed class SideEffect {
    class Shoot(val terrorist: Terrorist) : SideEffect()
    class Kill(val terrorist: Terrorist) : SideEffect()
}

fun CounterStrikeState.tick(): List<SideEffect> {
    tick++
    val newTerroristProbability = 0.1 * tick / (terrorists.size + 1)
    val shootProbability = 0.1
    val effects: MutableList<SideEffect> = mutableListOf()

    terrorists.forEach { terrorist ->
        val st = terrorist.state
        when (st) {
            is TerroristState.Hidden -> {
                if (Random.nextDouble() < newTerroristProbability) {
                    terrorist.state = TerroristState.Show(tick)
                }
            }
            is TerroristState.Die -> {
                if (tick - st.tick > DIE_TICKS) {
                    terrorist.state = TerroristState.Show(tick)
                }
            }
            is TerroristState.Show -> {
                if (tick - st.tick > FIRE_SINCE_TICK) {
                    if (Random.nextDouble() < shootProbability) {
                        effects.add(SideEffect.Shoot(terrorist))
                    }
                }
                terrorist.x += (terrorist.showX - terrorist.x) / 10
            }
        }
    }

    return effects
}

fun CounterStrikeState.kill(terrorist: Terrorist): List<SideEffect> {
    kills++
    terrorist.state = TerroristState.Die(tick)
    return listOf(SideEffect.Kill(terrorist))
}