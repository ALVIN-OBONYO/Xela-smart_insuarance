import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import {MdDone} from 'react-icons/md'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import  IconButton  from '@mui/material/IconButton'
import { customerTransaction } from '../Services/transactions'
const planValues = [
    {id: 1, text: "Bodily injury liability coverage"},
    {id: 2, text: "Collision Coverage"},
    {id: 3, text: "Comperehensive Customer Support"}
    
]

const premium = [
    {id: 1, text: "Everything in basic plan"},
    {id: 2, text: "Property Damage Liability"},
    {id: 3, text: "Uninsured/ underinsured motorist coverage"},
    {id: 3, text: "Medical payments Coverage"},
]

const deluxe = [
    {id: 1, text: "Advantages of basic and premium plans"},
    {id: 2, text: "Personal Injury Protection(PIP)"},
    {id: 3, text: "Damages coverage from natural disasters"},
    
]
const PlanCard = () => {
    const Basic = () => {
       localStorage.setItem('planName', 'Basic') 
       localStorage.setItem('planBenefits', planValues)
       customerTransaction()
    }

    const Premium = () => {
        localStorage.setItem('planName', 'Premium')
        localStorage.setItem('planBenefits', premium)
        customerTransaction()
    }

    const Deluxe = () => {
       localStorage.setItem('planName', 'Deluxe') 
       localStorage.setItem('planBenefits', deluxe)
       customerTransaction()
    }
    return (
        <Box sx={{ display: "flex", mx: "1.2em", flexDirection: "row", flexWrap: "wrap", gap: "0.9em"}}>
        <Card sx={{background: 'linear-gradient(to right, #141e30, #243b55)', color: 'white'}}>
        <CardContent>
            <Typography sx={{ fontSize: 16}} color="text.primary             " gutterBottom>
                Basic Plan   (ksh 2500 per month)
            </Typography>
            <List sx={{ width: '100%'}}>
                {planValues.map((elem)=> (
                <ListItem key={elem.id} disableGutters secondaryAction={
                    <IconButton>
                        <MdDone />
                    </IconButton>
                }>
                <ListItemText primary={elem.text} />
                </ListItem>
                ))}
            </List>
            <Button onClick={Basic}>Buy Now</Button>
        </CardContent>
        </Card>
        <Card sx={{background: "linear-gradient(to right, #DECBA4, #3E5151)"}}>
        <CardContent>
            <Typography sx={{ fontSize: 16}} color="white" gutterBottom>
                Premium Plan   (ksh 6500 per month)
            </Typography>
            <List sx={{ width: '100%'}}>
                {premium.map((elem)=> (
                <ListItem key={elem.id} disableGutters secondaryAction={
                    <IconButton>
                        <MdDone />
                    </IconButton>
                }>
                <ListItemText primary={elem.text} />
                </ListItem>
                ))}
            </List>
            <Button onClick={Premium}>Buy Now</Button>
        </CardContent>
        </Card>
        <Card sx={{background: "linear-gradient(to right, #434343 0%, black 100%)", color: "white"}}>
        <CardContent>
            <Typography sx={{ fontSize: 14}} color="white" gutterBottom>
                Deluxe Plan   (ksh 9500 per month)
            </Typography>
            <List sx={{ width: '100%'}}>
                {deluxe.map((elem)=> (
                <ListItem key={elem.id} disableGutters secondaryAction={
                    <IconButton>
                        <MdDone color="white"/>
                    </IconButton>
                }>
                <ListItemText primary={elem.text} />
                </ListItem>
                ))}
            </List>
            <Button onClick={Deluxe}>Buy Now</Button>
        </CardContent>
        </Card>
        </Box>
    )
} 

export default PlanCard