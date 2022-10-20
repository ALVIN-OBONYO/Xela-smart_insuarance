// import detectEthereumProvider from "@metamask/detect-provider"
 import Web3 from "web3"
// import { useEffect} from 'react'
window.ABI= require('./contract-abi.json');

export async function GetContractSymbol() {
    const CONTRACT_ADDRESS = "0x1A5b30a61CED9B4D9c209E7F1d2fbD38657f8EB1";
    const web3 = new Web3(window.ethereum)
    const contract = new web3.eth.Contract(
      window.ABI,
      CONTRACT_ADDRESS
    );
    const symbol = await contract.methods
      .symbol()
      .call({ from: window.userAddress });
    alert(`Contract ${CONTRACT_ADDRESS} Symbol: ${symbol}`);
  }
