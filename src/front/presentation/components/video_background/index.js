
import './video_background.css'
import '../../../theme/fonts.css'
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";

import vid from '../../assets/video/bg_64.mp4';

import poster from '../../assets/video/bg_64.jpg';

import { useEffect } from 'react';

const VideoBackground = ({ src }) => {
    useEffect(() => {
        const resizeHandler = () => {
          const sectionIntroVideo = document.getElementById('section-intro-video');
          const divVideoContent = document.getElementById('de-video-content');
          if (sectionIntroVideo) {
            sectionIntroVideo.style.height = `${window.innerHeight}px`;
            divVideoContent.style.marginTop = `${window.innerHeight/3}px`;
          }
        };
    
        // Set initial height when the component mounts
        resizeHandler();
    
        // Add event listener for the "resize" event to update the height when the window is resized
        window.addEventListener('resize', resizeHandler);
    
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('resize', resizeHandler);
        };
      }, []);
    return (
        <section id="section-intro-video" class="full-height no-padding" data-stellar-background-ratio=".2">
            <div class="de-video-container" style={{height: '100%'}}>
                <div id="de-video-content" class="de-video-content" style={{display: 'block'}}>
                    <div class="text-center">
                        <div class="spacer-single"></div>
                        <h1 class="big-font">
                            We Don't Just Love Hair
                        </h1>
                        <h1 class="big-font">We Love People</h1>
                        <div class="spacer-single"></div>
                        <a href="https://booking.mangomint.com/735310" class="btn-slider">Book Now</a>
                    </div>
                </div>

                <div class="de-video-overlay" ></div>

                <video  poster={poster}>
                    <source src={vid} type="video/mp4" />
                    <source src="/packages/ginger2016/themes/ginger2016/video/bg_64.webm" type="video/webm" />
                </video> 

            </div>
            
        </section>
    );
}

export default VideoBackground;