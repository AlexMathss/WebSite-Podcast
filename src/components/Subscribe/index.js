import './subscribe.css';

export default function Subscribe(){
    return (
        <div className='subscribe'>
            <div className='icone-left'>
                <img src='./sub1.png'/>
            </div>
            <div className='subscribe-container'>
                <div className='subscribe-content'>
                    <span>Receive new episodes in your inbox</span>
                    <div className='subscribe-input'>
                        <input
                            placeholder='Enter Your Email'
                        />
                        <button>
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
            <div className='icone-right'>
                <img src='./sub2.png'/>
            </div>
        </div>
    )
}