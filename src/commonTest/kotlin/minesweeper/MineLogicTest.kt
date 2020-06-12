package minesweeper

import kotlin.test.Test
import kotlin.test.assertEquals

class MineLogicTest() {

    @Test
    fun test1() {
        assertEquals(1, 1)
    }

    @Test
    fun countZeroMines() {
        val count = MineSweeperState(
            matrix = listOf(
                listOf()
            )
        ).minesCount
        assertEquals(0, count)
    }

    @Test
    fun countFullMines() {
        val count = MineSweeperState(
            matrix = listOf(
                listOf(MineSweeperState.Cell(true))
            )
        ).minesCount
        assertEquals(1, count)
    }

    @Test
    fun addMine() {
        val result = emptyState(4, 5).copyAndSetMines(1)
        assertEquals(1, result.minesCount)
    }

    @Test
    fun testRandomState() {
        val TARGET_COUNT = 5
        val result = randomState(3, 3, TARGET_COUNT)
        assertEquals(TARGET_COUNT, result.minesCount)
    }

    @Test
    fun testOverflow() {
        val OVERFLOW_COUNT = 10
        val result = randomState(3, 3, OVERFLOW_COUNT)
        println(result.minesCount)
    }

}
