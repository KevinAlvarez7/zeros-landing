import React, {useRef, useEffect } from 'react';
import prototype from '../images/banner-img-nonClay.png';
import { TweenMax, Power3, TimelineLite } from 'gsap';

export const Banner = () => {
    let banner = useRef(null);
    let bannerAddition = useRef(null);
    let h1Line1 = useRef(null);
    let h1Line2 = useRef(null);
    let contentP = useRef(null);
    let contentButton = useRef(null);
    let img = useRef(null);
    let featureBanner = useRef(null);
    let featureBannerGreen = useRef(null);
    const tl = new TimelineLite();

    useEffect(() => {
 
        tl
        .staggerFrom([bannerAddition, banner], 
            1.2, {
            width: 0,
            skewX: 4,
            ease: "power3.inOut",
          }, .2)
        .staggerFrom([h1Line1, h1Line2], .8, {
            opacity: 0,
            y: 80,
            ease: "power3.out",
          }, .2)
        .staggerFrom([contentP, contentButton], .8, {
            delay: -0.6,
            y: -40,
            opacity: 0,
            ease: "power3.out",
          }, .2)
        .staggerFrom([img], .8, {
            delay: -0.6,
            y: 100,
            opacity: 0,
            ease: "power3.out"
        }, .2)
        .staggerFrom([featureBanner, featureBannerGreen], .8, {
            delay: -0.4,
            x: -60,
            opacity: 0,
            ease: "power3.out",
          }, .2);

    }, [tl])
    

    return (
        <section className="banner" ref={el=> {banner= el}}>
            <div className="banner-addition-bg" ref={el=> {bannerAddition= el}}></div>
                <div id="bannerBg" className="banner-bg" ref={el=> {banner= el}}></div>
                <div className="container">
                    <div className="row">
                    <div className="banner-inner" id="bannerInner">
                        <div className="content">
                        <div className="content-inner">
                            <h1>
                            <div className="line" ref={el=> {h1Line1= el}}>
                                <span>Helping you get out</span>
                            </div>
                            <div className="line" ref={el=> {h1Line2= el}}>
                                <span>of your procrastination</span>
                            </div>
                            </h1>
                            <p ref={el=> {contentP= el}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                            sunt doloremque repellendus pariatur ad. Necessitatibus
                            beatae, alias assumenda.
                            </p>
                            <div className="btn-row" ref={el=> {contentButton= el}}>
                            <a href="/">Apply Today</a>
                            </div>
                        </div>
                        </div>
                        <div className="image">
                        <div className="image-inner">
                            <img src={prototype} alt="prototype"  ref={el=> {img= el}}/>

                            <div className="feature-banner" id="featureBanner"ref={el=> {featureBanner= el}}>
                                Track your time
                            </div>
                            <div className="feature-banner green" id="featureBannerGreen" ref={el=> {featureBannerGreen= el}}>
                                Stay Focused
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
