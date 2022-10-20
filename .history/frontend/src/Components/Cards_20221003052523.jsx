import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import MdDone from 'react-icons/md'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

const PlanCard = () => {
    return (
        <>
        <CardContent>
            <Typography sx={{ fontSize: 14}} color="text.secondary" gutterBottom>
                Basic Plan
            </Typography>
        </CardContent>
        </>
    )
} 
