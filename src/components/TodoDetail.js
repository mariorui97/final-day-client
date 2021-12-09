import {useState, useEffect} from 'react'
import {useParams, Link, Navigate} from 'react-router-dom'
import {Spinner} from 'react-bootstrap'
import axios from 'axios'
import {API_URL} from '../config'
import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

function TodoDetail(props) {
    // We get this 'todoId' from the <Route path="/todo/:todoId "> we defined in App.js
    const {todoId} = useParams()

    const [todoDetail, setTodoDetail] = useState(null)

    // This will run just ONCE after the component has mounted
    useEffect(() => {
        const getData = async () => {
           // Fetching info for a single todo  
           let response = await axios.get(`${API_URL}/todos/${todoId}`,{withCredentials: true})
           setTodoDetail(response.data)
        }
        getData()
    }, [])

    // Ensuring only logged in users see the page

    if(!todoDetail) {
        return <Spinner animation="grow" variant="dark" />
    }

    const {btnSubmit, btnEdit, btnDelete} = props
    const champions=[
        {label: 'Ahri'},
        {label: 'Amumu'}
    ]
    return (
 <Box component="form" sx={{'& > :not(style)': { m: 1}}} noValidate autoComplete="off" onSubmit={btnSubmit}>
            <TextField id="outlined-basic" label="Name" variant="outlined" size="small" name="name" />     
            <TextField id="outlined-basic" label="Password" variant="outlined" size="small" name="password"/>
            <TextField id="outlined-basic"  label="Email" variant="outlined" size="small" name="email" />
            <Divider />
            <br/>
            <TextField id="outlined-basic" label="Summoner Name" variant="outlined" size="small" sx={{width: "48%"}} name="summonerName" />
            <Stack spacing={3} > 
                <Autocomplete multiple id="tags-outlined" options={champions} defaultValue={[champions[0]]} filterSelectedOptions renderInput={(params) => (
                        <TextField {...params} label="Favorite Champions" placeholder="Choose 3 champions max." size="small"/>
                )}/>
            </Stack>
            <FormControl component="fieldset">
                <FormLabel component="legend">Profile:</FormLabel>
                    <RadioGroup row aria-label="position" name="row-radio-buttons-group">
                        <FormControlLabel value="top" control={<Radio />} label="Top Laner" />
                        <FormControlLabel value="jungle" control={<Radio />} label="Jungler" />
                        <FormControlLabel value="mid" control={<Radio />} label="Mid Laner" />
                        <FormControlLabel value="adc" control={<Radio />} label="AD Carry" />
                        <FormControlLabel value="supp" control={<Radio />} label="Support" />
                        <FormControlLabel value="fill" control={<Radio />} label="Fill" />
                    </RadioGroup>
            </FormControl>
            <br/>               
            <TextField id="outlined-multiline-flexible" label="Note" size="small" name="note" sx={{width: "48%"}} multiline maxRows={2}/>
            <br/>
            <Button  type="submit"  >Submit</Button>
            <button>
                <Link to={`/todo/${todoDetail._id}/edit`} >Edit</Link>
            </button>
            <button onClick={() => { btnDelete(todoDetail._id)  }  } >Delete</button>
        </Box>
    )
}

export default TodoDetail
