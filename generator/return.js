function* whatIfReturns() {
    yield 1
    return 'Hello World';
    // yield 'Hello World';
}

const gen = whatIfReturns();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

// yieldは関数を途中で止めるという意味で、returnは関数を終了するという意味
// ジェネレーターのreturnは最後のyieldと同じ意味を持つ