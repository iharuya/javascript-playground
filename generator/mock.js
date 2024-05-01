// generatorっぽい関数

function evens(n) {
    let current = -2
    return {
        next: () => {
            if (current + 2 <= n) {
                current += 2
                return { value: current, done: false }
            }
            return { value: undefined, done: true}
        }
    }
}

console.log("自前")
const gen = evens(8)
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

const gen2 = evens(8)
let item = gen2.next()
while (!item.done) {
    console.log(item.value)
    item = gen2.next()
}

console.log("ジェネレーター")
function* evensWithGenerator(n) {
    let current = -2
    while (current + 2 <= n) {
        current += 2
        yield current
    }
}
for (const n of evensWithGenerator(8)) {
    console.log(n)
}