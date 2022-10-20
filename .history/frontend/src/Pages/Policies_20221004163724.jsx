import {AddHomeWorkIcon, WalletIcon, ReportIcon } from '@mui/icons-material'

import { truncateAddress } from '../Services/TruncateAddress'

const PolicyMaker = () => {
    
    return (
        <>
        <nav>
            <ul>
                <li><AddHomeWorkIcon />      Home</li>
                <li><WalletIcon />           Wallet</li>
                <li>Address  {truncateAddress(window.userAddress)}</li>
                <li><ReportIcon />           File Report</li>
                <li>Claim Status</li>
                </ul> 
        </nav>
        
        </>
    )
}

export default PolicyMaker