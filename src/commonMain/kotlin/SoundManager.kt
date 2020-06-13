import com.soywiz.klock.milliseconds
import com.soywiz.korau.sound.NativeSound
import com.soywiz.korau.sound.readSound
import com.soywiz.korge.input.MouseEvents
import com.soywiz.korge.input.mouse
import com.soywiz.korge.view.Stage
import com.soywiz.korio.async.delay
import com.soywiz.korio.async.launch
import com.soywiz.korio.file.std.resourcesVfs
import kotlinx.coroutines.GlobalScope

object SoundManager {

    private val soundsToPlay: MutableList<NativeSound> = mutableListOf()//todo save multi threads on JVM

    private lateinit var win95Loading: NativeSound
    private lateinit var csAwp: NativeSound

    suspend fun firstSceneInit(stage: Stage) {
        win95Loading = resourcesVfs["win95_loading.mp3"].readSound()
        csAwp = resourcesVfs["cs/awp1.wav"].readSound(streaming = true)

        MouseEvents::down.get(stage.mouse).once {
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
