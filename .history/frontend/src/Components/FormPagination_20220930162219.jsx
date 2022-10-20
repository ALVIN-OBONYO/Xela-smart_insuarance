import { Pagination, PaginationItem, Stack } from '@mui/material'
// import { ArrowBackIcon, ArrowForwardIcon} from '@mui/icons-material'
import { Link, useLocation} from 'react-router-dom'
const FormPagination = () => {
    const location = useLocation()
    const query = new URLSearchParams(location.search)
    const page = parseInt(query.get('page') || '1', 10)
    return (
       <Stack spacing={2}>
        <Pagination
           xs={{backgroundColor: "#fff"}}
           page={page}
           count={3}
           renderItem={(item) => (
            <PaginationItem 
            shape="rounded" 
            component={Link}
            
            to={`/report${item.page}`} 
              {...item}
              />
           )}
           />
           </Stack>
    )
           
} 

export default FormPagination