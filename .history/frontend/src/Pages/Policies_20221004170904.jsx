import AddHomeWorkIcon from '@mui/icons-material/HomeWork'
import WalletIcon from '@mui/icons-material/Wallet';
import ReportIcon from '@mui/icons-material/Report';
import { useState} from 'react'
import { truncateAddress } from '../Services/TruncateAddress'

const PolicyMaker = () => {
    const [myDash, setMyDash] = useState(false)

    const switchNav = () => {
        setMyDash(!myDash)
    }
    return (
        <div onClick={switchNav}>
        {myDash ? <nav>
            <ul>
                <li><AddHomeWorkIcon />      Home</li>
                <li><WalletIcon />           Wallet</li>
                <li>Address  {truncateAddress(window.localStorage.getItem("userAddress"))}</li>
                <li><ReportIcon />           File Report</li>
                <li>Claim Status</li>
                </ul> 
        </nav> : <AddHomeWorkIcon /> }
        
        </div>
    )
}

export default PolicyMaker