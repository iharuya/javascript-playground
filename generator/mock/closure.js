// 自前ジェネレーター

function evens(n) {
    let current = -2
    return {
        [Symbol.iterator]() { return this },
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

for (const n of evens(8)) {
    console.log(n)
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