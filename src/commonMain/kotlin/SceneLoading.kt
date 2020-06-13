import com.soywiz.klock.milliseconds
import com.soywiz.klock.seconds
import com.soywiz.korge.scene.Scene
import com.soywiz.korge.time.delay
import com.soywiz.korge.view.*
import com.soywiz.korim.format.readBitmap
import com.soywiz.korio.async.launch
import com.soywiz.korio.file.std.resourcesVfs

class SceneLoading(val myDependency: MyDependency) : Scene() {

    override suspend fun Container.sceneInit() {
        SoundManager.win95Loading.play()
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
