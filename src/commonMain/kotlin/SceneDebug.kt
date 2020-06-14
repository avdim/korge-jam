import com.soywiz.korge.scene.Scene
import com.soywiz.korge.view.*

class SceneDebug(val myDependency: GlobalDependencies) : Scene() {

    override suspend fun Container.sceneInit() {
        text("Debug")
    }

    override suspend fun Container.sceneMain() {
        text("sceneMain").xy(100, 100)

        views.input.mouse
        views.input.clicked

    }

}