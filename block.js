import sha256  from "crypto-js/sha256.js"

class Block {

    constructor(id, data, timestamp, previous = "0") {
        this.id = id
        this.data = data
        this.timestamp = timestamp 
        this.previous = previous
        this.hash = this.generateHash() 
    }

    generateHash() {
        return sha256(this.id + this.timestamp + this.previous + JSON.stringify(this.data)).toString()
    }

}

export default Block