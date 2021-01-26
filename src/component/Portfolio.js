import React, {Component} from 'react';
import portfolio1 from '../assets/img/portfolio-1.jpg';
import portfolio2 from '../assets/img/portfolio-2.jpg';
import portfolio3 from '../assets/img/portfolio-3.jpg';
import portfolio4 from '../assets/img/portfolio-4.jpg';


class Portfolio extends Component{
    render(){
        return(
            <div>
                <section class="content-section" id="portfolio">
                    <div class="container">
                        <div class="content-section-heading text-center">
                            <h3 class="text-secondary mb-0">Portfolio</h3>
                            <h2 class="mb-5">Recent Projects</h2>
                        </div>
                        <div class="row no-gutters">
                            <div class="col-lg-6">
                                <a class="portfolio-item" href="#">
                                    <span class="caption">
                                    <span class="caption-content">
                                        <h2>Networking</h2>
                                        <p class="mb-0">Cambium Radio for Network links</p>
                                    </span>
                                    </span>
                                    <img class="img-fluid" src={portfolio1} alt="photo"/>
                                </a>
                            </div>
                            <div class="col-lg-6">
                                <a class="portfolio-item" href="#">
                                    <span class="caption">
                                    <span class="caption-content">
                                        <h2>Web/App</h2>
                                        <p class="mb-0">Glory Fashion, Joe Consult,Cobhmot Ltd. etc</p>
                                    </span>
                                    </span>
                                    <img class="img-fluid" src={portfolio2} alt="photo"/>
                                </a>
                            </div>
                            <div class="col-lg-6">
                                <a class="portfolio-item" href="#">
                                    <span class="caption">
                                        <span class="caption-content">
                                            <h2>Content Management</h2>
                                            <p class="mb-0">Progressive Movement of Nigeria (PMN)</p>
                                        </span>
                                    </span>
                                    <img class="img-fluid" src={portfolio3} alt="photo"/>
                                </a>
                            </div>
                            <div class="col-lg-6">
                                <a class="portfolio-item" href="#">
                                    <span class="caption">
                                        <span class="caption-content">
                                            <h2>Training</h2>
                                            <p class="mb-0">Private service, Conference/Seminar, Schools</p>
                                        </span>
                                    </span>
                                    <img class="img-fluid" src={portfolio4} alt="photo"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            )
        }
}

export default Portfolio;