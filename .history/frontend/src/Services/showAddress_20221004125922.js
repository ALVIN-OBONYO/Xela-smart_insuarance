import React, { useState, useContext, useEffect} from 'react'
import { truncateAddress } from './TruncateAddress'
import { getCurrentWallet } from './LoginWithEth'
const MyContext = React.createContext()

export function useAuth() {
    return useContext(MyContext)
}

export default function ContextFunc({children}) {
    const [ setCurrentUser] = useState("")

    function showAddress(yourAddress, buttonLogout) {
        if (!window.userAddress) {
            yourAddress = ""
            buttonLogout.add("hidden")
           
             return false
        }

        yourAddress = `ETH Address: ${truncateAddress(window.userAddress)}`
        buttonLogout.remove("hidden")
    }

    const value = { showAddress}
     
    useEffect( () => {
        async function fetchUser(){
        const { address} = await getCurrentWallet()

        setCurrentUser(address)
        }
        fetchUser()
    }, [])
   

    return (
        <div>
            <MyContext.Provider value={value}>
                {children}
            </MyContext.Provider>
        </div>
    )
}