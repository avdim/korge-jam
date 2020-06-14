package cs

import GlobalDependencies
import SoundManager
import com.soywiz.klock.DateTime
import com.soywiz.korge.animate.AnLibrary
import com.soywiz.korge.animate.AnMovieClip
import com.soywiz.korge.animate.serialization.readAni
import com.soywiz.korge.scene.Scene
import com.soywiz.korge.view.*
import com.soywiz.korim.bitmap.Bitmap
import com.soywiz.korim.color.Colors
import com.soywiz.korim.color.RGBA
import com.soywiz.korim.format.readBitmap
import com.soywiz.korio.file.std.resourcesVfs
import com.soywiz.korma.geom.Point
import com.soywiz.korma.geom.vector.rect
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import myOnInteract
import windows.WINDOWS_HEIGHT_D
import windows.WINDOWS_WIDTH_D
import kotlin.math.sin
import kotlin.random.Random

class SceneCounterStrike(val dependencies: GlobalDependencies) : Scene() {

    val SNIPER_ZOOM = 3.0
    val SNIPER_SIZE = 320.0

    lateinit var mainLibrary: AnLibrary
    lateinit var mainTimeLine: AnMovieClip
    lateinit var state: CounterStrikeState
    lateinit var zoomContainer: Container
    lateinit var sniperContainer: Container
    lateinit var sniperRifle: Bitmap
    lateinit var terroristWrappers: List<TerroristViewWrapper>
    var sniper: View? = null

    override suspend fun Container.sceneInit() {
        mainLibrary = resourcesVfs["cs/cs_mansion.ani"].readAni(views)
        mainTimeLine = mainLibrary.createMainTimeLine()
        zoomContainer = container {}
        zoomContainer.addChild(mainTimeLine)
        mainTimeLine.xy(0, 0)
        sniperContainer = container { }
        sniperRifle = resourcesVfs["cs/awp.png"].readBitmap()
    }

    override suspend fun Container.sceneMain() {
        terroristWrappers = listOf(
            TerroristInstanceData(instanceName = "terrorist1", coverDifX = 60, coverDifY = 0, speed = 1.0)
            , TerroristInstanceData(instanceName = "terrorist2", coverDifX = 100, coverDifY = 20, speed = 0.5)
//            , TerroristInstanceData(instanceName = "terrorist3", coverDifX = -60, coverDifY = 0, speed = 1.0)
            , TerroristInstanceData(instanceName = "terrorist4", coverDifX = 60, coverDifY = 0, speed = 1.0)
            , TerroristInstanceData(instanceName = "terrorist5", coverDifX = -60, coverDifY = 0, speed = 1.0)
            , TerroristInstanceData(instanceName = "terrorist6", coverDifX = -60, coverDifY = 0, speed = 1.0)
            , TerroristInstanceData(instanceName = "terrorist7", coverDifX = 60, coverDifY = 0, speed = 1.0)
            , TerroristInstanceData(instanceName = "terrorist8", coverDifX = -60, coverDifY = 0, speed = 1.0)
            , TerroristInstanceData(instanceName = "terrorist9", coverDifX = 60, coverDifY = 0, speed = 1.0)
        ).map { data ->
            val instanceName = data.instanceName
            TerroristViewWrapper(mainTimeLine[instanceName], data) { wrapper, mouseEvents ->
                if (state.result == null) {
                    val currentPosGlobal = mouseEvents.currentPosGlobal
                    showSniperPos(currentPosGlobal)
                    processEffects(state.kill(wrapper.model))
                }
            }
        }
        sniperRifleLoopAnimation()
        state = CounterStrikeState(terrorists = terroristWrappers.map { it.model })
        addHrUpdater {
            val effects = state.tick()
            launch {
                processEffects(effects)
            }
            state.terrorists.forEach {
                getTerroristWrapper(it).terroristView.x = it.x
                getTerroristWrapper(it).terroristView.y = it.y
            }
        }

        //Health Bar:
        container {
            alpha = 0.5
            val medic = graphics {
                beginFill(Colors.GREEN, 1.0)
                rect(20, 0, 20, 60)
                endFill()
                beginFill(Colors.GREEN, 1.0)
                rect(0, 20, 60, 20)
                endFill()
//                anchor(0.0,0.0)
            }
            text(state.health.toString(), 46.0, Colors.GREEN)
                .alignLeftToRightOf(medic)
                .centerYOn(medic)
                .addUpdater {
                    text = state.health.toString()
                    val healthF = state.health / 100.0f
                    color = RGBA.float(1.0 - healthF, healthF, 0.0)
                }
        }
    }

    private fun CoroutineScope.showSniperPos(currentPosGlobal: Point) {
        val targetPos = sniperContainer.globalToLocal(currentPosGlobal)
        val zoomTarget = zoomContainer.globalToLocal(currentPosGlobal)
        zoomContainer.scale = SNIPER_ZOOM
        zoomContainer.position(zoomTarget * (1.0 - SNIPER_ZOOM))
        hideSniper()
        sniper = sniperContainer.container {
//                alpha = 0.5
            val sniper = mainLibrary.createMovieClip("sniper")
            sniper.width = SNIPER_SIZE
            sniper.height = SNIPER_SIZE
            sniper.x = targetPos.x - SNIPER_SIZE / 2
            sniper.y = targetPos.y - SNIPER_SIZE / 2
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
        launch {
            delay(700)
            hideSniper()
            zoomContainer.scale = 1.0
            zoomContainer.xy(0.0, 0.0)
        }
    }

    private fun sniperRifleLoopAnimation() {
        sniperContainer.image(sniperRifle)
            .alignBottomToBottomOf(sceneView)
            .alignRightToRightOf(sceneView)
            .apply {
                x += 50.0
                y += 50.0
                val baseX = x
                val baseY = y
//                anchor(0.8, 0.8)
                addUpdater {
                    val phase = DateTime.now().unixMillisDouble / 2000
                    x = baseX + 40 * sin(phase * 1.8)
                    y = baseY + 30 * sin(phase)
                    rotation
                }
            }
    }

    fun hideSniper() {
        sniper?.removeFromParent()
    }

    private suspend fun Container.processEffects(effects: List<SideEffect>) {
        effects.forEach {
            processEffect(it)
        }
    }

    private suspend fun Container.processEffect(effect: SideEffect) {
        when (effect) {
            is SideEffect.TerroristShot -> {
                getTerroristWrapper(effect.terrorist)
                    .terroristView.timelineRunner.gotoAndPlay("fire")
                if (state.result == null) {
                    with(SoundManager) {
                        listOf(csAk1, csAk2).random().play()
                    }
                }
            }
            is SideEffect.KillTerrorist -> {
                SoundManager.csAwp.play()
                launch {
                    delay(200)
                    val wrapper = getTerroristWrapper(effect.terrorist)
                    wrapper.terroristView.timelineRunner.gotoAndPlay("die")
                    delay(200)
                    wrapper.terroristView.visible = false
                }
            }
            is SideEffect.ShowTerrorist -> {
                val terroristWrapper = getTerroristWrapper(effect.terrorist)
                terroristWrapper.terroristView.visible = true
                terroristWrapper.terroristView.timelineRunner.gotoAndPlay("default")
            }
            is SideEffect.HideTerrorist -> {//todo maybe redundate
                getTerroristWrapper(effect.terrorist).terroristView.visible = false
            }
            is SideEffect.CounterTerroristWin -> {
                SoundManager.csWin.play()
                text("You win!", 50.0, Colors.GREEN).centerOn(this)
                launch {
                    delay(2000)
                    dependencies.exit()
//                    sceneContainer.changeTo<SceneDesktop>()
                }
            }
            is SideEffect.TerroristsWin -> {
                hideSniper()
                solidRect(WINDOWS_WIDTH_D, WINDOWS_HEIGHT_D, Colors.BLACK)
                    .alpha(0.0)
                    .addHrUpdater { alpha += 0.03 }
                text("You loose :(", 50.0, Colors.RED).centerOn(this)
                launch {
                    delay(500)
                    SoundManager.csLose.play()
                    delay(2000)
                    dependencies.exit()
//                    sceneContainer.changeTo<SceneDesktop>()
                }
            }
            is SideEffect.Hit -> {
                if (Random.nextDouble() < 0.2) {
                    SoundManager.csHit.play()
                }
            }
        }
    }

    private fun getTerroristWrapper(terrorist: Terrorist): TerroristViewWrapper =
        terroristWrappers.first { it.model == terrorist }

}

class TerroristInstanceData(val instanceName: String, val coverDifX: Int, val coverDifY: Int, val speed: Double = 1.0)
class TerroristViewWrapper(
    mc: View?,
    instanceData: TerroristInstanceData,
    terroristInteractHandler: suspend (TerroristViewWrapper, com.soywiz.korge.input.MouseEvents) -> Unit
) {
    val terroristView = mc as AnMovieClip
    val model: Terrorist = Terrorist(
        x = terroristView.x,
        y = terroristView.y,
        openX = terroristView.x,
        openY = terroristView.y,
        coverX = terroristView.x + instanceData.coverDifX,
        coverY = terroristView.y + instanceData.coverDifY,
        speed = instanceData.speed
    )

    init {
        terroristView["my_mask"]?.let { mask ->
            mask.alpha = 0.0
            mask.myOnInteract {
                terroristInteractHandler(this, it)
            }
        }
    }
}
