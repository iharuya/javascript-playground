// ref. https://zenn.dev/qnighy/articles/112af47edfda96
class RangeIterator {
    start;
    end;
    constructor (start, end) {
        this.start = start;
        this.end = end;
    }
    [Symbol.iterator]() { return this; }
    next() {
        if (this.start < this.end) {
            return { done: false, value: this.start++ };
        } else {
            return { done: true };
        }
    }
}

for (const x of new RangeIterator(10, 20)) {
    console.log(x);
}

/*
function* range(start, end) {
  while(start < end) yield start++;
}
*/