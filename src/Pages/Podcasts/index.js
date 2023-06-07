import Allpodcast from '../../components/Allpodcast';
import Episodes from '../../components/Episodes';
import Header from '../../components/Header';
import './podcasts.css';
import { AiFillPlayCircle } from 'react-icons/ai';

export default function Podcasts(){
    return(
        <div className='podcasts-container'>
            <Header/>
            <div className='podcasts'>
                <div className='podcast-header'>
                    <div className='podcast-content'>
                        <span>
                            Featured
                        </span>
                        <h2>
                            A UX Case Study on Creating a Studious Environment
                        </h2>
                        <p>
                            Apparently we had reached a great height in the atmosohere, for the sky was
                            a dead black, and the stars had ceased to twinkle. By the same illusion which
                            lifts the horizon
                        </p>
                        <button>
                            <AiFillPlayCircle size={32} color='#1AD993'/>
                            <p>Listem Now</p>
                        </button>
                    </div>
                </div>
            </div>
            <Episodes/>
            <Allpodcast/>
        </div>
    )
}