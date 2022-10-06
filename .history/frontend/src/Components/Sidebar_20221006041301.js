import AddHomeWorkIcon from '@mui/icons-material/HomeWork'
import WalletIcon from '@mui/icons-material/Wallet';
import ReportIcon from '@mui/icons-material/Report';
import { List, ListItemIcon, Box, Tooltip, ListItem, ListItemButton } from '@mui/material'
import CommentBankIcon from '@mui/icons-material/CommentBank';
import { useEffect } from 'react';
import { useNavigate} from 'react-router-dom'
import { getAddress} from '../Services/LoginWithEth';
import { ReportButton } from './Navigate'
const Sidebar = () => {
    const navigate = useNavigate()
    return (
        <Box sx={{width: '5vw', position: "absolute", right: 40, top: "25%"}}>
            <List component="nav" sx={{position: "relative", display: "flex", flexDirection: "column", width: "100%", gap: "1.2em"}}>
                <Tooltip title="home" placement="left">
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemIcon sx={{width: "2em", height: "2em"}}>
                       <AddHomeWorkIcon sx={{fontSize: "2em"}}/>
                    </ListItemIcon>
                    </ListItemButton>
                </ListItem>
                </Tooltip>
                <Tooltip title="wallet" placement="left" >
                <ListItem disablePadding>
                    <ListItemButton disablePadding onClick={getAddress}>   
                    <ListItemIcon sx={{width: "2em", height: "2em"}} >
                       <WalletIcon sx={{fontSize: "2em"}} />
                    </ListItemIcon>
                    </ListItemButton>
                </ListItem>      
                </Tooltip>
                <Tooltip title="new report" placement="left">
                <ListItem disablePadding>
                    <ListItemButton onClick={useEffect(() => {
                        navigate("/report")
                    }, [navigate])
                    }>   
                    <ListItemIcon sx={{width: "2em", height: "2em"}}>
                       <ReportIcon sx={{fontSize: "2em"}}/>
                    </ListItemIcon>
                    </ListItemButton>
                </ListItem>    
                </Tooltip>
                <Tooltip title="claims"  placement="left">
                <ListItem disablePadding>
                    <ListItemButton >     
                    <ListItemIcon sx={{width: "2em", height: "2em"}}>
                       <CommentBankIcon sx={{fontSize: "2em"}}/>
                     </ListItemIcon>
                     </ListItemButton>
                </ListItem>     
                </Tooltip>
                </List> 
        </Box>
    )
} 

export default Sidebar