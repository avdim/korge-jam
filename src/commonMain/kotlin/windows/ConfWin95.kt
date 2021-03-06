package windows

import hexColor

const val WINDOWS_WIDTH = 900
const val WINDOWS_HEIGHT = 600
const val WINDOWS_WIDTH_D: Double = WINDOWS_WIDTH.toDouble()
const val WINDOWS_HEIGHT_D: Double = WINDOWS_HEIGHT.toDouble()
const val WINDOWS_PANEL_HEIGHT = 50.0
val COLOR_WIN_DESKTOP = hexColor(0x008080)
val COLOR_WIN_PANEL = hexColor(0xc3c3c3)
val COLOR_WIN_BUTTON_DEFAULT = COLOR_WIN_PANEL
val COLOR_WIN_BUTTON_BORDER = hexColor(0xc3c3c3 - 0x202020)//windows.getCOLOR_WIN_BUTTON_DEFAULT.minus(hexColor(0x202020))
val COLOR_WIN_BUTTON_DOWN = COLOR_WIN_BUTTON_DEFAULT.plus(hexColor(0x202020))
