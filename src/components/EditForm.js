import {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import {Spinner} from 'react-bootstrap'
import axios from 'axios'
import {API_URL} from '../config'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {Button} from  'react-bootstrap'

function EditForm(props) {
    const {todoId} = useParams()

    const [todoDetail, setTodoDetail] = useState(null)

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
	const champions=[
        {label: 'Ahri'},
        {label: 'Amumu'}
    ]
	
    function championPool(event){
        const pool = []
        pool.push(event.target.value)
        console.log(event)
    }
    console.log(todoDetail, "its in the tododeital")
    const {btnEdit} = props
    return (        
        <div>        
    <Box component="form" sx={{'& > :not(style)': { m: 1}}} noValidate autoComplete="off" onSubmit={(e)=> btnEdit(e, todoId)}>
            <TextField id="outlined-basic" label="Summoner Name" variant="outlined" size="small" sx={{width: "48%"}} name="summonerName" />
            <Stack spacing={3} > 
                <Autocomplete multiple id="tags-outlined" options={champions} sx={{width: "48%"}} defaultValue={[champions[0]]} filterSelectedOptions renderInput={(params) => (
                        <TextField {...params} label="Favorite Champions"  name="favChamps" onChange={championPool} placeholder="Choose 3 champions max." size="small"/>
                )}/>
            </Stack>
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
            <TextField id="outlined-multiline-flexible" label="Note" size="small" name="note" sx={{width: "48%"}} multiline maxRows={2}/>

			<Button  type="submit"  >Submit</Button>
            
		</Box>
        </div>
    )
}

export default EditForm
