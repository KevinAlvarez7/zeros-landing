import React, {useRef, useEffect } from 'react'
import { TweenMax, Power3 } from 'gsap'


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
                    <div className="logo">M.</div>
                    <div className="navigation">
                    <nav>
                        <ul>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Zero Interest</a></li>
                        <li><a href="/">Case Studies</a></li>
                        <li><a href="/">Resources</a></li>
                        <li><a href="/">Students</a></li>
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