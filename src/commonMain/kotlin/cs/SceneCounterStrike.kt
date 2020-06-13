package cs

import MyDependency
import com.soywiz.klock.seconds
import com.soywiz.korau.sound.readSound
import com.soywiz.korge.animate.AnLibrary
import com.soywiz.korge.animate.AnMovieClip
import com.soywiz.korge.animate.serialization.readAni
import com.soywiz.korge.input.MouseEvents
import com.soywiz.korge.input.mouse
import com.soywiz.korge.input.onClick
import com.soywiz.korge.scene.Scene
import com.soywiz.korge.time.delay
import com.soywiz.korge.view.*
import com.soywiz.korio.async.launch
import com.soywiz.korio.file.std.resourcesVfs
import com.soywiz.korma.geom.Point
import com.soywiz.korma.random.get
import myOnInteract
import kotlin.random.Random

class SceneCounterStrike(val myDependency: MyDependency) : Scene() {
    lateinit var mainLibrary: AnLibrary

    override suspend fun Container.sceneInit() {
        text("Loading...")
        val soundAwp = resourcesVfs["cs/awp1.wav"].readSound(streaming = true)

        mainLibrary = resourcesVfs["cs/cs_mansion.ani"].readAni(views)
        val mainTimeLine: AnMovieClip = mainLibrary.createMainTimeLine()
        sceneView += mainTimeLine

        val terroristMc = mainTimeLine.get("terrorist")
        terroristMc?.myOnInteract {
            SoundManager.playCsAwp()
            terroristMc.alpha = Random.nextDouble()
        }

        if (false) {
            val row1 = mainTimeLine.get("row1")
            row1?.alpha = 0.3
        }
    }

    override suspend fun Container.sceneMain() {
        val soundCtWin = resourcesVfs["cs/ctwin.wav"].readSound()

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
