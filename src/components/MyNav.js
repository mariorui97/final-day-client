import {Navbar, Nav} from  'react-bootstrap'
import {Link} from  'react-router-dom'
import {useState, useEffect, useContext} from 'react'
import {UserContext} from '../context/app.context'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import './MyNav.css'
import axios from 'axios'
import {API_URL} from '../config'

function MyNav({todos, ...props}) {

	const {user} = useContext(UserContext)
     
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
  const [userId, setUserId] = useState(null)
 	const [listed, setListed] = useState(false)

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
    	setAnchorEl(null);
	};


  
  useEffect(() => {
    const handleId = async () => {
      let userResponse = await axios.get(`${API_URL}/user`,{withCredentials: true})
      setUserId(userResponse.data._id)
    }
    handleId()
  }, [])
  
 
 
  useEffect(() => { 
    const handleCheck = async () => { 
      try{    
          for(let i=0; i<todos.length; i++){
            await (todos[i].userId[0]._id === userId) && setListed(true) 
          }
        }      
      catch(err){
        console.log(err, 'error')
      }        
    }   
    handleCheck()
  }, [userId])

return (
	<div>  
	<div className="navBar">
  {console.log(userId, 'id')}	
		<Box  sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>        
			<Typography sx={{marginLeft: '5%' }}><Link  to="/">duos</Link></Typography>
			<Typography sx={{ minWidth: '55%',  marginLeft: '5%' }}><Link  to="/lore" >league of legends</Link></Typography>		
      {(listed == false && user) ? <Typography sx={{minWidth: '35%', marginLeft: '5%', background:'radial-gradient(circle, rgba(42,157,143,0.6166841736694677) 42%, rgba(63,94,251,0.5018382352941176) 96%);' }}><Link className="queueme" to="/add-form">queue me +</Link></Typography> : null}
		</Box>
		<Tooltip title="Account settings">
			<IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
				<Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
			</IconButton>
		</Tooltip>
	</div>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
	  {
		  user ? (	<div>	  
			<MenuItem>
		<ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
		  <Link to="/todo/:todoId/edit">Edit Profile</Link>
        </MenuItem>
        <Divider />        
        <MenuItem onClick={props.onLogout}>
          <ListItemIcon >
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
		</div>) : (<div>
		<MenuItem>
		<ListItemIcon>
            <PersonAdd fontSize="small" />
            <Link  to="/signin"> Log In</Link>
          </ListItemIcon>
		  
        </MenuItem>  
	</div>
	  )
		  
	  }
	  </Menu>

	  </div>
	)
}
export default MyNav