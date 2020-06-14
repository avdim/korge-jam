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
    var state: TerroristState = TerroristState.Hidden,
    val speed: Double
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

    terrorists.forEach { ter ->
        val st = ter.state
        when (st) {
            is TerroristState.Hidden -> {
                if (Random.nextDouble() < newTerroristProbability) {
                    ter.state = TerroristState.Show(tick)
                    effects.add(SideEffect.ShowTerrorist(ter))
                    ter.x = ter.coverX
                    ter.y = ter.coverY
                }
            }
            is TerroristState.Die -> {
                if (tick - st.tick > DIE_TICKS) {
                    ter.state = TerroristState.Hidden
                    effects.add(SideEffect.HideTerrorist(ter))
                }
            }
            is TerroristState.Show -> {
                if (tick - st.tick > FIRE_SINCE_TICK) {
                    if (Random.nextDouble() < shootProbability) {
                        effects.add(SideEffect.TerroristShot(ter))
                    }
                }
                ter.x += (ter.openX - ter.x) / 10 * ter.speed
                ter.y += (ter.openY - ter.y) / 10 * ter.speed
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
