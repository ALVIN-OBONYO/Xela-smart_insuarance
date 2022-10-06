import AddHomeWorkIcon from '@mui/icons-material/HomeWork'
import WalletIcon from '@mui/icons-material/Wallet';
import ReportIcon from '@mui/icons-material/Report';
import { List, ListItemIcon, Box } from '@mui/material'
import { useState} from 'react'
import { truncateAddress } from '../Services/TruncateAddress'
import { getContractSymbol } from '../Services/Contract';
const PolicyMaker = () => {
    const [myDash, setMyDash] = useState(false)
    const [ status, setStatus] = useState("")
    const [message, setMessage] = useState("")
 
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
        <div>
        <nav className="nav-wallet">
            <ul className="my-wallet">
                <li><AddHomeWorkIcon /></li>
                <li><WalletIcon /></li>
                <li>  {truncateAddress(window.localStorage.getItem("userAddress"))}</li>
                <li><ReportIcon /></li>
                <li>Claim Status</li>
                </ul> 
        </nav> 
        
        </div>
        <Box sx={{width: '5vw', position: "absolute", right: 0}}>
            <List component="nav" sx={{position: "relative"}}>
                <ListItemIcon>
                    <AddHomeWorkIcon />
                </ListItemIcon>
                <ListItemIcon>
                    <WalletIcon />
                </ListItemIcon>
                <ListItemIcon>
                    <ReportIcon />
                </ListItemIcon>
                </List> 
        </Box>
       <button>Contract</button>
      <h3>we w</h3>
        </>
    )
}

export default PolicyMaker