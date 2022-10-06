import Web3 from 'web3'

window.ABI = require('./contract-abi.json');



export async function getContractSymbol() {
    const CONTRACT_ADDRESS = "0x1A5b30a61CED9B4D9c209E7F1d2fbD38657f8EB1"
    const web3 = new Web3(window.ethereum)
    const contract = new web3.eth.Contract(
        window.ABI,
        CONTRACT_ADDRESS
    )

    console.log(contract.methods.symbol().call())

    const symbol = await contract.methods.symbol().name

     alert(`Contract ${CONTRACT_ADDRESS} Symbol: ${symbol}`);  
}