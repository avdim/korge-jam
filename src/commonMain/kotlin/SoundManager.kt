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

    private var queueToPlay: List<PlaySoundOptions> = listOf()
    private val needLoadResources: MutableSet<String> = mutableSetOf()
    private val soundByResource: MutableMap<String, NativeSound> = mutableMapOf()

    val csAk1 by addSound("cs/ak47-1.wav")
    val csAk2 by addSound("cs/ak47-2.wav")
    val csAwp by addSound("cs/awp1.wav")
    val csWin by addSound("cs/ctwin.wav")
    val csLose by addSound("cs/terwin.wav")
//    val csHit by addSound("cs/ct_imhit.wav")
    val csLetsGo by addSound("cs/letsgo.wav")
    val csGoGoGo by addSound("cs/com_go.wav")
    val csEnemyDown by addSound("cs/enemydown.wav")
    val win95Loading by addSound("win95_loading.mp3")

    private fun addSound(resource: String): AddSoundDelegate {
        needLoadResources.add(resource)
        return object : AddSoundDelegate {
            override operator fun getValue(soundManager: SoundManager, property: KProperty<*>): MySound {
                return object : MySound {
                    override fun play(volume: Double) {
                        queueToPlay = queueToPlay + PlaySoundOptions(resource, volume)
                        if (queueToPlay.size > 3) {
                            queueToPlay = queueToPlay.takeLast(3)
                        }
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
                    queueToPlay.forEach {
                        soundByResource[it.resource]?.play()
                    }
                    queueToPlay = listOf()
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
