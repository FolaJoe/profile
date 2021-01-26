import React , {Component} from 'react';
import {Link} from 'react-router-dom';

class PageWrapper extends Component {
    constructor(props){
        super(props);
        this.state = {menuLogic:false};
    }
    componentDidMount(){

    }
    menuToggle(){
        this.setState({
            menuLogic: !this.state.menuLogic,

        });
    }

    
    render(){
        let classes = ['menu-toggle', 'rounded'];
        const siderbarWrapper = document.getElementById('sidebar-wrapper');
        let iconClasses = ['fas', 'fa-bars'];

        if(siderbarWrapper){
            
            
                if(this.state.menuLogic){
                    classes.push('active');
                    siderbarWrapper.className = "active";
                    iconClasses = ["fas","fa-times"];
                    
                }
                else{
                    siderbarWrapper.className = " "
                }
            
        }


        
        
    
        return(
            
            <div id = 'page-top'>
                <a  className= {classes.join(' ')} onClick = {e => {this.menuToggle(e);}}>
                           <i className={iconClasses.join(" ")}></i>
                </a>
                <nav id="sidebar-wrapper">
                    <ul className="sidebar-nav">
                        <li className="sidebar-nav-item">
                            <a className="js-scroll-trigger" href="#page-top" onClick = {e=>{this.menuToggle(e);}}>Folajoe</a>
                        </li>
      
                        <li className="sidebar-nav-item">
                            <a className="js-scroll-trigger" href ="#about" onClick = {e=>{this.menuToggle(e);}}>About</a>
                        </li>
                        <li className="sidebar-nav-item">
                            <a className="js-scroll-trigger" href="#services" onClick = {e=>{this.menuToggle(e);}}>Services</a>
                        </li>
                        <li className="sidebar-nav-item">
                            <a className="js-scroll-trigger" href="#portfolio" onClick = {e=>{this.menuToggle(e);}}>Portfolio</a>
                        </li>
                        <li className="sidebar-nav-item">
                            <a className="js-scroll-trigger" href="#contact" onClick = {e=>{this.menuToggle(e);}}>Contact</a>
                        </li>
                     </ul>
                </nav>
                    {this.props.children}
            
                
                <footer class="footer text-center">
                    <div class="container">
                        <ul class="list-inline mb-5">
                            <li class="list-inline-item">
                                <a class="social-link rounded-circle text-white mr-3" href="#">
                                    <i class="icon-social-facebook"></i>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a class="social-link rounded-circle text-white mr-3" href="#">
                                    <i class="icon-social-twitter"></i>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a class="social-link rounded-circle text-white" href="#">
                                    <i class="icon-social-github"></i>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a class="social-link rounded-circle text-white" href="#">
                                    <i class="icon-social-linkedin"></i>
                                </a>
                            </li>
                        </ul>
                    <p class="text-muted small mb-0">&copy; Joe Consult 2021</p>
                    </div>
                </footer>
                
                
                <div className=" d-lg-none position-fixed ">
                    <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top">
                        <i className="fa fa-chevron-up"></i>
                    </a>
                </div>

            </div>
        )
    }

}

export default PageWrapper;