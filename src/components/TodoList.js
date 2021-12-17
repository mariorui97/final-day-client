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
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

function TodoList(props) {

    const {todos} = props

    const navigate = useNavigate()
    const [summonerRank, setSummonerRank] = useState([])
    const [summonerTier, setSummonerTier] = useState([])

    const riotApi = process.env.REACT_APP_RIOT_API      

    const handleChatClick = (chatUserId) => {
        const { user } = props

        if(!user){
            navigate('/signin')
            return; 
        }
        else {
           let data = {
               participants: [chatUserId, user._id]
           }
           axios.post(`${API_URL}/conversation`, data, {withCredentials: true})
                .then((response) => {
                    navigate(`/chat/${response.data._id}`)
                })
            
        }
    }

     useEffect(() => {
        const getData = async () => {
            let summonerRanksArray = []
            let summonerTiersArray = []

            try{                

            for(let i=0; i<todos.length; i++){
                let response = await axios.get(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${todos[i].summonerName}?api_key=${riotApi}`)
                let rankResponse = null;
                !response.data ? summonerRanksArray.push('Unranked') : (rankResponse = await axios.get(`https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${response.data.id}?api_key=${riotApi}`))
                for (let i=0; i<rankResponse.data.length; i++){
                    rankResponse.data[i].queueType === 'RANKED_SOLO_5x5' && summonerRanksArray.push(rankResponse.data[i].tier + " " + rankResponse.data[i].rank)
                    rankResponse.data[i].queueType === 'RANKED_SOLO_5x5' && summonerTiersArray.push(rankResponse.data[i].rank)
                }      
            }
                setSummonerRank(summonerRanksArray)
                setSummonerTier(summonerTiersArray)
            }
            catch(err){
                summonerRanksArray.push('Unranked')
                console.log(err, 'err')
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
                    <TableCell style={{fontWeight: '600', borderBlockColor: '#5b6268', color: '#268d81' }}>Fav Champ</TableCell>
                    <TableCell style={{fontWeight: '600', borderBlockColor: '#5b6268', color: '#268d81' }}>Match History</TableCell>
                    <TableCell style={{fontWeight: '600', borderBlockColor: '#5b6268', color: '#268d81' }}>Note</TableCell>     
                    <TableCell style={{fontWeight: '600', borderBlockColor: '#5b6268', color: '#268d81' }}>Chat</TableCell>   
                </TableRow>
                </TableHead>
                <TableBody>
                
                {todos.map((elem, i) => (
                    <TableRow key={elem.summonerName} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell style={{borderBlockColor: '#33383d'}}>{elem.summonerName}</TableCell>
                        {elem.position === 'top' ? <TableCell style={{borderBlockColor: '#33383d'}}>{<img  src='/icon/Position_Plat-Top.png' alt='top'/>}</TableCell> : elem.position === 'mid' ? <TableCell style={{borderBlockColor: '#33383d'}}>{<img  src='/icon/Position_Plat-Mid.png' alt='mid'/>}</TableCell> : elem.position === 'jungle' ? <TableCell style={{borderBlockColor: '#33383d'}}>{<img  src='/icon/Position_Plat-Jungle.png' alt='jungle'/>}</TableCell> : elem.position === 'adc' ? <TableCell style={{borderBlockColor: '#33383d'}}>{<img  src='/icon/Position_Plat-Bot.png' alt='bot'/>}</TableCell> : <TableCell style={{borderBlockColor: '#33383d'}}>{<img  src='/icon/Position_Plat-Support.png' alt='supp'/>}</TableCell>}
                        {summonerRank.length && 
                        (summonerRank[i] == ('PLATINUM IV')) ? 
                            (<TableCell style={{borderBlockColor: '#33383d'}}>{(<><img src={"/icon/Emblem_Platinum.png"}/> {summonerTier[i]}</>)} </TableCell>) : 
                                (summonerRank[i] == ('PLATINUM III')) ? 
                                    (<TableCell style={{borderBlockColor: '#33383d'}}>{(<><img src={"/icon/Emblem_Platinum.png"}/> {summonerTier[i]}</>)} </TableCell>) :
                                        (summonerRank[i] == ('PLATINUM II')) ? 
                                            (<TableCell style={{borderBlockColor: '#33383d'}}>{(<><img src={"/icon/Emblem_Platinum.png"}/> {summonerTier[i]}</>)} </TableCell>) :
                                                 (summonerRank[i] == ('PLATINUM I')) ? 
                                                    (<TableCell style={{borderBlockColor: '#33383d'}}>{(<><img src={"/icon/Emblem_Platinum.png"}/> {summonerTier[i]}</>)} </TableCell>) :
                                                        (summonerRank[i] == ('GOLD IV')) ? 
                                                            (<TableCell style={{borderBlockColor: '#33383d'}}>{(<><img src={"/icon/Emblem_Gold.png"}/> {summonerTier[i]}</>)} </TableCell>) :
                                                                (summonerRank[i] == ('GOLD III')) ? 
                                                                    (<TableCell style={{borderBlockColor: '#33383d'}}>{(<><img src={"/icon/Emblem_Gold.png"}/> {summonerTier[i]}</>)} </TableCell>) :
                                                                        (summonerRank[i] == ('GOLD II')) ? 
                                                                            (<TableCell style={{borderBlockColor: '#33383d'}}>{(<><img src={"/icon/Emblem_Gold.png"}/> {summonerTier[i]}</>)} </TableCell>) :
                                                                                (summonerRank[i] == ('GOLD I')) ? 
                                                                                    (<TableCell style={{borderBlockColor: '#33383d'}}>{(<><img src={"/icon/Emblem_Gold.png"}/> {summonerTier[i]}</>)} </TableCell>) :
                                                                                                (summonerRank[i] == ('SILVER IV')) ? 
                                                                                                    (<TableCell style={{borderBlockColor: '#33383d'}}>{(<><img src={"/icon/Emblem_Silver.png"}/> {summonerTier[i]}</>)} </TableCell>) :
                                                                                                        (summonerRank[i] == ('SILVER III')) ? 
                                                                                                            (<TableCell style={{borderBlockColor: '#33383d'}}>{(<><img src={"/icon/Emblem_Silver.png"}/> {summonerTier[i]}</>)} </TableCell>) :
                                                                                                                (summonerRank[i] == ('SILVER II')) ? 
                                                                                                                    (<TableCell style={{borderBlockColor: '#33383d'}}>{(<><img src={"/icon/Emblem_Silver.png"}/> {summonerTier[i]}</>)} </TableCell>) :
                                                                                                                        (summonerRank[i] == ('SILVER I')) ? 
                                                                                                                            (<TableCell style={{borderBlockColor: '#33383d'}}>{(<><img src={"/icon/Emblem_Silver.png"}/> {summonerTier[i]}</>)} </TableCell>) :
                                                                                                                                (summonerRank[i] == ('BRONZE IV')) ? 
                                                                                                                                    (<TableCell style={{borderBlockColor: '#33383d'}}>{(<><img src={"/icon/Emblem_Bronze.png"}/> {summonerTier[i]}</>)} </TableCell>) :
                                                                                                                                        (summonerRank[i] == ('BRONZE III')) ? 
                                                                                                                                            (<TableCell style={{borderBlockColor: '#33383d'}}>{(<><img src={"/icon/Emblem_Bronze.png"}/> {summonerTier[i]}</>)} </TableCell>) :
                                                                                                                                                (summonerRank[i] == ('BRONZE II')) ? 
                                                                                                                                                    (<TableCell style={{borderBlockColor: '#33383d'}}>{(<><img src={"/icon/Emblem_Bronze.png"}/> {summonerTier[i]}</>)} </TableCell>) :
                                                                                                                                                        (summonerRank[i] == ('BRONZE I')) ? 
                                                                                                                                                            (<TableCell style={{borderBlockColor: '#33383d'}}>{(<><img src={"/icon/Emblem_Bronze.png"}/> {summonerTier[i]}</>)} </TableCell>) :
                                                                                                                                                                (summonerRank[i] == ('IRON IV')) ? 
                                                                                                                                                                    (<TableCell style={{borderBlockColor: '#33383d'}}>{(<><img src={"/icon/Emblem_Iron.png"}/> {summonerTier[i]}</>)} </TableCell>) :
                                                                                                                                                                        (summonerRank[i] == ('IRON III')) ? 
                                                                                                                                                                            (<TableCell style={{borderBlockColor: '#33383d'}}>{(<><img src={"/icon/Emblem_Iron.png"}/> {summonerTier[i]}</>)} </TableCell>) :
                                                                                                                                                                                (summonerRank[i] == ('IRON II')) ? 
                                                                                                                                                                                    (<TableCell style={{borderBlockColor: '#33383d'}}>{(<><img src={"/icon/Emblem_Iron.png"}/> {summonerTier[i]}</>)} </TableCell>) :
                                                                                                                                                                                        (summonerRank[i] == ('IRON I')) ? 
                                                                                                                                                                                            (<TableCell style={{borderBlockColor: '#33383d'}}>{(<><img src={"/icon/Emblem_Iron.png"}/> {summonerTier[i]}</>)} </TableCell>) :
                                                                                                                                                                                                (summonerRank[i] == ('DIAMOND IV')) ? 
                                                                                                                                                                                                    (<TableCell style={{borderBlockColor: '#33383d'}}>{(<><img src={"/icon/Emblem_Diamond.png"}/> {summonerTier[i]}</>)} </TableCell>) :
                                                                                                                                                                                                        (summonerRank[i] == ('DIAMOND III')) ? 
                                                                                                                                                                                                            (<TableCell style={{borderBlockColor: '#33383d'}}>{(<><img src={"/icon/Emblem_Diamond.png"}/> {summonerTier[i]}</>)} </TableCell>) :
                                                                                                                                                                                                                (summonerRank[i] == ('DIAMOND II')) ? 
                                                                                                                                                                                                                    (<TableCell style={{borderBlockColor: '#33383d'}}>{(<><img src={"/icon/Emblem_Diamond.png"}/> {summonerTier[i]}</>)} </TableCell>) :
                                                                                                                                                                                                                        (summonerRank[i] == ('DIAMOND I')) ? 
                                                                                                                                                                                                                            (<TableCell style={{borderBlockColor: '#33383d'}}>{(<><img src={"/icon/Emblem_Diamond.png"}/> {summonerTier[i]}</>)} </TableCell>) :
                                                                                                                                                                                                                                (summonerRank[i] == ('MASTER I')) ? 
                                                                                                                                                                                                                                    (<TableCell style={{borderBlockColor: '#33383d'}}>{(<><img src={"/icon/Emblem_Master.png"}/></>)} </TableCell>) :
                                                                                                                                                                                                                                        (summonerRank[i] == ('GRANDMASTER I')) ? 
                                                                                                                                                                                                                                            (<TableCell style={{borderBlockColor: '#33383d'}}>{(<><img src={"/icon/Emblem_Grandmaster.png"}/></>)} </TableCell>) :
                                                                                                                                                                                                                                                (summonerRank[i] == ('CHALLENGER I')) ? 
                                                                                                                                                                                                                                                    (<TableCell style={{borderBlockColor: '#33383d'}}>{(<><img src={"/icon/Emblem_Challenger.png"}/></>)} </TableCell>) :                            
                                    <TableCell style={{borderBlockColor: '#33383d'}}><Spinner animation="grow" size="small" variant="dark" /></TableCell>}
                        <TableCell style={{borderBlockColor: '#33383d'}}><><img style={{maxWidth: '8%', borderRadius: '50%', marginRight: '2%'}} src={`./imgs/${elem.favChamps}.png`}/> {elem.favChamps}</></TableCell>
                        <TableCell style={{borderBlockColor: '#33383d'}}>
                        <a style={{fontWeight: '600', color:'#3c988e'}} href={`https://euw.op.gg/summoner/userName=${elem.summonerName}`} rel="noreferrer" target="_blank">op.gg link</a>       
                        </TableCell>
                        <TableCell style={{borderBlockColor: '#33383d'}}>{elem.note}</TableCell>   
                        <TableCell style={{borderBlockColor: '#33383d', width: '1%'}}> <Button sx={{backgroundColor:'#268d81', marginLeft:'-5px'}} onClick={() => { handleChatClick(elem.userId._id) }} variant="contained" endIcon={<SendIcon sx={{marginLeft:'-10px', color:'#33383d'}} />}></Button></TableCell>                     
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
            </>
  
                    )

}

export default TodoList
