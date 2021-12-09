import axios from 'axios'
import {useState, useEffect} from 'react'
import {Spinner} from 'react-bootstrap'
import {Link, Navigate} from 'react-router-dom'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function TodoList(props) {

    const {todos} = props

    const [summonerRank, setSummonerRank] = useState([])

     useEffect(() => {
        const getData = async () => {
            for(let i=0; i<todos.length; i++){
                let response = await axios.get(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${todos[i].summonerName}?api_key=RGAPI-e6fc9a61-0d33-4e9a-bcc7-f90d61dce166`)

                let rankResponse = await axios.get(`https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${response.data.id}?api_key=RGAPI-e6fc9a61-0d33-4e9a-bcc7-f90d61dce166`)
                
                rankResponse.data.length === 1 ? setSummonerRank(rankResponse.data[0].tier + " " + rankResponse.data[0].rank, ...summonerRank) :
                rankResponse.data.length === 2 ? setSummonerRank(rankResponse.data[1].tier + " " + rankResponse.data[1].rank, ...summonerRank) :
                rankResponse.data.length === 3 ? setSummonerRank(rankResponse.data[2].tier + " " + rankResponse.data[2].rank, ...summonerRank) : setSummonerRank('Unranked', ...summonerRank)                           
            }           
        }
        getData()
      }, [])


    if(!todos.length) {
        return <Spinner animation="grow" variant="dark" />
    }

    return (             
            <TableContainer  component={Paper}>
            {console.log(summonerRank)}
            <Table sx={{ minWidth: 650 }}  size="small" aria-label="a dense table">
                <TableHead>
                <TableRow sx={{backgroundColor: 'gray'}}>
                    <TableCell>Summoner Name</TableCell>
                    <TableCell>Role</TableCell>
                    <TableCell>Rank</TableCell>
                    <TableCell>Note</TableCell>     
                </TableRow>
                </TableHead>
                <TableBody>
                {todos.map((elem) => (
                    <TableRow key={elem.summonerName} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell>{elem.summonerName}</TableCell>
                        <TableCell>{elem.position}</TableCell>
                        <TableCell>{summonerRank}</TableCell>
                        <TableCell>{elem.note}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>

  
                    )

}

export default TodoList
