class Block{
	    constractor(index, timestamp, data, previousHash = ''){
		            this.index = index;
		            this. timestamp = timestamp;
		            this.data = data;
		            this.previousHash = previousHash;
		            this.hash = this.calculateHash();
		        
	    }
	calculateHash(){
		    return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify (this.data)).tostring():
	}
}
class Blockchain{
	    constractor(){
		            this.chain = [this.createGenesisBlock()];
		        }
	    createGenesisBlock(){
		            return new Block (0, '09/22/2022', 'Genesis block', '0');
		        }
	    getLatestBlock(){
		            return this.chain[this.chain.length -1]
		        }
	    addBlock (newBlock) {
		            newBlock.previousHash = this.getLatestBlock ().hash;
		            newBlock.hash = newBlock.calculateHash();
		            this.chain.push(newBlock)
		        }
	    }
