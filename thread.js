const { threadId, isMainThread, parentPort, workerData } = require('worker_threads')

console.log('Thread id is:', threadId);
parentPort.on('message', (data) => {
    let total = 0
    for(let i = 0; i < data; i++) {
        total ++
    }

    parentPort.postMessage(total);
});


