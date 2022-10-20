import AddHomeWorkIcon from '@mui/icons-material/HomeWork'
import WalletIcon from '@mui/icons-material/Wallet';
import ReportIcon from '@mui/icons-material/Report';
import { List, ListItemIcon, Box, Tooltip } from '@mui/material'
import CommentBankIcon from '@mui/icons-material/CommentBank';

const Sidebar = () => {
    return (
        <Box sx={{width: '5vw', position: "absolute", right: 40, top: "25%"}}>
            <List component="nav" sx={{position: "relative", display: "flex", flexDirection: "column", width: "100%", gap: "1.2em"}}>
                <Tooltip title="home" placement="left">
                <ListItemIcon sx={{width: "2em", height: "2em"}}>
                    <AddHomeWorkIcon sx={{fontSize: "2em"}}/>
                </ListItemIcon>
                </Tooltip>
                <Tooltip title="wallet" placement="left">
                <ListItemIcon sx={{width: "2em", height: "2em"}}>
                    <WalletIcon sx={{fontSize: "2em"}}/>
                </ListItemIcon>
                </Tooltip>
                <Tooltip title="new report" placement="left">
                <ListItemIcon sx={{width: "2em", height: "2em"}}>
                    <ReportIcon sx={{fontSize: "2em"}}/>
                </ListItemIcon>
                </Tooltip>
                <Tooltip title="claims"  placement="left">
                <ListItemIcon sx={{width: "2em", height: "2em"}}>
                    <CommentBankIcon sx={{fontSize: "2em"}}/>
                </ListItemIcon>
                </Tooltip>
                </List> 
        </Box>
    )
} 

export default Sidebar