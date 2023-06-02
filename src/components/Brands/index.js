import IlustrationComp from '../ilustrationComp';
import './brands.css';

export default function Brands(){
    return(
        <div className='brands-container'>
            {/* Adicionar caminha para os podcasts */}
            <div className='podcast-container'>
                <span>Podcast Available On</span>
                {/* Adicionar o link to */}
                <button>
                    <img src='./apple.png'/>
                </button>
                <button>
                    <img src='./sound.png'/>
                </button>
                <button>
                    <img src='./google.png'/>
                </button>
                <button>
                    <img src='./spotify.png'/>
                </button>
            </div>

            {/* Criação de componente */}
            <div className='ilustration'>

                <div className='maker'>
                    <div className='maker-container'>
                        <div className='maker-content'>
                            <div className='separator'>
                                <div className='line-container'>
                                    <div className='line-header-first'/>
                                    <div className='line-header-second'/>
                                </div>
                                <div className='separator-content'>
                                    <span>
                                        A podcast for makers and entrepreneurs
                                    </span>
                                    <p>
                                        Apparently we had reached a great height in the
                                        atmosphere, for the sky was a dead black, and the
                                        stars had ceased to twinkle.
                                    </p>
                                </div>
                                <div className='line-container'>
                                    <div className='line-footer-first'/>
                                </div>
                            </div>
                        </div>
                        <img src='./resume1.png'/>
                    </div>
                </div>

                <div className='origin'>
                    <div className='origin-container'>
                        <img src='./resume2.png'/>

                        <div className='separator-origin'>
                            <div className='line-container'>
                                <div className='line-footer-first'/>
                            </div>
                            <div className='separator-content'>
                                <span>
                                    My origins on YouTube in 2008
                                </span>
                                <p>
                                    Minha origem como criador começou com a vontade de compartilhar
                                    minha perspectiva única e criar conexões autênticas da tela.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}