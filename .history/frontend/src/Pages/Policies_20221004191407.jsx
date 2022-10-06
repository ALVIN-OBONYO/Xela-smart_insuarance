import AddHomeWorkIcon from '@mui/icons-material/HomeWork'
import WalletIcon from '@mui/icons-material/Wallet';
import ReportIcon from '@mui/icons-material/Report';
import { useState} from 'react'
import { truncateAddress } from '../Services/TruncateAddress'
import { getContractSymbol } from '../Services/Contract';
const PolicyMaker = () => {
    const [myDash, setMyDash] = useState(false)
    const [ status, setStatus] = useState("")
    const [message, setMessage] = useState("")
    const switchNav = () => {
        setMyDash(!myDash)
    }
    console.log(getContractSymbol())

    // function smartContractListener() {
    //     getContractSymbol.events.account({}, (err, data) => {
    //         if (err) {
    //             setStatus("yall" + err.message)
    //         } else {
    //             setMessage(data.returnValues[1])
    //         }
    //     })
    // } 
    return (
        <>
        <div onClick={switchNav}>
        {myDash ? <nav className="nav-wallet">
            <ul className="my-wallet">
                <li><AddHomeWorkIcon />      Home</li>
                <li><WalletIcon />           Wallet</li>
                <li>  {truncateAddress(window.localStorage.getItem("userAddress"))}</li>
                <li><ReportIcon />           File Report</li>
                <li>Claim Status</li>
                </ul> 
        </nav> : <AddHomeWorkIcon /> }
        
        </div>
       <button>Contract</button>
      <h3></h3>
        </>
    )
}

export default PolicyMaker