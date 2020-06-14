package cs

import kotlin.random.Random

const val FIRE_SINCE_TICK = 20
const val DIE_TICKS = 100
const val MAX_TERRORISTS = 20
const val BASE_SHOOT_PROBABILITY = 0.01
const val BASE_TERRORIST_PROBABILITY = 0.02
const val HIT_PROBABILITY = 0.2
const val HIT_HP = 10

sealed class GameResult {
    object Win : GameResult()
    object Lose : GameResult()
}

class CounterStrikeState(
    val terrorists: List<Terrorist> = listOf(),
    var health: Int = 100,
    var tick: Int = 0,
    var kills: Int = 0,
    var terroristCounter: Int = 0,
    var result: GameResult? = null
)

class Terrorist(
    var x: Double,
    var y: Double,
    val openX: Double,
    val openY: Double,
    val coverX: Double,
    val coverY: Double,
    var state: TerroristState = TerroristState.Idle,
    val speed: Double
)

sealed class TerroristState {
    object Idle : TerroristState()
    class Die(val tick: Int) : TerroristState()
    object Hidden : TerroristState()
    class Show(val tick: Int) : TerroristState()
}

sealed class SideEffect {
    class Hit() : SideEffect()
    class TerroristShot(val terrorist: Terrorist) : SideEffect()
    class KillTerrorist(val terrorist: Terrorist) : SideEffect()
    class ShowTerrorist(val terrorist: Terrorist) : SideEffect()
    class HideTerrorist(val terrorist: Terrorist) : SideEffect()
    class CounterTerroristWin : SideEffect()
    class TerroristsWin : SideEffect()
}

fun CounterStrikeState.tick(): List<SideEffect> {
    tick++
    val newTerroristProbability = BASE_TERRORIST_PROBABILITY
    val shootProbability = BASE_SHOOT_PROBABILITY

    val effects: MutableList<SideEffect> = mutableListOf()

    terrorists.forEach { ter ->
        val st = ter.state
        when (st) {
            is TerroristState.Idle -> {
                ter.state = TerroristState.Hidden
                effects.add(SideEffect.HideTerrorist(ter))
            }
            is TerroristState.Hidden -> {
                if (terroristCounter < MAX_TERRORISTS && Random.nextDouble() < newTerroristProbability) {
                    terroristCounter++
                    ter.state = TerroristState.Show(tick)
                    effects.add(SideEffect.ShowTerrorist(ter))
                    ter.x = ter.coverX
                    ter.y = ter.coverY
                }
                if (terroristCounter >= MAX_TERRORISTS && terrorists.count { it.state != TerroristState.Hidden } == 0) {
                    if (result == null) {
                        result = GameResult.Win
                        effects.add(SideEffect.CounterTerroristWin())
                    }
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
                        if (Random.nextDouble() < HIT_PROBABILITY) {
                            health -= HIT_HP
                            effects.add(SideEffect.Hit())
                            if (health <= 0 && result == null) {
                                result = GameResult.Lose
                                effects.add(SideEffect.TerroristsWin())
                            }
                        }
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
