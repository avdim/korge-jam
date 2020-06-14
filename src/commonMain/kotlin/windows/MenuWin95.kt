package windows

import MenuItem
import com.soywiz.korge.view.Container
import com.soywiz.korge.view.View
import com.soywiz.korge.view.alignBottomToTopOf
import com.soywiz.korge.view.alignLeftToLeftOf
import com.soywiz.korim.bitmap.Bitmap
import myOnInteract

suspend fun Container.menuWin95(alignDownPanel: View, items: List<MenuItem>) {
    var previousYAnchor: View = alignDownPanel
    items.forEach { item ->
        alignLeftToLeftOf(alignDownPanel)
        previousYAnchor = menuButton(item.img, item.label) {
            alignBottomToTopOf(previousYAnchor)
            myOnInteract {
                item.clickAction()
            }
        }
    }
}

private suspend fun Container.menuButton(img: Bitmap, text: String, lambda: Container.() -> Unit) =
    buttonWin95(WINDOWS_PANEL_HEIGHT * 7, WINDOWS_PANEL_HEIGHT, img, text, lambda)
