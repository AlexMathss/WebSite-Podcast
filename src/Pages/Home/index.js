import Article from '../../components/Article';
import Brands from '../../components/Brands';
import Episodes from '../../components/Episodes';
import Testimonials from '../../components/Testimonials';
import './home.css';

export default function Home(){
    return(
        <div className='home-container'>
            <div className='home'>
                <div className='home-content'>
                    <div className='presentation'>
                        <h1>Become The Hero Of Your Own Story</h1>
                        <p>
                            Entre em sintonia conosco e embarque nessa jornada auditiva incrível. Descubra um mundo de narrativas cativantes e enriquecedoras em nosso podcast!
                        </p>
                        <div className='input-content'>
                            <input
                                placeholder='Enter Your Email Id'
                            />
                            <button>
                                Subscribe
                            </button>
                        </div>
                    </div>
                    <div className='animation'>
                        <div className='an1'></div>
                        <div className='an2'/>
                        <div className='an3'/>
                        <div className='an4'/>
                        <div className='an5'/>
                        <div className='an6'/>
                    </div>
                </div>
            </div>
            <Brands/>
            <Episodes/>
            <Testimonials/>
            <Article/>
        </div>
    )
}