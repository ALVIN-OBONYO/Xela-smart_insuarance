import { Pagination, PaginationItem, Stack } from '@mui/material'
// import { ArrowBackIcon, ArrowForwardIcon} from '@mui/icons-material'
import { Link, useLocation, Outlet} from 'react-router-dom'
import { useMemo} from 'react'
const FormPagination = () => {
    const location = useLocation()
    const query = useMemo(() => new URLSearchParams(location.search), [location.search])
     const page = parseInt(query.get('page') || '1', 10 )
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
            
            to={`/report${item.page === 1 ? '' : `?page=${item.page}`}`}
              {...item}
              />
           )}
           />
           
           </Stack>
    )
           
} 

export default FormPagination