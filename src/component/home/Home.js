import React, {Component} from 'react';
import{Link} from 'react-router-dom';
import joe from '../../assets/img/joe.jpg';

import Slider from  './Slider';

class Home extends Component {
    render(){
        return(
            <div>
                <header className="masthead bg-primary text-white text-center">
                    
                    <div class="container text-center my-auto">
	                <img class= "img-fluid " style={{borderRadius:'100%'}}  src={joe} alt="photo"/>
                    <h1 class="mb-1">Folarin Joseph</h1>
                    <h3 class="mb-5">
                        <em>Software and IT Consultant</em>
                    </h3>
                    <a class="btn btn-primary btn-xl js-scroll-trigger" href="#about"> About me</a>
                    </div>
                    <div class="overlay"></div>
                
                </header>
            </div>
            
        )
    }
}
export default Home;