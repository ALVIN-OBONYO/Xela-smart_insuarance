import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField' 
import MyCalendar from './Calendar.jsx'
export default function VehicleForm () {
    return (
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': {m: 2, width: '40ch'}
          }}
          noValidate 
          autoComplete='off'
           
          >

            <div>
                <h4>Enter the details of party involved in accident</h4>
            <TextField
          id="outlined-size-small"
          label="Make"
          type="text"
          size="small"
          
          InputLabelProps={{
            shrink: true,
            
          }}
        />
        <TextField
          id="outlined-size-small"
          label="Model"
          type="text"
          size="small"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="outlined-size-small"
          label="Color"
          type="text"
          size="small"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="outlined-size-small"
          label="Number plate"
          type="text"
          size="small"
          InputLabelProps={{
            shrink: true,
          }}
        />
         <TextField
          id="outlined-size-small"
          label="Registration"
          type="text"
          size="small"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <MyCalendar />
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
        />
            </div>
          </Box>
    )
}