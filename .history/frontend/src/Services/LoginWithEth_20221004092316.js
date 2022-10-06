import { showAddress } from "./showAddress";
import { useNavigate } from "react-router-dom";
export async function LoginWithEth() {

    let navigate = useNavigate()
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
          navigate("/policy")
        }
        catch (error) {
            console.error(error)
        }
    } else {
        alert("No ETH browser extension detected.");
    }
}

