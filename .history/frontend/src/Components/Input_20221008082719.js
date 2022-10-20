//import {useRef} from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField' 
import MyCalendar from './Calendar.jsx'
import Button from '@mui/material/Button'
export default function VehicleForm () {
  // const makeRef = useRef()
  // const modelRef = useRef()
  // const colorRef = useRef()
  // const plateRef = useRef()
  // const regRef = useRef()
    return (
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': {m: 2, width: '40ch', display: "flex", flexDirection: "column"}
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

export const DetailsForm = () => {
    return (
        <>
        <Box
        component="form"
        sx={{
          '& .MuiTextField-root': {m: 2, width: '40ch'}
        }}
        noValidate 
        autoComplete='off'
         
        >

          <div>
              <h4>Police Officer Details</h4>
          <TextField
        id="outlined-size-small"
        label="Name"
        type="text"
        size="small"
        
        InputLabelProps={{
          shrink: true,
          
        }}
      />
      <TextField
        id="outlined-size-small"
        label="Badge Number"
        type="text"
        size="small"
        InputLabelProps={{
          shrink: true,
        }}
      />
      
          </div>
          <div>
          <h4>Involved Party Details</h4>
      <TextField
    id="outlined-size-small"
    label="Name"
    type="text"
    size="small"
    
    InputLabelProps={{
      shrink: true,
      
    }}
  />
  <TextField
    id="outlined-size-small"
    label="Insurer"
    type="text"
    size="small"
    InputLabelProps={{
      shrink: true,
    }}
  />
  <TextField
    id="outlined-size-small"
    label="Policy Number"
    type="text"
    size="small"
    InputLabelProps={{
      shrink: true,
    }}
  />

<TextField
    id="outlined-size-small"
    label="Phone Number"
    type="text"
    size="small"
    InputLabelProps={{
      shrink: true,
    }}
  />
  
      </div>
      <div>
      <h4>Witnesses(Optional)</h4>
  <TextField
id="outlined-size-small"
label="Name"
type="text"
size="small"

InputLabelProps={{
  shrink: true,
  
}}
/>
<TextField
id="outlined-size-small"
label="Phone Number"
type="text"
size="small"
InputLabelProps={{
  shrink: true,
}}
/>
<Button>Add Witness</Button>
  </div>
        </Box>
        </>
    )
}