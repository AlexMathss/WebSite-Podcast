import React from "react";
import './poduniversal.css';
import Published from "../Published";

export default function PodCastBusiness(){
    return(
        <div className="wrapper-pod">
            <Published
                imagem={<img src='./episode1.png'/>}
                title={'Ep 1: The Impact of Technology on Society'}
                subtitle={'Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.'}
            />
            <Published
                imagem={<img src='./episode2.png'/>}
                title={'Ep 2: Exploring Sustainable Energy Solutions'}
                subtitle={'Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.'}
            />
            <Published
                imagem={<img src='./episode3.png'/>}
                title={'Ep 3: The Evolution of Artificial Intelligence'}
                subtitle={'Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.'}
            />
        </div>
    )
}