import { useState, useEffect} from 'react'
import {  Card, CardActions, Typography, Box } from '@mui/material'
import { GetContractSymbol } from '../Services/Contract';
import Sidebar from "../Components/Sidebar"


const PolicyMaker = () => {
     
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
    const [policy, setPolicy] = useState([])

    useEffect(() => {
      setPolicy(JSON.parse(localStorage.getItem('planBenefits')))
    
      
    }, [])
    
    return (
        <>
       <Sidebar />
        
       <Typography sx={{fontSize: "1.4rem" }}>Dashboard</Typography>
       
       <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "2.2rem", flexWrap: "wrap"}}>
       <Card sx={{width: "90vw"}}>
       <Typography>{window.userAddress}</Typography>
       </Card>
      <Card sx={{width: "90vw"}}>
        <CardActions>
            <Typography>Current Insurance Plan</Typography>
        </CardActions>
        <CardActions>
            <Typography>{localStorage.getItem('planName')}</Typography>
        </CardActions>
        <CardActions>
            <Typography>Balance for current billing month: 0 </Typography>
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
            {policy && policy.map((elem) => {
                const { text} = elem
                return (
                    <Typography>{text}</Typography>
                )
            }) }
           
        </CardActions>
        
        <button>Change Plan</button>
      </Card>
      </Box>
        </>
    )
}

export default PolicyMaker