import { useContext, useEffect} from 'react'
const MyContext = React.createContext()

export function useAuth() {
    return useContext(MyContext)
}

export default function LoadProvider({children}) {
    const [loading, setLoading] = useState(true)

    function login(mywindow) {
        if (mywindow) {
            const selectedAccount = window.ethereum.request({
                method: "eth_requestAccounts"
            })
            .then((accounts) => accounts[0])
            .catch(() => {
                throw Error("No account selected!")

            })

            window.userAddress = selectedAccount;
            window.localStorage.setItem("userAddress", selectedAccount);  
         
        }
    }

    useEffect(() => {
        
    })

    const value = { login}
}