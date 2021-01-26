import React, {Component} from 'react'
import {Slide as Show} from 'react-slideshow-image';
import {Container} from 'react-bootstrap';
import image1 from './img1.jpg';
import image2 from './img2.jpg';
import image3 from './img3.jpg';
    
class Slide extends Component{
    render(){
        const slideImages = [
            image1,
            image2,
            image3
          ];
          const properties = {
            duration: 5000,
            transitionDuration: 500,
            infinite: true,
            indicators: true,
            arrows: true,
            onChange: (oldIndex, newIndex) => {
              console.log(`slide transition from ${oldIndex} to ${newIndex}`);
            }
          };
          return (
            <div className="slide-container" >
             <div className = "container" style = {{marginTop:'20px'}}>
              <Show {...properties}>
                <div className="each-slide" >
                  <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                    <span>Slide 1</span>
                  </div>
                </div>
                <div className="each-slide" >
                  <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                    <span>Slide 2</span>
                  </div>
                </div>
                <div className="each-slide">
                  <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                    <span>Slide 3</span>
                  </div>

                </div>
              </Show>
              </div>
              
            </div>
          );
    }

}



export default Slide;