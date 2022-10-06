import VehicleForm from "../Components/Input";
import UploadPhotos from "../Components/Upload";
import { Button} from "@mui/material"
const ReportForm = () => {
    return (
        <>
        <VehicleForm />
        <UploadPhotos />
        <Button>Next Page</Button>
        </>
    )
} 

export default ReportForm