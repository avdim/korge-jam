import com.soywiz.korge.input.onDown
import com.soywiz.korge.view.View

inline fun <T : View?> T.onInteract(noinline handler: suspend () -> Unit) = onDown {
    handler()
}
