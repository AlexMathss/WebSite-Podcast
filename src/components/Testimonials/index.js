import Rating from '../Rating';
import './testimonials.css'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';

export default function Testimonials(){
    return (
        <div className='testimonials'>
            <div className='testimonials-container'>
                <div className='testimonials-header'>
                    <div className='testimonials-title'>
                        <span>
                            What our listeners say
                        </span>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus cras
                            lacus tellus morbi viverra suspendisse omare. Sit volutpat, volutpatut 
                            netus malesuada enim penatibus non aliquet
                        </p>
                    </div>
                    <div className='toggle'>
                        <button>
                            <BsFillArrowLeftCircleFill size={48} color='#503AE7'/>
                        </button>
                        <button>
                            <BsFillArrowRightCircleFill size={48} color='#503AE7'/>
                        </button>
                    </div>
                </div>
                <div className='testimonials-content'>
                    <Rating
                        imagem={<img src='./rating3.png'/>}
                        name={'Eve Madien'}
                        avaliacao={'A produção é impecável, desde a qualidade de áudio até a edição cuidadosa. Os apresentadores são carismáticos e têm um grande talento para manter o ouvinte envolvido e interessado em cada episódio.'}
                    />
                    <Rating
                        imagem={<img src='./rating2.png'/>}
                        name={'Ash Benfred'}
                        avaliacao={'A variedade de tópicos abordados é impressionante, desde entrevistas inspiradoras até discussões aprofundadas sobre assuntos relevantes.'}
                    />
                    <Rating
                        imagem={<img src='./rating1.png'/>}
                        name={'Ryan Smith'}
                        avaliacao={'Este canal de podcast se destaca pela sua originalidade, conteúdo de alta qualidade e pela forma como consegue educar, entreter e cativar os ouvintes.'}
                    />
                </div>
            </div>
        </div>
    )
}