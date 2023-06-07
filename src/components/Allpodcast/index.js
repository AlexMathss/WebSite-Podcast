import React, {useState} from 'react';
import './allpodcast.css';
import PodCastPrincipal from '../PodCastPrincipal';
import PodCastStartup from '../PodCastStartup';
import PodCastMarketing from '../PodCastMarketing';
import PodCastBusiness from '../PodCastBusiness';

export default function Allpodcast(){

    const [podPrincipal, setPodPrincipal] = useState();
    const [podStartup, setPodStartup] = useState();
    const [podMarketing, setPodMarketing] = useState();
    const [podBusiness, setPodBusiness] = useState();

    function handleClickPrincipal(){
        setPodStartup(false);
        setPodPrincipal(!podPrincipal);
    }
    function handleClickStartup(){
        setPodPrincipal(false);
        setPodStartup(!podStartup);
    }
    function handleClickMarketing(){
        setPodPrincipal(false)
        setPodStartup(false)
        setPodMarketing(!podMarketing)
    }
    function handleClickBusiness(){
        setPodPrincipal(false)
        setPodStartup(false)
        setPodMarketing(false)
        setPodBusiness(!podBusiness)
    }


    return(
        <div className='allpodcast'>
            <div className='allpodcast-container'>
                <div className='options-podcast'>
                    <span>
                        All Podcasts
                    </span>
                    <div className='options-button'>
                        <button onClick={handleClickPrincipal}>
                            All Podcasts
                        </button>
                        <button onClick={handleClickStartup}>
                            Startup
                        </button>
                        <button onClick={handleClickMarketing}>
                            Marketing
                        </button>
                        <button onClick={handleClickBusiness}>
                            Business
                        </button>
                    </div>
                </div>
                <div className='allpodcast-content'>
                    {podPrincipal && (
                        <PodCastPrincipal/>
                    )}
                    {podStartup && (
                        <PodCastStartup/>
                    )}
                    {podMarketing && (
                        <PodCastMarketing/>
                    )}
                    {podBusiness && (
                        <PodCastBusiness/>
                    )}
                </div>
            </div>
        </div>
    )
}