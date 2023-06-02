import Published from '../Published';
import './episodes.css';

export default function Episodes(){
    return (
        <div className='episodes'>
            <div className='episodes-container'>
                <div className='episodes-header'>
                    <div className='header-left'>
                        <span>
                            Recent Episodes
                        </span>
                        <p>
                            Apparently we had reached a great height in the 
                            atmosphere, for the sky was a dead black.
                        </p>
                    </div>
                    <button>
                        See All Episodes
                    </button>
                </div>
                <div className='episodes-content'>
                    <Published
                        imagem={<img src='./episode1.png'/>}
                        title={'Ep 1: How to build a world-class business brand'}
                        subtitle={'Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.'}
                    />
                    <Published
                        imagem={<img src='./episode2.png'/>}
                        title={'Ep 2: Getting the first 100 customers for your business'}
                        subtitle={'Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.'}
                    />
                    <Published
                        imagem={<img src='./episode3.png'/>}
                        title={'Ep 3: Should I raise money for my startup, or not?'}
                        subtitle={'Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.'}
                    />
                </div>
            </div>
        </div>
    )
}