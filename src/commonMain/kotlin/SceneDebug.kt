import com.soywiz.klock.milliseconds
import com.soywiz.klock.seconds
import com.soywiz.korau.sound.readSound
import com.soywiz.korge.input.MouseEvents
import com.soywiz.korge.input.mouse
import com.soywiz.korge.scene.Scene
import com.soywiz.korge.time.delay
import com.soywiz.korge.view.*
import com.soywiz.korim.format.readBitmap
import com.soywiz.korio.async.launch
import com.soywiz.korio.file.std.resourcesVfs

class SceneDebug(val myDependency: MyDependency) : Scene() {

    override suspend fun Container.sceneInit() {
        text("Debug")
    }

    override suspend fun Container.sceneMain() {
        text("sceneMain").xy(100, 100)

        views.input.mouse
        views.input.clicked

    }

}