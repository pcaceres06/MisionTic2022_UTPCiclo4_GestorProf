// import React ,{useState} from 'react';
import React  from 'react';
import Video from '../../video/videoStudent.mp4';
import {HeroContainer,HeroBg,VideoBg,HeroContent,HeroH1,HeroP} from './HeroElements';
// import {Button} from '../ButtonElements';

const HeroSection = () => {
    // const [hover, setHover] = useState(false);

    // const onHover = () => {
    //     setHover(!hover)
    // }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>La Educacion Virtual Nunca Fue Tan Facil</HeroH1>
                <HeroP>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida malesuada turpis at dapibus. Nam facilisis leo et accumsan luctus. Pellentesque hendrerit urna metus, id facilisis nisi ullamcorper quis. Fusce dapibus commodo ante, eget vehicula arcu cursus at. Aenean mauris ex, tincidunt in nulla vel, consequat commodo purus.
                </HeroP>
                {/* <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}
                    primary='true'
                    dark='true'
                    >
                        Get sterted {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper> */}
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
