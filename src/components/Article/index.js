import Subscribe from '../Subscribe';
import './article.css';

export default function Article(){
    return (
        <div className='article'>
            <div className='article-container'>
                <Subscribe/>

                <div className='news'>
                    <div className='content-left'>
                        <div className='news-title'>
                            <span>
                                Read our articles & news
                            </span>
                            {/* Criação de Link = to  */}
                            <button>
                                See More
                            </button>
                        </div>
                    </div>
                    <div className='post'>
                        <img src='./new1.png'/>

                        <div className='post-container'>
                            <div className='post-title'>
                                <span>
                                    Getting the first 100 customers for your business
                                </span>
                            </div>
                            
                            <p>
                                Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.
                            </p>
                            <p className='button-link'>
                                Read Now
                            </p>
                        </div>
                    </div>
                    <div className='post'>
                        <img src='./new2.png'/>

                        <div className='post-container'>
                            <div className='post-title'>
                                <span>
                                    Apparently we had reached a great height in the atmosphere,...
                                </span>
                            </div>
                            
                            <p>
                                Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.
                            </p>
                            <p className='button-link'>
                                Read Now
                            </p>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    )
}