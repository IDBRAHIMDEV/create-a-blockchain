import Blockchain from "./blockchain.js";
import Block from "./block.js";


const brightCoin = new Blockchain()

brightCoin.addBlock(new Block(1, {price: 120, course: "DJANGO"}, new Date(2022, 8, 5)))
brightCoin.addBlock(new Block(1, {price: 100, course: "PYTHON"}, new Date(2022, 8, 6)))
brightCoin.addBlock(new Block(1, {price: 50, course: "REACT"}, new Date(2022, 8, 7)))
brightCoin.addBlock(new Block(1, {price: 80, course: "VUE3"}, new Date(2022, 8, 8)))

console.log(JSON.stringify(brightCoin, null, 4))

console.log("Blockchain is valid : ", brightCoin.verifyBlockchain())

brightCoin.chain[2].data = {course: "REACT", price: 40}

console.log(JSON.stringify(brightCoin, null, 4))

console.log("Blockchain is valid : ", brightCoin.verifyBlockchain())