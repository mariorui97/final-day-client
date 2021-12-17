import {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import {Spinner} from 'react-bootstrap'
import axios from 'axios'
import {API_URL} from '../config'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React from 'react'
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {Button} from  'react-bootstrap'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import championsNames from '../champion.json'
import InputLabel from '@mui/material/InputLabel';
import './EditForm.css'

function EditForm(props) {
    const {todoId} = useParams()


    const [todoDetail, setTodoDetail] = useState(null)
    const [age, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);
    // This will run just ONCE after the component has mounted
    useEffect(() => {
        const getData = async () => {
           // Fetching info for a single todo  
           let response = await axios.get(`${API_URL}/todos/${todoId}`, {withCredentials: true})
           setTodoDetail(response.data)
        }
        getData()
    }, [])

    if(!todoDetail) {
        return <Spinner animation="grow" variant="dark" />
    }

    const handleChange = (event) => {
        setAge(event.target.value);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
      const handleOpen = () => {
        setOpen(true);
      };
      
    const {btnEdit} = props
    
    return (        
        <div className="edit-form">        
    <Box component="form" sx={{'& > :not(style)': { m: 1}, alignItems: 'center', display: 'flex', flexDirection: 'column', minWidth: '100vh'}} noValidate autoComplete="off" onSubmit={(e)=> btnEdit(e, todoId)}>
            <h1>Edit your queue</h1>
            <TextField id="outlined-basic" label="Summoner Name" variant="outlined" size="small" sx={{width: "100%"}} name="summonerName" />
            <Stack sx={{minWidth: '75%'}} >
            <br/>
            <InputLabel sx={{marginLeft: '-3%'}} id="demo-controlled-open-select">Select a champion</InputLabel>
                <Select sx={{width: '100%'}} labelId="demo-controlled-open-select-label" id="demo-controlled-open-select" name="favChamps" open={open} onClose={handleClose} onOpen={handleOpen} value={age} label="Select a champion" onChange={handleChange}>
                    
                    <MenuItem value=""><em>None</em></MenuItem>
                    {
                        Object.values(championsNames.data).map((elem)=> 
                        <MenuItem key={elem.id} value={elem.name}>{elem.name}</MenuItem>
                    )
                    }
  
                </Select>
            </Stack>
            <br/>
            <FormControl component="fieldset">
                <FormLabel component="legend">Choose your position:</FormLabel>
                    <RadioGroup row aria-label="position" name="position">
                        <FormControlLabel value="top" control={<Radio />} label="Top Laner" />
                        <FormControlLabel value="jungle" control={<Radio />} label="Jungler" />
                        <FormControlLabel value="mid" control={<Radio />} label="Mid Laner" />
                        <FormControlLabel value="adc" control={<Radio />} label="AD Carry" />
                        <FormControlLabel value="supp" control={<Radio />} label="Support" />
                    </RadioGroup>
            </FormControl>
            <br/>  
                         
            <TextField id="outlined-multiline-flexible" label="Note - Max 15 chars." size="small" name="note" sx={{width: "48%"}}  inputProps={{ maxLength: 15 }} maxRows={1}/>

			<Button style={{backgroundColor: '#268d81', borderStyle: 'none'}} type="submit"  >Submit</Button>
            
		</Box>
        </div>
    )
}

export default EditForm
