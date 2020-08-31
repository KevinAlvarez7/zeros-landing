import React, {useRef, useEffect } from 'react'
import { TweenMax, Power3 } from 'gsap'
import logo from '../images/zeros-logo-no-shadow.png';


export const Header = () => {
    let header = useRef(null);

    useEffect(() => {
        TweenMax.from(header,
            .8, {
                delay: .8,
                opacity: 0,
                y: -20,
                ease: "power3.inOut"
            }
        )
    }, [])
    return (
        <header id="header" ref={el=> {header= el}}>
            <div className="container-fluid">
                <div className="row">
                <div className="header-inner">
                    <div className="logo">
                        <img src={logo} alt="logo"/>
                        <span>Zeros</span>
                    </div>
                    <div className="navigation">
                    <nav>
                        <ul>
                        <li><a href="/zeros-landing">Home</a></li>
                        <li><a href="/zeros-landing">Features</a></li>
                        {/* <li><a href="/">Case Studies</a></li> */}
                        <li><a href="/zeros-landing">Prototype</a></li>
                        {/* <li><a href="/">Students</a></li> */}
                        </ul>
                    </nav>
                    </div>
                    <div className="nav-logins">
                    <div className="login">
                        <a href="/">Log in</a>
                    </div>
                    <div className="apply">
                        <a href="/">Signup Today</a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </header>
    )    
}