import axios from 'axios'
import {useState, useEffect} from 'react'
import {Spinner} from 'react-bootstrap'
import {Link, Navigate, Routes, Route, useNavigate} from 'react-router-dom'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {API_URL} from '../config'
import './TodoList.css'

function TodoList(props) {

    const {todos} = props

    
    const [summonerRank, setSummonerRank] = useState([])
    const REACT_APP_RIOT_API_KEY = process.env.RIOT_API   


     useEffect(() => {
        const getData = async () => {
            try{

                let summonerRanksArray = []

            for(let i=0; i<todos.length; i++){
                let response = await axios.get(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${todos[i].summonerName}?api_key=${REACT_APP_RIOT_API_KEY}`)

                let rankResponse = await axios.get(`https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${response.data.id}?api_key=${REACT_APP_RIOT_API_KEY}`)
                
                rankResponse.data.length === 1 && summonerRanksArray.push(rankResponse.data[0].tier + " " + rankResponse.data[0].rank) 
                rankResponse.data.length === 2 && summonerRanksArray.push(rankResponse.data[1].tier + " " + rankResponse.data[1].rank) 
                rankResponse.data.length === 3 && summonerRanksArray.push(rankResponse.data[2].tier + " " + rankResponse.data[2].rank) 
                // setSummonerRank(...summonerRank, 'Unranked')                           
            }
                console.log("newArray", summonerRanksArray)
                setSummonerRank(summonerRanksArray)
            }
            catch(err){
                console.log(err)
            }           
        }
        
        getData()
        
      }, [])


    if(!todos.length) {
        return <Spinner animation="grow" variant="dark" />
    }

    return (
        <>
        <span><h2>no more jung or top <h2 style={{display: "inline", margin: 'auto', color: '#268d81' }}>diff</h2></h2></span>
        <h3>climb to chally</h3>                  
            <TableContainer component={Paper} sx={{width: '98%', margin: 'auto', backgroundColor:'#5b6268'}}>
            <Table sx={{ minWidth: 650}}  size="small" aria-label="a dense table">
                <TableHead >
                <TableRow sx={{backgroundColor: '#33383d' }}>
                    <TableCell style={{fontWeight: '600', borderBlockColor: '#5b6268', color: '#268d81' }}>Summoner Name</TableCell>
                    <TableCell style={{fontWeight: '600', borderBlockColor: '#5b6268', color: '#268d81' }}>Role</TableCell>
                    <TableCell style={{fontWeight: '600', borderBlockColor: '#5b6268', color: '#268d81' }}> Rank</TableCell>
                    <TableCell style={{fontWeight: '600', borderBlockColor: '#5b6268', color: '#268d81' }}>Fav Champs</TableCell>
                    <TableCell style={{fontWeight: '600', borderBlockColor: '#5b6268', color: '#268d81' }}>Match History</TableCell>
                    <TableCell style={{fontWeight: '600', borderBlockColor: '#5b6268', color: '#268d81' }}>Note</TableCell>     
                </TableRow>
                </TableHead>
                <TableBody>
                
                {todos.map((elem, i) => (
                    <TableRow key={elem.summonerName} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell style={{borderBlockColor: '#33383d'}}>{elem.summonerName}</TableCell>
                        <TableCell style={{borderBlockColor: '#33383d'}}>{elem.position}</TableCell>
                        {summonerRank.length ? <TableCell style={{borderBlockColor: '#33383d'}}>{summonerRank[i]}</TableCell> : <TableCell style={{borderBlockColor: '#33383d'}}><Spinner animation="grow" size="small" variant="dark" /></TableCell>}
                        <TableCell style={{borderBlockColor: '#33383d'}}>not deffined yet</TableCell>
                        <TableCell style={{borderBlockColor: '#33383d'}}>
                        <a style={{fontWeight: '600', color:'#3c988e'}} href={`https://euw.op.gg/summoner/userName=${elem.summonerName}`} rel="noreferrer" target="_blank">op.gg link</a>
                        </TableCell>
                        <TableCell style={{borderBlockColor: '#33383d'}}>{elem.note}</TableCell>                        
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
            </>
  
                    )

}

export default TodoList
