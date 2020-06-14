import com.soywiz.korev.MouseEvent
import com.soywiz.korev.addEventListener
import com.soywiz.korge.input.MouseEvents
import com.soywiz.korge.input.mouse
import com.soywiz.korge.input.onDown
import com.soywiz.korge.view.View
import com.soywiz.korim.color.RGBA

inline fun <T : View> T.myOnInteract(noinline handler: suspend (MouseEvents) -> Unit): T {
    onDown {
        handler(it)
    }
    return this
}

inline fun <T : View> T.myOnClickOnce(noinline handler: () -> Unit): T {
    mouse.down.once {
        mouse.up.once {
            handler()
        }
    }
    if (false) {//todo
        this.mouse.lastEvent.target == this
        this.stage?.mouse?.down?.once { }
        stage?.addEventListener<MouseEvent> { e ->
            e.id
        }
    }
//    onClick(handler)
    return this
}

fun hexColor(hex: Int): RGBA = RGBA(r = hex ushr 16 and 0xFF, g = hex ushr 8 and 0xFF, b = hex and 0xFF)
