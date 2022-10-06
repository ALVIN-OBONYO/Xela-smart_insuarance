import { useNavigate} from 'react-router-dom'
export const ReportButton = () => {
    const navigate = useNavigate()
     try {
       navigate("/report")
     }
     catch (error) {
        console.log(error)
     }
}