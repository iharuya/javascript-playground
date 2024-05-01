const ITERATION_COUNT = 100000000;

function* generateSimpleIterable() {
    for (let i = 0; i < ITERATION_COUNT; i++) {
        yield i
    }
}

function measureFunction(func) {
    console.time('実行時間');
    for (const n of func()) {
        // 
    }
    console.timeEnd('実行時間');

    const memoryUsage = process.memoryUsage();
    console.log(`使用メモリ: ${memoryUsage.heapUsed / 1024 / 1024} MB`);
}

console.log('ジェネレーターを使う方法:');
measureFunction(generateSimpleIterable);