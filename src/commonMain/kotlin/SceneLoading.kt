import com.soywiz.klock.milliseconds
import com.soywiz.klock.seconds
import com.soywiz.korau.sound.NativeSound
import com.soywiz.korau.sound.readSound
import com.soywiz.korge.input.MouseEvents
import com.soywiz.korge.input.mouse
import com.soywiz.korge.scene.Scene
import com.soywiz.korge.time.delay
import com.soywiz.korge.view.*
import com.soywiz.korim.format.readBitmap
import com.soywiz.korio.async.delay
import com.soywiz.korio.async.launch
import com.soywiz.korio.file.std.resourcesVfs
import kotlinx.coroutines.GlobalScope

object SoundManager {

    private val soundsToPlay:MutableList<NativeSound> = mutableListOf()//todo save multi threads on JVM

    private lateinit var win95Loading:NativeSound
    private lateinit var csAwp:NativeSound

    suspend fun firstSceneInit(stage:Stage?) {
        win95Loading = resourcesVfs["win95_loading.mp3"].readSound(streaming = true)
        csAwp = resourcesVfs["cs/awp1.wav"].readSound(streaming = true)

        MouseEvents::down.get(stage!!.mouse).once {
            GlobalScope.launch {
                while (true) {
                    delay(50.milliseconds)
                    soundsToPlay.forEach {
                        it.play()
                    }
                    soundsToPlay.clear()
                }
            }
        }
    }
    fun playCsAwp() {
        soundsToPlay.add(csAwp)
    }
    fun playWin95Loading() {
        soundsToPlay.add(win95Loading)
    }
}

class SceneLoading(val myDependency: MyDependency) : Scene() {

    override suspend fun Container.sceneInit() {
        text("Loading...")
//        val soundLoadWin95 = resourcesVfs["win95_loading.mp3"].readSound(streaming = true)
//        val soundAwp = resourcesVfs["cs/awp1.wav"].readSound(streaming = true)
        SoundManager.firstSceneInit(stage)
        SoundManager.playWin95Loading()
    }

    override suspend fun Container.sceneMain() {
        val backgroundWin95 = image(resourcesVfs["win95.jpg"].readBitmap())
        val waitText = text("Press any key to continue") {
            alignBottomToBottomOf(backgroundWin95)
            centerXOn(backgroundWin95) //todo blink
            y -= 30.0
        }

        launch {
            while (true) {
                delay(350.milliseconds)
                waitText.visible = false
                delay(150.milliseconds)
                waitText.visible = true
            }
        }

        sceneView.myOnInteract {
            sceneContainer.changeTo<SceneDesktop>()
        }
        launch {
            delay(3.seconds)
            sceneContainer.changeTo<SceneDesktop>()
        }
    }

}