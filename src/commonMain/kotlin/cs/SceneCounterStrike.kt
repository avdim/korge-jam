package cs

import MyDependency
import SoundManager
import com.soywiz.klock.DateTime
import com.soywiz.klock.milliseconds
import com.soywiz.klock.seconds
import com.soywiz.korev.MouseEvents
import com.soywiz.korge.animate.AnLibrary
import com.soywiz.korge.animate.AnMovieClip
import com.soywiz.korge.animate.serialization.readAni
import com.soywiz.korge.scene.Scene
import com.soywiz.korge.time.delay
import com.soywiz.korge.view.*
import com.soywiz.korim.color.Colors
import com.soywiz.korim.format.readBitmap
import com.soywiz.korio.file.std.resourcesVfs
import com.soywiz.korma.geom.Point
import com.soywiz.korma.geom.vector.rect
import com.soywiz.korma.random.get
import myOnInteract
import windows.WINDOWS_HEIGHT_D
import windows.WINDOWS_WIDTH_D
import kotlin.math.sin
import kotlin.random.Random

class SceneCounterStrike(val myDependency: MyDependency) : Scene() {

    override suspend fun Container.sceneInit() {

    }

    override suspend fun Container.sceneMain() {
        val mainLibrary: AnLibrary = resourcesVfs["cs/cs_mansion.ani"].readAni(views)
        val mainTimeLine: AnMovieClip = mainLibrary.createMainTimeLine()
        val zoomContainer = container {}
        zoomContainer.addChild(mainTimeLine)
        mainTimeLine.xy(0, 0)

        val sniperContainer = container { }
        var sniper: View? = null
        fun hideSniper() {
            sniper?.removeFromParent()
        }

        fun showSniperTarget(targetX: Double, targetY: Double) {
            hideSniper()
            sniper = container {
                alpha = 0.5
                val SNIPER_SIZE = 200.0
                val sniper = mainLibrary.createMovieClip("sniper")
                sniper.width = SNIPER_SIZE
                sniper.height = SNIPER_SIZE
                sniper.x = targetX - SNIPER_SIZE / 2
                sniper.y = targetY - SNIPER_SIZE / 2
//            sniper.xy(targetX - SNIPER_SIZE/2, sniper.y - targetY)
                addChild(sniper)

                graphics {
                    beginFill(Colors.BLACK, 1.0)
                    fun safeRect(x: Double, y: Double, w: Double, h: Double) {
                        if (w > 0 && h > 0) {
                            rect(x, y, w, h)
                        }
                    }
                    safeRect(0.0, 0.0, sniper.x, sniper.y)
                    safeRect(sniper.x, 0.0, sniper.width, sniper.y)
                    safeRect(sniper.x + sniper.width, 0.0, WINDOWS_WIDTH_D - sniper.x - sniper.width, sniper.y)

                    safeRect(0.0, sniper.y, sniper.x, sniper.height)
                    safeRect(
                        sniper.x + sniper.width,
                        sniper.y,
                        WINDOWS_WIDTH_D - sniper.x - sniper.width,
                        sniper.height
                    )

                    safeRect(0.0, sniper.y + sniper.height, sniper.x, WINDOWS_HEIGHT_D - sniper.y + sniper.height)
                    safeRect(
                        sniper.x,
                        sniper.y + sniper.height,
                        sniper.width,
                        WINDOWS_HEIGHT_D - sniper.y + sniper.height
                    )
                    safeRect(
                        sniper.x + sniper.width,
                        sniper.y + sniper.height,
                        WINDOWS_WIDTH_D - sniper.x - sniper.width,
                        WINDOWS_HEIGHT_D - sniper.y + sniper.height
                    )
                    endFill()
                }
            }.also {
                sniperContainer.addChild(it)
            }

        }

        val terroristInteractHandler: (com.soywiz.korge.input.MouseEvents) ->Unit = {
            val targetPos = sniperContainer.globalToLocal(it.currentPosGlobal)
            val zoomTarget = zoomContainer.globalToLocal(it.currentPosGlobal)
            val zoom = 4.0
            zoomContainer.scale = zoom
            zoomContainer.position(zoomTarget * (1.0 - zoom))
            showSniperTarget(targetPos.x, targetPos.y)
        }
        val untypedMovieClip = mainTimeLine["terrorist1"]
        val terroristView = untypedMovieClip as AnMovieClip
        terroristView.timelineRunner.gotoAndPlay("default")
        val terroristMask = terroristView["my_mask"]!!
        terroristMask.apply {
            alpha = 0.0
            myOnInteract {
                terroristInteractHandler(it)
                delay(200.milliseconds)
                terroristView.timelineRunner.gotoAndPlay("die")
                delay(1.seconds)
                hideSniper()
                zoomContainer.scale = 1.0
                zoomContainer.xy(0.0, 0.0)
                terroristView.timelineRunner.gotoAndPlay("default")
            }
        }

        image(resourcesVfs["cs/awp.png"].readBitmap())
            .alignBottomToBottomOf(sceneView)
            .alignRightToRightOf(sceneView)
            .apply {
                x += 50.0
                y += 50.0
                val baseX = x
                val baseY = y
//                anchor(0.8, 0.8)
                addUpdater {
                    val phase = DateTime.now().unixMillisDouble / 2000
                    x = baseX + 40 * sin(phase * 1.8)
                    y = baseY + 30 * sin(phase)
                    rotation
                }
            }

        val state = CounterStrikeState(
            terrorists = listOf(
                Terrorist(
                    x = 0.0,
                    y = 0.0,
                    showX = terroristView.x,
                    showY = terroristView.y,
                    hideX = terroristView.x + 100.0,
                    hideY = terroristView.y
                )
            )
        )
        addHrUpdater {
            val effects = state.tick()
            effects.forEach {
                if (it is SideEffect.Shoot) {
                    it.terrorist
                    terroristView.timelineRunner.gotoAndPlay("fire")
                    with(SoundManager) {
                        listOf(csAk1, csAk2).random().play()
                    }
                }
                if(it is SideEffect.Kill) {
                    SoundManager.csAwp.play()
                }
            }
            state.terrorists
        }
    }
}

fun randomPos(): Point = Point(Random[50, 400], Random[50, 400])
fun todoSound(obj:Any?) = Unit