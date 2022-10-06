import { useState} from 'react'
import {  Card, CardActions, CardContent, Typography } from '@mui/material'
import { truncateAddress } from '../Services/TruncateAddress'
import { getContractSymbol } from '../Services/Contract';
import Sidebar from "../Components/Sidebar"
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
       <Sidebar />
        
       <h2>Dashboard</h2>
      <Card sx={{maxWidth: "70vw"}}>
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
      <Card sx={{maxWidth: "70vw"}}>
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
      <Card sx={{maxWidth: "70vw"}}>
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
        </>
    )
}

export default PolicyMaker