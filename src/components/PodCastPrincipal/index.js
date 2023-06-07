import React from "react";
import './poduniversal.css';
import Published from "../Published";

export default function PodCastPrincipal(){
    return(
        <div className="wrapper-pod">
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
    )
}