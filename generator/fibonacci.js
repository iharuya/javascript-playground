// ジェネレーターを使うといいよねの例
// 1. メモリ効率良くなる
// 2. イテラブルなものを生成する責任と、それを利用する責任を分離
// 3. 利用するときはいつものようにfor-ofで使えるから書きやすいし読みやすい

// フィボナッチなイテレーションの中でそれを使った処理をする
console.log("ふつうバージョン")
function doFibonacci() {
    let prev = 0
    let current = 1
    while (current < 1000) {
        if (current % 3 === 0) {
            console.log(`${current} (can be divided by 3)`)
        } else {
            console.log(current)
        }
        [prev, current] = [current, prev + current]
    }
}
doFibonacci()

console.log("ジェネレーターバージョン")
function* fibonacci() {
    let prev = 0
    let current = 1
    while (current < 1000) {
        yield current;
        [prev, current] = [current, prev + current]
    }
}
for (const n of fibonacci()) {
    if (n % 3 === 0) {
        console.log(`${n} (can be divided by 3)`)
    } else {
        console.log(n)
    }
}