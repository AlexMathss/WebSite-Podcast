import './published.css';
import { AiFillPlayCircle } from 'react-icons/ai';

export default function Published({imagem, title, subtitle}){
    return (
        <div className='published'>
            <div className='img-ilustration'>
                {imagem}
            </div>
            <img src='./episodeicon.png' className='episode-icon'/>
            <div className='card-content'>
                <span>{title}</span>
                <p>{subtitle}</p>
                <button>
                    <AiFillPlayCircle size={32}/>
                    Listem Now
                </button>
            </div>
        </div>
    )
}