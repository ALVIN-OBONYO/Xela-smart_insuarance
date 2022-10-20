import AddHomeWorkIcon from '@mui/icons-material/HomeWork'
import WalletIcon from '@mui/icons-material/Wallet';
import ReportIcon from '@mui/icons-material/Report';

import { truncateAddress } from '../Services/TruncateAddress'

const PolicyMaker = () => {
    
    return (
        <>
        <nav>
            <ul>
                <li><AddHomeWorkIcon />      Home</li>
                <li><WalletIcon />           Wallet</li>
                <li>Address  {truncateAddress(window.localStorage.getItem("userAddress"))}</li>
                <li><ReportIcon />           File Report</li>
                <li>Claim Status</li>
                </ul> 
        </nav>
        
        </>
    )
}

export default PolicyMaker