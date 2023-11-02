import './App.css'
import Logo from './assets/imagens/Logo.png';
import { Instagram, Tiktok } from 'react-bootstrap-icons';

//imagens
import Jessie from './assets/imagens/JessieSemFiltro.png'
import Dinossauro from './assets/imagens/64x64-export.gif'
import Dudu from './assets/imagens/16x16-export.gif'
import Choco from './assets/imagens/32x32-export.gif'
import Astronauta from './assets/imagens/Astronauta.png'
import Beholder from './assets/imagens/Beholder.png'
import Goblin from './assets/imagens/Goblin.png'
import HomemTuba from './assets/imagens/HomemTuba.png'
import JackLantern from './assets/imagens/JackLantern.png'
import Lobisomem from './assets/imagens/Lobisomem-export.png'
import NewGoblin from './assets/imagens/GoblinPortfolio-export.gif'

function App() {

  return (
    <>
      <div className='Cabecalho'>
        <div ><img src={Logo} className='logo'/></div>
        <div className='menu'>
        
          <a href='#home'>Home</a>
          <a href='#pixel'>Pixel Art</a>
          <a href=''>Commissions</a>
          <a href=''>Contact</a>
        </div>
      </div>
      <div className='Content' id='home'>
        <img src={Jessie} className='Jessie'/>
        <div className='gamedev'>
          <h6>Gamedev</h6>
          <p>Desenvolvendo Games como Hobby a mais de 5 anos, 
            procuro sempre evoluir minhas skills de design de games, Artes,
            animação e em breve UI e UX.
            </p>
        </div>
        <div>
          <img src={Dudu} className='ImgApresentacao'/>
          <img src={Choco} className='ImgApresentacao'/>
          <img src={Dinossauro} className='ImgApresentacao'/>
        </div>
        <div id='pixel' className='pixel'>
          <h6>PixelArt</h6>
          <img src={NewGoblin} className='ImgApresentacao'/>
          <img src={JackLantern} className='ImgApresentacao'/>
          <img src={Lobisomem} className='ImgApresentacao'/>
          <img src={Dudu} className='ImgApresentacao'/>
          <img src={Choco} className='ImgApresentacao'/>
          <img src={Dinossauro} className='ImgApresentacao'/>
          <img src={Astronauta} className='ImgApresentacao'/>
          <img src={Beholder} className='ImgApresentacao'/>
          <img src={Goblin} className='ImgApresentacao'/>
          <img src={HomemTuba} className='ImgApresentacao'/>
        </div>
        <div className='social'>
          <a href=''><Instagram className='socialIcon'/></a>
          <a href=''><Tiktok className='socialIcon'/></a>
        </div>
      </div>
    </>
  )
}

export default App
