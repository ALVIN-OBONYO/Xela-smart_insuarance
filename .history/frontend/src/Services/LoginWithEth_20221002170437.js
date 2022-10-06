import { showAddress } from "./showAddress";
export async function loginWithEth() {
    if (window.web3) {
        try {
            const selectedAccount = await window.ethereum.request({
                method: "eth_requestAccounts"
            })
            .then((accounts) => accounts[0])
            .catch(() => {
                throw Error("No account selected!")
            })

          window.userAddress = selectedAccount;
          window.localStorage.setItem("userAddress", selectedAccount);  
        //   showAddress()
        }
        catch (error) {
            console.error(error)
        }
    } else {
        alert("No ETH browser extension detected.");
    }
}

