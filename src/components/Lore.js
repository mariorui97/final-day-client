/* eslint-disable jsx-a11y/anchor-has-content */
import * as React from 'react';
import Box from '@mui/material/Box';
import './Lore.css'
import Button from '@mui/material/Button';

function Lore() {
    return (        
        <div className="div" >   
        <div className="div description">
            <img src="https://www.leagueoflegends.com/static/logo-1200-589b3ef693ce8a750fa4b4704f1e61f2.png" alt=""/>
            <h4>League of Legends is a team-based strategy game where two teams of five powerful champions face off to destroy the other's base. Choose from over 140 champions to make epic plays, secure kills, and take down towers as you battle your way to victory.</h4>
            <a className="div description" href='https://www.leagueoflegends.com/en-us/'><Button variant="contained"> Take a better look at official Riot's website</Button></a>
        </div>
        <div className="div divider">
            <hr/>
        </div>                         
        <div className="div description">
            <img src="https://arcane-profile-kit.co.uk/wp-content/uploads/2021/11/arcane-logo-rendered-master-2.png" alt=""/>
            <h5>Arcane is an animated television series set in the League of Legends universe. The series was unveiled during the League of Legends 10th Anniversary celebrations.</h5>      
            <a className="div description" href='https://www.netflix.com/pt-en/title/81435684'><Button variant="contained"> Watch Arcane</Button></a>
        </div>
        <div className="div divider">
            <hr/>
        </div> 
        <div className="div header"> 
        <h4>List of Champions:</h4>       
        </div>
        <Box className="box" sx={{flexWrap: 'wrap', '& > :not(style)': {m: 1, width: 122, height: 122}}}>                      
            <a style={{backgroundImage: `url("/imgs/Aatrox.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/aatrox/"} rel="noreferrer" target="_blank"/>         
            <a style={{backgroundImage: `url("/imgs/Ahri.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/ahri/"} rel="noreferrer" target="_blank"/>   
            <a style={{backgroundImage: `url("/imgs/Akali.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/akali/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Akshan.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/akshan/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Alistar.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/alistar/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Amumu.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/amumu/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Anivia.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/anivia/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Annie.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/annie/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Aphelios.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/aphelios/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Ashe.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/ashe/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/AurelionSol.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/aurelion-sol/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Azir.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/azir/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Bard.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/bard/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Blitzcrank.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/blitzcrank/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Brand.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/brand/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Braum.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/braum/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Caitlyn.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/caitlyn/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Camille.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/camille/"} rel="noreferrer" target="_blank"/>  
            <a style={{backgroundImage: `url("/imgs/Cassiopeia.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/cassiopeia/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Chogath.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/chogath/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Corki.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/corki/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Darius.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/darius/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Diana.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/diana/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Draven.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/draven/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/DrMundo.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/dr-mundo/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Ekko.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/ekko/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Elise.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/elise/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Evelynn.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/evelynn/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Ezreal.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/ezreal/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Fiddlesticks.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/fiddlesticks/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Fiora.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/fiora/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Fizz.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/fizz/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Galio.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/galio/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Gangplank.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/gangplank/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Garen.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/garen/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Gnar.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/gnar/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Gragas.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/gragas/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Graves.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/graves/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Gwen.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/gwen/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Hecarim.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/hecarim/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Heimerdinger.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/heimerdinger/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Illaoi.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/illaoi/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Irelia.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/irelia/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Ivern.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/ivern/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Janna.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/janna/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/JarvanIV.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/jarvaniv/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Jax.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/jax/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Jayce.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/jayce/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Jhin.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/jhin/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Jinx.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/jinx/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Kaisa.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/kaisa/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Kalista.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/kalista/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Karma.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/karma/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Karthus.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/karthus/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Kassadin.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/kassadin/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Katarina.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/katarina/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Kayle.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/kayle/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Kayn.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/kayn/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Kennen.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/kennen/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Khazix.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/khazix/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Kindred.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/kindred/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Kled.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/kled/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/KogMaw.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/kogMaw/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Khazix.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/khazix/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Leblanc.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/leblanc/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/LeeSin.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/leeSin/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Leona.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/leona/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Lillia.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/lillia/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Lissandra.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/lissandra/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Lucian.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/lucian/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Lulu.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/lulu/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Lux.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/lux/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Malphite.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/malphite/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Malzahar.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/malzahar/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Maokai.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/maokai/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/MasterYi.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/masteryi/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/MissFortune.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/missfortune/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/MonkeyKing.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/monkeyking/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Mordekaiser.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/mordekaiser/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Morgana.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/morgana/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Nami.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/nami/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Nasus.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/nasus/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Nautilus.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/nautilus/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Neeko.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/neeko/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Nidalee.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/nidalee/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Nocturne.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/nocturne/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Nunu.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/nunu/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Olaf.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/olaf/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Orianna.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/orianna/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Ornn.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/ornn/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Pantheon.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/pantheon/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Poppy.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/poppy/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Pyke.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/pyke/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Qiyana.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/qiyana/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Quinn.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/quinn/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Rakan.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/rakan/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Rammus.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/rammus/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/RekSai.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/rekSai/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Rell.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/rell/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Renekton.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/renekton/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Rengar.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/rengar/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Riven.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/riven/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Rumble.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/rumble/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Ryze.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/ryze/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Samira.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/samira/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Sejuani.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/sejuani/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Senna.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/senna/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Seraphine.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/seraphine/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Sett.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/sett/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Shaco.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/shaco/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Shen.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/shen/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Shyvana.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/shyvana/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Singed.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/singed/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Sion.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/sion/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Sivir.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/sivir/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Skarner.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/skarner/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Sona.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/sona/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Soraka.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/soraka/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Swain.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/swain/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Sylas.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/sylas/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Syndra.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/syndra/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/TahmKench.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/tahm-kench/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Taliyah.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/taliyah/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Talon.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/talon/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Taric.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/taric/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Teemo.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/teemo/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Thresh.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/thresh/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Tristana.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/tristana/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Trundle.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/trundle/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Tryndamere.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/tryndamere/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/TwistedFate.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/twisted-fate/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Twitch.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/twitch/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Udyr.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/udyr/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Urgot.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/urgot/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Varus.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/varus/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Vayne.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/vayne/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Veigar.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/veigar/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Velkoz.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/velkoz/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Vex.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/vex/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Vi.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/vi/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Viego.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/viego/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Viktor.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/viktor/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Vladimir.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/vladimir/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Volibear.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/volibear/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Warwick.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/warwick/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Xayah.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/xayah/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Xerath.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/xerath/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/XinZhao.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/xin-zhao/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Yasuo.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/yasuo/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Yone.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/yone/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Yorick.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/yorick/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Yuumi.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/zuumi/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Zac.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/zac/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Zed.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/zed/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Ziggs.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/ziggs/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Zilean.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/zilean/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Zoe.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/zoe/"} rel="noreferrer" target="_blank"/>
            <a style={{backgroundImage: `url("/imgs/Zyra.png")`}} href= {"https://www.leagueoflegends.com/en-us/champions/zyra/"} rel="noreferrer" target="_blank"/>
            




            

        </Box>
        
        
        </div>
    )
}

export default Lore
