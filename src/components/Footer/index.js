import './footer.css';

export default function Footer(){
    return(
        <div className='footer'>
            <div className='footer-header'>
                <div className='footer-center'>
                    <span>Our Sponsors</span>
                    <div className='footer-logo'>
                        <img src='./logo1.png'/>
                        <img src='./logo2.png'/>
                        <img src='./logo3.png'/>
                        <img src='./logo4.png'/>
                        <img src='./logo5.png'/>
                    </div>
                </div>
            </div>
            <div className='footer-content'>
                <div className='footer-container'>
                    <div className='footer-menu'>
                        {/* Fazer imagem da logo */}
                        <div className='footer-logos'>
                            <span>PodCast</span>
                            <img src='./logofooter.png'/>
                        </div>
                        <div className='footer-pages'>
                            <span>Pages</span>
                            <div className='pages-links'>
                                <p>Home</p>
                                <p>Podcast</p>
                                <p>Host</p>
                                <p>Blog</p>
                            </div>
                        </div>
                        <div className='footer-reach'>
                            <span>Reach Us</span>
                            <div className='reach-links'>
                                <p>Home</p>
                                <p>Podcast</p>
                            </div>
                        </div>
                        <div className='footer-podcast'>
                            <span>Subscribe</span>
                            <div className='podcast-links'>
                                <img src='./applef.png' className='apple'/>
                                <img src='./googlef.png' className='google'/>
                                <img src='./soundf.png' className='sound'/>
                                <img src='./spotifyf.png' className='spotify'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='copyright'>
                    <span>
                        &copy; Alex Matheus de Paula 2023
                    </span>
                </div>
            </div>
        </div>
    )
}