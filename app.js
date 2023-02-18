const { Worker, isMainThread } = require("worker_threads")
const express = require("express");
const app = express();
app.use(express.json())


const products = [];
total = null;

app.post("/products", (req, res) => {
  const { name, price } = req.body;
  const product = {name, price};
  products.push(product)

  return res.json(product);
})

app.get("/", async (req, res) => {
    
  await createThread(1000000000).then((res)).then((res) =>{
    threadOne = res
  }).catch((error) => {
    threadOne = error
  })

  await createThread(1000000000).then((res)).then((res) =>{
    threadTwo = res
  }).catch((error) => {
    threadTwo = error
  })

  await createThread(1000000000).then((res)).then((res) =>{
    threadThree = res
  }).catch((error) => {
    threadThree = error
  })

  await createThread(1000000000).then((res)).then((res) =>{
    threadFour = res
  }).catch((error) => {
    threadFour = error
  })

  // let threadOne = 0
  // let threadTwo = 0
  // let threadThree = 0
  // let = threadFour = 0
  // for(let i = 0; i < 4000000000; i++) {
  //   threadOne ++
  // }


  return res.json({threadOne: threadOne, threadTwo: threadTwo, threadThree: threadThree, threadFour: threadFour})
})


function createThread(number) {
  const worker = new Worker('./thread.js')
  const data = new Promise((resolve, reject) => {
    worker.on('message', resolve); 
    worker.on('error', reject); 
  });

  worker.postMessage(number)
  return data;
}


app.listen(8000, () => console.log("Servidor na porta 8000"))