import VehicleForm from "../Components/Input";
import UploadPhotos from "../Components/Upload";
import { Button, Box} from "@mui/material"
import { useNavigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar"
const ReportForm = () => {
    const navigate = useNavigate()

    const Details = () => {
        navigate("/details")
    }
    return (
        <>
        <Sidebar />
        <VehicleForm />
        <UploadPhotos />
        <Button onClick={Details}>Next Page</Button>
        </>
    )
} 

export default ReportForm