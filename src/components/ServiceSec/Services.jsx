import React from 'react';
import B1 from '../../assets/Auto.svg'
import B2 from '../../assets/Ppc.svg'
import B3 from '../../assets/Social.svg'
import B4 from '../../assets/Content.svg'
import B5 from '../../assets/Web.svg'
import B6 from '../../assets/Data.svg'





import "./Service.css";

const Services = () => {
    return (
        <div className='Servicesdiv' >
            <h4>Our Service Offerings</h4>
            <p className='para5'> Strategies that Drive Property Market Excellence</p>

            {/* here we have option for cards mapping but i can used here core html css */}

            <div className='CardDiv'>
                <div>
                    <img src={B1} alt="b1" />
                    <p className='titles'>Automotive SEO</p>
                    <p>Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today</p>
                </div>
                <div>
                    <img src={B2} alt="b2" />
                    <p className='titles'>PPC Precision</p>
                    <p>Maximize visibility and drive quality traffic with meticulously targeted Pay-Per-Click campaigns.</p>
                </div>
                <div>
                    <img src={B3} alt="b3" />
                    <p className='titles'>Social Acceleration</p>
                    <p>Engage and influence your audience across social media platforms, amplifying your brand's presence and connection.</p>
                </div>
                <div>
                    <img src={B4} alt="b4" />
                    <p className='titles'>Content Excellence</p>
                    <p>Craft compelling, automotive-specific content that resonates with enthusiasts and drives engagement.</p>
                </div>
            </div>


            <div className='CardDiv'>
                <div>
                    <img src={B5} alt="b1" />
                    <p className='titles'>Web Design</p>
                    <p>Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today</p>
                </div>
                <div>
                    <img src={B6} alt="b2" />
                    <p className='titles'>Data-Driven Insights</p>
                    <p>Maximize visibility and drive quality traffic with meticulously targeted Pay-Per-Click campaigns.</p>
                </div>
                <div>
                    <img src={B3} alt="b3" />
                    <p className='titles'>End-to-End Solutions</p>
                    <p>Engage and influence your audience across social media platforms, amplifying your brand's presence and connection.</p>
                </div>
                <div>
                    <img src={B4} alt="b4" />
                    <p className='titles'>Video marketing</p>
                    <p>Craft compelling, automotive-specific content that resonates with enthusiasts and drives engagement.</p>
                </div>
            </div>


            <button className='startbtn2'>Get started</button>

        </div>
    );
};

export default Services;