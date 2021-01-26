import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Service extends Component{
    render(){
        return(
            <div>

                <section class="content-section bg-primary text-white text-center" id="services">
                    <div class="container">
                    <div class="content-section-heading">
                        <h3 class="text-secondary mb-0">Services I offer:</h3>
                
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
                        <span class="service-icon rounded-circle mx-auto mb-3">
                            <i class="icon-screen-smartphone"></i>
                        </span>
                        <h2>
                            <strong>Web/App Development</strong>
                        </h2>
                        <p class="text-faded mb-0">Looks great on any screen size!</p>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
                        <span class="service-icon rounded-circle mx-auto mb-3">
                            <i class="icon-notebook"></i>
                        </span>
                        <h2>
                            <strong>Content Management</strong>
                        </h2>
                        <p class="text-faded mb-0">This include digital marketing.</p>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-5 mb-md-0">
                        <span class="service-icon rounded-circle mx-auto mb-3">
                            <i class="icon-energy"></i>
                        </span>
                        <h2>
                            <strong>Installation of CCTV/Solar power system</strong>
                        </h2>
                        <p class="text-faded mb-0">Router Link Configuration<br/>
                            <i class="fas fa-ethernet"></i> <br/>
                            Networking</p>
                        </div>
                        <div class="col-lg-3 col-md-6">
                        <span class="service-icon rounded-circle mx-auto mb-3">
                            <i class="icon-graduation"></i>
                        </span>
                        <h2>
                            <strong>Training</strong>
                        </h2>
                        <p class="text-faded mb-0">Consultancy</p>
                        </div>
                    </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default Service;