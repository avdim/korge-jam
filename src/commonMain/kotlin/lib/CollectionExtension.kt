package lib

inline fun <T> Collection<T>.transformI(index: Int, lambda: (T) -> T): List<T> =
    mapIndexed { i, element ->
        if (i == index) {
            lambda(element)
        } else {
            element
        }
    }
