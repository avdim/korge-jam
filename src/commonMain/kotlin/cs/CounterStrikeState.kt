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
    val openX: Double,
    val openY: Double,
    val coverX: Double,
    val coverY: Double,
    var state: TerroristState = TerroristState.Hidden
)

const val FIRE_SINCE_TICK = 20
const val DIE_TICKS = 100

sealed class TerroristState {
    class Die(val tick: Int) : TerroristState()
    object Hidden : TerroristState()
    class Show(val tick: Int) : TerroristState()
}

sealed class SideEffect {
    class TerroristShot(val terrorist: Terrorist) : SideEffect()
    class KillTerrorist(val terrorist: Terrorist) : SideEffect()
    class ShowTerrorist(val terrorist: Terrorist) : SideEffect()
    class HideTerrorist(val terrorist: Terrorist) : SideEffect()
}

fun CounterStrikeState.tick(): List<SideEffect> {
    tick++
    val newTerroristProbability = 1.0
    val shootProbability = 0.02
    val effects: MutableList<SideEffect> = mutableListOf()

    terrorists.forEach { terrorist ->
        val st = terrorist.state
        when (st) {
            is TerroristState.Hidden -> {
                if (Random.nextDouble() < newTerroristProbability) {
                    terrorist.state = TerroristState.Show(tick)
                    effects.add(SideEffect.ShowTerrorist(terrorist))
                    terrorist.x = terrorist.coverX
                    terrorist.y = terrorist.coverY
                }
            }
            is TerroristState.Die -> {
                if (tick - st.tick > DIE_TICKS) {
                    terrorist.state = TerroristState.Hidden
                    effects.add(SideEffect.HideTerrorist(terrorist))
                }
            }
            is TerroristState.Show -> {
                if (tick - st.tick > FIRE_SINCE_TICK) {
                    if (Random.nextDouble() < shootProbability) {
                        effects.add(SideEffect.TerroristShot(terrorist))
                    }
                }
                terrorist.x += (terrorist.openX - terrorist.x) / 10
                terrorist.y += (terrorist.openY - terrorist.y) / 10
            }
        }
    }

    return effects
}

fun CounterStrikeState.kill(terrorist: Terrorist): List<SideEffect> {
    kills++
    terrorist.state = TerroristState.Die(tick)
    return listOf(SideEffect.KillTerrorist(terrorist))
}
