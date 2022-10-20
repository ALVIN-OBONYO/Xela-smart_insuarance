const CONTRACT_ADDRESS = "0x1A5b30a61CED9B4D9c209E7F1d2fbD38657f8EB1"
const addressArray = await window.ethereum.request({
    method: "eth_requestAccounts"
})
const transactionParameters = {
    from: addressArray[0],
    to: CONTRACT_ADDRESS,
    // value: '0x293434x341af62c0000',
    // gasPrice: '0x09184e242',
    
}

export async function customerTransaction()  {
    
    const txHash = await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
    })
   
    return txHash
}

