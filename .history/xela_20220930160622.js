const { createSHA256 } = import ('crypto-js');

class Block{
    constractor (index, timestamp, data, previousHash = '') { /*index tells us where the block sits on the chain, timestamp when the block was created, data is whatever data you want to include, previousHash contains the string of previous block.It ensures the integrity of the blockchain. */
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash;
    }

    calculateHash(){ /* calculates the Hash function and identify the block on the blockchain */
    return SHA256 (this.index + this.timestamp + JSON.stringify (this.data)).toString();
    }
}


class Blockchain{
    constractor (){
        this.chain = [this.createGenesisBlock()];
     }

     createGenesisBlock(){
        return newBlock (0,"09/28/2022","Genesis block","0");
     }

     getLatestBlock(){
        return this.chain [this.chain.length -1];
     }

     addBlock(newBlock){
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculatehash();
        this.chain.push(newBlock);
     }

    }

let codility = new Blockchain();
codility.addBlock(new Block(1,"10/09/2022", { amount: 40000 })); // amount repaid as compensation
codility.addBlock(new Block(2,"14/09/2022", { amount: 2000000 })); // amount repaid as compensation

console.log(JSON.stringify(codility, null, 4 ));


