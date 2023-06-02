import './ilustration.css';

export default function IlustrationComp(){
    return(
        <div className='ilustration'>
            <div className='ilustration-container'>
                <div className='ilustration-resume'>
                    <div className='conteudo'>
                        <div className='details-container'>
                            <div className='line-pur'/>
                            <div className='line-pur'/>
                        </div>
                        <div className='resumo'>
                            <span>A podcast for makers and entrepreneurs</span>
                            <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                        </div>
                        <div className='details-container'>
                            <div className='line-pur'/>
                        </div>
                    </div>
                </div>
                <div className='ilustration-img'>
                    <img src='./resume1.png'/>
                </div>
            </div>
        </div>
    )
}
