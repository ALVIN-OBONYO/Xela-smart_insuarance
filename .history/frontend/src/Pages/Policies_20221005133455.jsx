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
       
        <Box sx={{width: '5vw', position: "absolute", right: 5}}>
            <List component="nav" sx={{position: "relative", display: "flex", flexDirection: "column", width: "100%"}}>
                <ListItemIcon sx={{width: "2em", height: "2em"}}>
                    <AddHomeWorkIcon sx={{size: "2em"}}/>
                </ListItemIcon>
                <ListItemIcon sx={{width: "2em", height: "2em"}}>
                    <WalletIcon sx={{size: "2em"}}/>
                </ListItemIcon>
                <ListItemIcon sx={{width: "2em", height: "2em"}}>
                    <ReportIcon sx={{size: "2em"}}/>
                </ListItemIcon>
                </List> 
        </Box>
       <button>Contract</button>
      <h3>we w</h3>
        </>
    )
}

export default PolicyMaker