import { showAddress } from "./showAddress";
import { useState} from 'react'
import { useNavigate } from "react-router-dom";
export async function LoginWithEth() {
    const [loginStatus, setLoginStatus] = useState(false)
    const navigate = useNavigate()
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
          
        }
        catch (error) {
            console.error(error)
        }
        navigate("/policy")
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

