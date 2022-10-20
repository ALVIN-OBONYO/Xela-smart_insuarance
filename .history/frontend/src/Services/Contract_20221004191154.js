window.ABI = require('./contract-abi.json')
export async function getContractSymbol() {
    const CONTRACT_ADDRESS = "0x1A5b30a61CED9B4D9c209E7F1d2fbD38657f8EB1"

    const contract = new window.web3.eth.Contract(
        window.ABI,
        CONTRACT_ADDRESS
    )

    const symbol = await contract.methods.symbol().call({
        from: window.userAddress  
      })

    alert(`Contract ${CONTRACT_ADDRESS} Symbol: ${symbol}`);  
}