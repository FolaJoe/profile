import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

class AdminWrapper extends Component {
    render(){
        return(
            <div className = "container">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky = "top">
                    <Navbar.Brand component = {Link} to='/'>COBHMOT</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                        <Nav.Link className="mr-auto" href = '/'>HOME</Nav.Link>
                        <Nav.Link className="mr-auto" href= '/service'>SERVICES</Nav.Link>
                        <Nav.Link className="mr-auto" href = '/portfolio'>PORTFOLIO</Nav.Link>
                        <Nav.Link className="mr-auto" href = '/testimonials'>TESTIMONIALS</Nav.Link>
                        <Nav.Link className="mr-auto" href = '/blog'>LATEST NEWS</Nav.Link>
                        <Nav.Link className="mr-auto" href= '/contact'>CONTACT US</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                {this.props.children}
                <footer className="footer text-center">
                    <div className="container">
                        <div className="row">

        
                            <div className="col-lg-3 mb-5 mb-lg-0">
                                <h4 className="text-uppercase mb-0">Address</h4>
                                <p className="lead mb-4">Plot 669, Mbora District 
                                    <br/>Life Camp, Gwarinpa Abuja
                                </p>
                            </div>
                            <div className="col-lg-3">
                                <h4 className="text-uppercase mb-0">Phone</h4>
                                <p className="lead mb-4">08034591943
                                </p>
                            </div>

                            

        
                            <div className="col-lg-3">
                                <h4 className="text-uppercase mb-0">Email</h4>
                                <p className="lead mb-4">contact@CobhMot.com
                                </p>
                            </div>
                            <div className="col-lg-3 mb-5 mb-lg-0">
                                <h4 className="text-uppercase mb-4">Follow us</h4>
                                <Link className="btn btn-outline-light btn-social mx-1" to="#">
                                    <i className="fab fa-fw fa-facebook-f"></i>
                                </Link>
                                <Link className="btn btn-outline-light btn-social mx-1" to="#">
                                    <i className="fab fa-fw fa-twitter"></i>
                                </Link>
                                <Link className="btn btn-outline-light btn-social mx-1" to="#">
                                    <i className="fab fa-fw fa-instagram"></i>
                                </Link>
            
                            </div>

                        </div>
                    </div>
                </footer>
                <section className="copyright py-4 text-center bg-secondary text-white">
                    <div className="container">
                        <small>&copy; 2019 All right reserverd  developed by folajoe IT Consult.</small>
                    </div>
                </section>
                <div className=" d-lg-none position-fixed ">
                    <Link className="js-scroll-trigger d-block text-center text-white rounded" to="/">
                        <i className="fa fa-chevron-up"></i>
                    </Link>
                </div>

            </div>
        
        )

    }
}

export default AdminWrapper;