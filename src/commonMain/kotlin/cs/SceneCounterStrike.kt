package cs

import MyDependency
import SoundManager
import com.soywiz.klock.milliseconds
import com.soywiz.klock.seconds
import com.soywiz.korge.animate.AnLibrary
import com.soywiz.korge.animate.AnMovieClip
import com.soywiz.korge.animate.serialization.readAni
import com.soywiz.korge.scene.Scene
import com.soywiz.korge.time.delay
import com.soywiz.korge.view.*
import com.soywiz.korim.color.Colors
import com.soywiz.korio.file.std.resourcesVfs
import com.soywiz.korma.geom.Point
import com.soywiz.korma.geom.vector.rect
import com.soywiz.korma.random.get
import hexColor
import myOnInteract
import windows.WINDOWS_HEIGHT_D
import windows.WINDOWS_WIDTH_D
import kotlin.random.Random

class SceneCounterStrike(val myDependency: MyDependency) : Scene() {
    lateinit var mainLibrary: AnLibrary

    override suspend fun Container.sceneInit() {
        mainLibrary = resourcesVfs["cs/cs_mansion.ani"].readAni(views)
        val mainTimeLine: AnMovieClip = mainLibrary.createMainTimeLine()
        val zoomContainer = container {}
        zoomContainer.addChild(mainTimeLine)
        mainTimeLine.xy(0, 0)

        val sniperContainer = container {  }
        var sniper: View? = null
        fun hideSniper() {
            sniper?.removeFromParent()
        }

        fun showSniper(targetX: Double, targetY: Double) {
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

        val terrorist = mainTimeLine["terrorist"] as AnMovieClip
        terrorist.timelineRunner.gotoAndPlay("default")
        val terroristMask = terrorist["my_mask"]!!
        terroristMask.apply {
            alpha = 0.5
            myOnInteract {
//                terrorist.timelineRunner.gotoAndPlay("fire")
                SoundManager.csAwp.play()
                val targetPos = sniperContainer.globalToLocal(it.currentPosGlobal)

                val zoomTarget = zoomContainer.globalToLocal(it.currentPosGlobal)
                val zoom = 4.0
                zoomContainer.scale = zoom
                zoomContainer.position(zoomTarget * (1.0 - zoom))
//                zoomContainer.position(it.currentPosGlobal - zoomContainer.localToGlobal(zoomTarget))

                showSniper(targetPos.x, targetPos.y)
                delay(200.milliseconds)
                terrorist.timelineRunner.gotoAndPlay("die")
                delay(2.seconds)
                hideSniper()
                zoomContainer.scale = 1.0
                zoomContainer.xy(0.0, 0.0)
                terrorist.timelineRunner.gotoAndPlay("default")
            }
        }


        if (false) {
            val row1 = mainTimeLine.get("row1")
            row1?.alpha = 0.3
        }
    }

    override suspend fun Container.sceneMain() {

        if (false) {
            //val p2 = InteractivePlayer(board, Chip.CIRCLE)
            val mc: AnMovieClip = mainLibrary.createMovieClip("sym1").position(randomPos())
            addChild(mc)
            mc.timelineRunner
            //labels:
            mc.timelineRunner.gotoAndStop("yellow")//or "default"
//		mc.animate {}
//		mc.play()

            container {
                addUpdater {
                    removeChildren()
                    circle().xy(Random[50, 400], Random[50, 400])
                    repeat(3) {
                        addChild(mainLibrary.createMovieClip("sym1").position(randomPos()))
                    }
                }
            }
        }

//        launch {
//            delay(3.seconds)
//            soundCtWin.play()
//        }

    }
}

fun randomPos(): Point = Point(Random[50, 400], Random[50, 400])
