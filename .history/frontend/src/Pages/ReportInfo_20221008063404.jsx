import { DetailsForm } from "../Components/Input"
import { Button} from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useState, useEffect} from "react"
const ReportInfo = () => {
    const navigate = useNavigate()
    const [message, setMessage] = useState("")
    const SendReport = () => {
        useEffect(() => {
            setTimeout(() => {
                setMessage("Your claim review is in progress") 
            }, [2500]);
        })
         
         navigate("/report")
    }
    return (
        <>
        <DetailsForm />
        <Button>Previous</Button>
        <Button onClick={SendReport}>Send Report</Button>
        {message && <div className="message">{message}</div>}
        </>
    )
}

export default ReportInfo