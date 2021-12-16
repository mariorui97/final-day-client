import {Button} from  'react-bootstrap'
import {useContext} from 'react';
import {UserContext} from '../context/app.context'
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


function AddForm(props){
	const {name} = useContext(UserContext)

	// Props will look like
	/*
		props = {
			btnSubmit: Function
		}
	*/


	const {btnSubmit} = props

	const champions=[
        {label: 'Ahri'},
        {label: 'Amumu'}
    ]
	
    function championPool(event){
        const pool = []
        pool.push(event.target.value)
        console.log(event)
    }
    
	return (
 		<Box component="form" sx={{'& > :not(style)': { m: 1}}} noValidate autoComplete="off" onSubmit={btnSubmit}>
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
	)
}

export default AddForm