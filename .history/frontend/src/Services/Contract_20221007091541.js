import detectEthereumProvider from "@metamask/detect-provider"
import Web3 from "web3"
import { useEffect} from 'react'
window.ABI = require('./contract-abi.json');

export async function GetContractSymbol() {
    const CONTRACT_ADDRESS = "0x1A5b30a61CED9B4D9c209E7F1d2fbD38657f8EB1"
       useEffect(() => {
        async function fetchContract() {
         
    
        const detected = await detectEthereumProvider()
        if (detected) {
            const web3 = new Web3(detected)

            try {
                const contract = new web3.eth.Contract(
                    window.ABI,
                    CONTRACT_ADDRESS,
                  );
                  console.log(contract.methods
                    .symbol()
                    .call({ from: window.userAddress }))

                const symbol = await contract.methods.symbol().call()

                 alert(`Contract ${CONTRACT_ADDRESS} Symbol: ${symbol}`);  
                  var userAccount;
            
                  const accounts = await web3.eth.getAccounts();
                  if (accounts[0] !== userAccount) {
                      userAccount = accounts[0];
                  }
                  console.log(accounts)
                } catch (error) {
                  // Catch any errors for any of the above operations.
                  alert(
                    `Failed to load web3, accounts, or contract. Check console for details.`, 
                  );
                  console.error(error);
                } 
            }
            else {
                console.error("Please install metamask")
            }
        }
        }, [])  
        }  
   
    // const contract = new window.web3.eth.Contract(
    //     window.ABI,
    //     CONTRACT_ADDRESS
    // )

    
