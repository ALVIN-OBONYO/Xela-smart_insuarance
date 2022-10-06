import { useNavigate} from 'react-router-dom'
export const ReportButton = () => {
    const navigate = useNavigate()

    return navigate("/report")
}