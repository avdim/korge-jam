import com.soywiz.korev.MouseEvent
import com.soywiz.korev.addEventListener
import com.soywiz.korge.input.MouseEvents
import com.soywiz.korge.input.mouse
import com.soywiz.korge.input.onClick
import com.soywiz.korge.input.onDown
import com.soywiz.korge.view.View

inline fun <T : View> T.onInteract(noinline handler: suspend () -> Unit): T {
    onDown {
        handler()
    }
    return this
}

inline fun <T : View> T.onClickOnce(noinline handler: suspend (MouseEvents) -> Unit): T {
    if (false) {//todo
        this.mouse.lastEvent.target == this
        this.stage?.mouse?.down?.once { }
        stage?.addEventListener<MouseEvent> { e ->
            e.id
        }
    }
    onClick(handler)
    return this
}
