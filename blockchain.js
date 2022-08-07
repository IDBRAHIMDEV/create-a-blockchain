import Block from "./block.js"

class Blockchain {

    constructor() {
        this.chain = [this.newGenesisBlock()]
    }

    newGenesisBlock() {
        return new Block(1, null, new Date(), "0")
    }

    addBlock(newBlock) {
        newBlock.previous = this.chain.at(-1).hash
        newBlock.hash = newBlock.generateHash()
        this.chain.push(newBlock)
    }

    verifyBlockchain() {

        for(let i = 1; i < this.chain.length; i++) {

            let currentBlock = this.chain.at(i)
            let prevuiousBlock = this.chain.at(i - 1)

            if(currentBlock.hash !== currentBlock.generateHash() || currentBlock.previous !== prevuiousBlock.hash) {
                return false
            }

        }

        return true

    }
}

export default Blockchain