console.log("おっけい明日9時ね")
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
await sleep(3000)
console.log("ごめん寝てた")