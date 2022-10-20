import { useState} from 'react'
import {  Card, CardActions, CardContent, Typography, Box } from '@mui/material'
import { truncateAddress } from '../Services/TruncateAddress'
import { GetContractSymbol } from '../Services/Contract';
import Sidebar from "../Components/Sidebar"

const PolicyMaker = () => {
    const [myDash, setMyDash] = useState(false)
    const [ status, setStatus] = useState("")
    const [message, setMessage] = useState("")
 
    console.log(GetContractSymbol())

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
       <Sidebar />
        
       <Typography sx={{fontSize: "1.4rem" }}>Dashboard</Typography>
       <Card variant="contained" sx={{maxWidth: "70vw", padding: "2px" }}>{window.userAddress}</Card>
       <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "2.2rem", flexWrap: "wrap"}}>
      <Card sx={{width: "90vw"}}>
        <CardActions>
            <Typography>Current Insurance Plan</Typography>
        </CardActions>
        <CardActions>
            <Typography>Basic</Typography>
        </CardActions>
        <CardActions>
            <Typography>Balance for current billing month </Typography>
        </CardActions>
      </Card>
      <Card sx={{width: "90vw"}}>
        <CardActions>
            <Typography>Complete Claims</Typography>
        </CardActions>
        <CardActions>
            <Typography>Pending Claims</Typography>
        </CardActions>
        <CardActions>
            <Typography>0</Typography>
        </CardActions>
      </Card>
      <Card sx={{width: "90vw"}}>
        <CardActions>
            <Typography>Benefits</Typography>
        </CardActions>
        <CardActions>
            <Typography>Lorem, ipsum dolor.</Typography>
        </CardActions>
        <CardActions>
            <Typography>Lorem, ipsum dolor.</Typography>
        </CardActions>
        <button>Change Plan</button>
      </Card>
      </Box>
        </>
    )
}

export default PolicyMaker