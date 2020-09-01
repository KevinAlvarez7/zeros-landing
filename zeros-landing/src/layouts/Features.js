import React from 'react';
import { 
    FaArrowCircleRight, 
    FaListAlt,
    FaCalendarCheck,
    FaClock, 
    FaRocket,
    FaFire,
    FaFileAlt } from 'react-icons/fa';


export const Features = () => {
    return (
        <section id="features" className="features">
            <div className="container">
                <div className="row">
                <div className="features-inner">
                    <div className="features-content">
                    <h3>Stay focused using Zeros with these features.</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Doloribus cupiditate magni vitae aliquam dolorem nobis facere
                        quod aut autem fuga ex, neque error unde possimus odit eaque
                        voluptatibus sapiente qui.
                    </p>
                    <div className="btn-row">
                        <a href="/"
                        >View All Features
                        <FaArrowCircleRight/></a>
                    </div>
                    </div>
                    <div className="features-list">
                    <ul>
                        <li>
                        <FaListAlt/>
                        <h5>Time-Blocking</h5>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Qui dolorum rerum vero.
                        </p>
                        </li>
                        <li>
                        <FaCalendarCheck/>
                        <h5>Deadlines Tracker</h5>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Qui dolorum rerum vero.
                        </p>
                        </li>
                        <li>
                        <FaRocket/>
                        <h5>Dynamic Scheduling</h5>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Qui dolorum rerum vero.
                        </p>
                        </li>
                        <li>
                        <FaClock/>
                        <h5>Time-Tracking</h5>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Qui dolorum rerum vero.
                        </p>
                        </li>
                        <li>
                        <FaFire/>
                        <h5>Streaks</h5>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Qui dolorum rerum vero.
                        </p>
                        </li>
                        <li>
                        <FaFileAlt/>
                        <h5>Time-Block Reports</h5>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Qui dolorum rerum vero.
                        </p>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}
