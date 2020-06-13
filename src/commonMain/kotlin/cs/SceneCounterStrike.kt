package cs

import com.soywiz.korge.animate.AnLibrary
import com.soywiz.korge.animate.AnMovieClip
import com.soywiz.korge.animate.serialization.readAni
import com.soywiz.korge.input.onClick
import com.soywiz.korge.scene.Scene
import com.soywiz.korge.view.*
import com.soywiz.korio.file.std.resourcesVfs
import com.soywiz.korma.geom.Point
import com.soywiz.korma.random.get
import myOnInteract
import kotlin.random.Random

class SceneCounterStrike : Scene() {
    lateinit var mainLibrary: AnLibrary

    override suspend fun Container.sceneInit() {
        mainLibrary = resourcesVfs["cs/cs_mansion.ani"].readAni(views)
    }

    override suspend fun Container.sceneMain() {

        val mainTimeLine: AnMovieClip = mainLibrary.createMainTimeLine()
        sceneView += mainTimeLine

        val terroristMc = mainTimeLine.get("terrorist")
        terroristMc?.myOnInteract {
            terroristMc.alpha = Random.nextDouble()
        }

        if (false) {
            val row1 = mainTimeLine.get("row1")
            row1?.alpha = 0.3
        }

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

    }
}

fun randomPos(): Point = Point(Random[50, 400], Random[50, 400])