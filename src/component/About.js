import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class About extends Component{
    render(){
        return(
            <div>
                <section class="content-section bg-light" id="about">
                    <div class="container text-center">
                        <div class="row">
                            <div class="col-lg-10 mx-auto">
                                <h2>Software Technologist, IT Expert and Seasoned Teacher</h2>
                                <p class="lead mb-5">Web/App Development, Content Management, Installation of CCTV/Solar Power System; among others.<br/>
                                    <a href="https://facebook.com/Joseph folarin">more about Folarin Joseph ! </a>
                                </p>
                                <a class="btn btn-dark btn-xl js-scroll-trigger" to="/services"> My Services</a>
                            </div>
                        </div>
                    </div>
                    
                </section>

            </div>
        )
    }
}

export default About;