import VehicleForm from "../Components/Input";
import UploadPhotos from "../Components/Upload";
import { Button} from "@mui/material"
import { useNavigate } from "react-router-dom";
const ReportForm = () => {
    const navigate = useNavigate()
    return (
        <>
        <VehicleForm />
        <UploadPhotos />
        <Button onClick={() => navigate("/details")}>Next Page</Button>
        </>
    )
} 

export default ReportForm