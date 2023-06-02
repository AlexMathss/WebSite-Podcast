import './rating.css';
import { AiFillStar } from 'react-icons/ai';

export default function Rating({imagem, name, avaliacao}){
    return (
        <div className='rating'>
            <div className='rating-profile'>
                {imagem}
                <div className='rating-data'>
                    {name}
                    <div className='container-stars'>
                        <AiFillStar size={20} color='#FF7602'/>
                        <AiFillStar size={20} color='#FF7602'/>
                        <AiFillStar size={20} color='#FF7602'/>
                        <AiFillStar size={20} color='#FF7602'/>
                        <AiFillStar size={20} color='#FF7602'/>
                    </div>
                </div>
            </div>
            <div className='rating-separator'>
                <p>
                    {avaliacao}
                </p>
            </div>
            
            <div className='rating-footer'/>
        </div>
    )
}