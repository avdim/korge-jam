import com.soywiz.klock.*
import com.soywiz.korau.sound.readSound
import com.soywiz.korge.*
import com.soywiz.korge.input.onClick
import com.soywiz.korge.tween.*
import com.soywiz.korge.view.*
import com.soywiz.korim.color.*
import com.soywiz.korim.format.*
import com.soywiz.korio.file.std.*
import com.soywiz.korma.geom.*
import com.soywiz.korma.interpolation.*

suspend fun main() = Korge(width = 900, height = 600, bgcolor = Colors["#2b2b2b"]) {
	val soundLoadWin95 = resourcesVfs["win95_loading.mp3"].readSound()
	val playOnce by lazy { soundLoadWin95.play() }
	onClick {
		playOnce
	}

	val backgroundWin95 = image(resourcesVfs["win95.jpg"].readBitmap())
	val minDegrees = (-16).degrees
	val maxDegrees = (+16).degrees

	val image = image(resourcesVfs["korge.png"].readBitmap()) {
		rotation = maxDegrees
		anchor(.5, .5)
		scale(.3)
		position(256, 256)
		alpha = 0.5
	}
	text("Press any key to continue")
		.alignBottomToBottomOf(backgroundWin95)
		.centerXOn(backgroundWin95)//todo blink

	while (true) {
		image.tween(image::rotation[minDegrees], time = 1.seconds, easing = Easing.EASE_IN_OUT)
		image.tween(image::rotation[maxDegrees], time = 1.seconds, easing = Easing.EASE_IN_OUT)
	}
}