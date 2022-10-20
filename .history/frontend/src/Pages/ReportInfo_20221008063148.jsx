import { DetailsForm } from "../Components/Input"
import { Button} from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useState} from "react"
const ReportInfo = () => {
    const navigate = useNavigate()
    const [message, setMessage] = useState("")
    const sendReport = () => {
         setMessage("Your claim review is in progress")
         navigate("/report")
    }
    return (
        <>
        <DetailsForm />
        <Button>Previous</Button>
        <Button onClick={sendReport}>Send Report</Button>
        {message && <div className="message">{message}</div>}
        </>
    )
}

export default ReportInfo