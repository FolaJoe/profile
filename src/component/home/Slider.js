import  React, {Component} from 'react';
import '../../App.css'
import image1 from './img1.jpg';
import image2 from './img2.jpg';
import image3 from './img3.jpg';

class Slider extends Component{
    slideIndex = 0;
    showSlides = () =>{
        let sliding;
        if(sliding){
            clearTimeout(sliding);
        }
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        this.slideIndex++;
        if(this.slideIndex > slides.length){
            this.slideIndex = 1
        }

        for(let i = 0; i < slides.length; i++){
            slides[i].style.display = "none";
        }
        for(let i = 0; i < dots.length; i++){
            dots[0].className.replace(" active", "");
        }
        slides[this.slideIndex -1].style.display = "block";
        dots[this.slideIndex -1].className +=  " active";
        

    }
    componentDidMount = () =>{
        this.showSlides();
    }
    render(){
        return(
            <div>

                <div className="slideshow-container">

                    <div className="mySlides fade">
                        <div className="numbertext">1 / 3</div>
                        <img src={image1} style={{width:'100%'}}/>
                        <div className="text">Caption Text</div>
                    </div>

                    <div className="mySlides fade">
                        <div className="numbertext">2 / 3</div>
                        <img src={image2} style={{width:'100%'}}/>
                        <div className="text">Caption Two</div>
                    </div>

                    <div className="mySlides fade">
                        <div className="numbertext">3 / 3</div>
                        <img src={image3} style={{width:'100%'}}/>
                        <div className="text">Caption Three</div>
                    </div>

                    </div>
                    <br/>

                    <div style={{textAlign:'center'}}>
                        <span className="dot"></span> 
                        <span className="dot"></span> 
                        <span className="dot"></span> 
                    </div>
                </div>
            )
    }
}
   

export default Slider;