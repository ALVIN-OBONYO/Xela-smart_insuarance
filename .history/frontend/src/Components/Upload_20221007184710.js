import { FaPlus} from 'react-icons/fa'
import React, {useState, useRef} from 'react'

import {CardActions, Card, Box, Button } from '@mui/material'

import { BsFillCameraFill} from 'react-icons/bs'

import './Upload.css'
const UploadPhotos = () => {
    
    const [counter, setCounter] = useState(0)
    const imageRef = useRef(null)

    const renderPhotos = () => {
        setCounter(counter + 1)
    }


    const photoList = () => {
        const rowList = []
        for (let i = 0; i < counter; i++){
            rowList.push(`add photo`)
        }
        return (
            <>
            {rowList && rowList.map((e)=> {
                return (
                    <div className="ImageContainer" key={Date.now()}>

                       <img src="" className="Image" alt='' ref={imageRef} />
                       <label htmlFor='inputFile'>
                        <BsFillCameraFill color='black' size="3em"/>
                            <input type="file" className="file-name" id="inputFile" onChange={addPhotoCard} accept="image/*"/>
                       </label>
                    </div>
                )
            })}
            </>
        )
        }
    const addPhotoCard = (event) => {
        let reader = new FileReader()
        reader.onload = function(){
            let output = imageRef.current
            output.src = reader.result;
        }
       if(event.target.files[0]){
        reader.readAsDataURL(event.target.files[0])
       }
       
    }
    return (
        <div>
       
        <CardActions>    
        <Button size="small" onClick={renderPhotos}>add photos <FaPlus /></Button>
        </CardActions>
        <Box sx={{width: 400}}>
        <Card>{photoList()}</Card>
        </Box>
        </div>

    )
}

export default UploadPhotos