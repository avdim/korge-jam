import com.soywiz.korge.gradle.GameCategory
import com.soywiz.korge.gradle.KorgeGradlePlugin
import com.soywiz.korge.gradle.korge

buildscript {
    val korgePluginVersion: String by project

    repositories {
        mavenLocal()
        maven { url = uri("https://dl.bintray.com/korlibs/korlibs") }
        maven { url = uri("https://plugins.gradle.org/m2/") }
        mavenCentral()
        google()
    }
    dependencies {
        classpath("com.soywiz.korlibs.korge.plugins:korge-gradle-plugin:$korgePluginVersion")
    }
}

apply<KorgeGradlePlugin>()

korge {
    id = "ru.avdim.korge.jam"
    gameCategory = GameCategory.SIMULATION
//    backgroundColor

}
