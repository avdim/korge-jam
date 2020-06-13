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
import kotlin.reflect.KProperty

object SoundManager {

    private val soundsToPlay: MutableList<PlaySoundOptions> = mutableListOf() //todo multi threads
    private val needLoadResources: MutableSet<String> = mutableSetOf()
    private val soundByResource: MutableMap<String, NativeSound> = mutableMapOf()

    val csAwp by addSound("cs/awp1.wav")
    val csWin by addSound("cs/ctwin.wav")
    val win95Loading by addSound("win95_loading.mp3")

    private fun addSound(resource: String): AddSoundDelegate {
        needLoadResources.add(resource)
        return object : AddSoundDelegate {
            override operator fun getValue(soundManager: SoundManager, property: KProperty<*>): MySound {
                return object : MySound {
                    override fun play(volume: Double) {
                        soundsToPlay.add(PlaySoundOptions(resource, volume))
                    }
                }
            }
        }
    }

    suspend fun firstSceneInit(stage: Stage) {
        needLoadResources.forEach { res: String ->
            soundByResource[res] = resourcesVfs[res].readSound(streaming = true)
        }

        MouseEvents::down.get(stage.mouse).once {
            GlobalScope.launch {
                while (true) {
                    delay(50.milliseconds)
                    soundsToPlay.forEach {
                        soundByResource[it.resource]?.play()
                    }
                    soundsToPlay.clear()
                }
            }
        }
    }
}

interface MySound {
    fun play(volume: Double = 1.0)
}

class PlaySoundOptions(
    val resource: String,
    val volume: Double // todo volume
)

interface AddSoundDelegate {
    operator fun getValue(soundManager: SoundManager, property: KProperty<*>): MySound
}
