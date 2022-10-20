import { useAuth } from "./showAddress";
export async function LoginWithEth() {
    // const { btnLogin} = useAuth()
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
                     
        //    btnLogin.current.classList.add("btn-log") 
          
        }
        catch (error) {
            console.error(error)
        }
        
    } else {
        alert("No ETH browser extension detected.");
    }
}

export const getCurrentWallet = async () => {
    if (window.ethereum) {
        try {
            const addressRay = await window.ethereum.request({
                method: "eth_accounts",
            })
            if (addressRay.length > 0) {
                return {
                    address: addressRay[0],
                    status: "write message"
                }
            }
            else {
                return {
                    address: "",
                    status: " Connect to metamask"
                }
            }
        } catch (err) {
            return {
                address: "",
                status: err.message
            }
        }
    }
    else {
        return {
            address: "",
            status: (
                <span>
                    Install metamask
                </span>
            )
        }
    }
}

