package windows

import com.soywiz.korge.view.*
import com.soywiz.korim.bitmap.Bitmap
import com.soywiz.korim.color.Colors

suspend fun Container.buttonWin95(
    width: Double,
    height: Double,
    img: Bitmap? = null,
    label: String? = null,
    lambda: Container.() -> Unit
) =
    fixedSizeContainer(width, height) {
        val btnContainer = this
        val outerBorder = solidRect(width, height, COLOR_WIN_BUTTON_BORDER).centerOn(btnContainer)
        val innerBorder = solidRect(width * 0.9, height * 0.9, COLOR_WIN_BUTTON_DEFAULT)
            .centerOn(outerBorder)

//            this.width = width
//            this.height = height

        val imageIcon = img?.let {
            image(it) {
                size(height * 0.8, height * 0.8)
                alignLeftToLeftOf(innerBorder)
                centerYOn(innerBorder)
            }
        }
        if (label != null) {
            if (imageIcon != null) {
                text(label) {
                    alignLeftToRightOf(imageIcon)
                    centerYOn(innerBorder)
                    color = Colors.BLACK
                }
            } else {
                text(label)
                    .centerOn(innerBorder)
            }
        }
        lambda()
    }