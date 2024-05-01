function createFilter(predicate) {
    return (sequence) => {
        function* filterGenerator() {
            for (const item of sequence) {
                if (predicate(item)) {
                    yield item
                }
            }
        }
        return filterGenerator()
    }
}

function createMap(mapping) {
    return (sequence) => {
        function* mapGenerator() {
            for (const item of sequence) {
                yield mapping(item)
            }
        }
        return mapGenerator()
    }
}


const availabilityFilter = createFilter((item) => item.isAvailable)
const toViews = createMap((item) => ({
    name: `商品名: ${item.name}`,
    price: `${item.price.toLocaleString()}円`
}))

const products = [
    { name: 'Apple', isAvailable: true, price: 1000 },
    { name: 'Grape', isAvailable: false, price: 200 },
    { name: 'Peach', isAvailable: true, price: 300 },
    { name: 'Banana', isAvailable: false, price: 400 },
    { name: 'Orange', isAvailable: true, price: 500 },
]

for (const view of toViews(availabilityFilter(products))) {
    console.log(view)
}

// ジェネレーター関数を使ってるけどその中でProducts自体を生成してるわけではないから、メモリ効率性とかは関係ない
// こうすると可読性上がるかもね？っていう例