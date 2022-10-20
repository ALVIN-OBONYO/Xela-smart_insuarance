import AddHomeWorkIcon from '@mui/icons-material/HomeWork'
import WalletIcon from '@mui/icons-material/Wallet';
import ReportIcon from '@mui/icons-material/Report';
import { useState} from 'react'
import { truncateAddress } from '../Services/TruncateAddress'
import { getContractSymbol } from '../Services/Contract';
const PolicyMaker = () => {
    const [myDash, setMyDash] = useState(false)

    const switchNav = () => {
        setMyDash(!myDash)
    }
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

        <button onClick={getContractSymbol.event.account}>Contract</button>

        </>
    )
}

export default PolicyMaker