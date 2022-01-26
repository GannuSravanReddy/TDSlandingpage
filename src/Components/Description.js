import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.js';
import './Core.css';
import bluetick from'./images/Bluetick.png';
class Description extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div id="carouselExampleFade" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="5000">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Features</h5>
                                <ul className='list-unstyled'>                 
                                    <li><img src={bluetick} alt='tick' width='15px'/>&nbsp;Confidential &amp; Automized</li>
                                    <li><img src={bluetick} alt='tick' width='15px'/>&nbsp;no paper work</li>
                                    <li><img src={bluetick} alt='tick' width='15px'/>&nbsp;Customized</li>
                                </ul><br></br>
                                <a href="https://www.tdsbachao.com/" target='_blank' className="btn btn-primary">features</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <div className="card bg-dark text-light">
                            <div className="card-body">
                                <h5 className="card-title">Services</h5>
                                <ul className='list-unstyled'>
                                <li><img src={bluetick} alt='tick' width='15px'/>&nbsp;Listing of documents</li>
                                <li><img src={bluetick} alt='tick' width='15px'/>&nbsp;256 - bit security</li>
                                <li><img src={bluetick} alt='tick' width='15px'/>&nbsp;weekly reports of purchaces</li></ul><br></br>
                                <a href="#" className="btn btn-warning">services</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <div className="card bg-success text-light">
                            <div className="card-body">
                                <h5 className="card-title">Benefits</h5>
                                <ul className='list-unstyled'>
                                <li><img src={bluetick} alt='tick' width='15px'/>&nbsp;Management of businuess</li>
                                <li><img src={bluetick} alt='tick' width='15px'/>&nbsp;Economic growth</li>
                                <li><img src={bluetick} alt='tick' width='15px'/>&nbsp;Financial Freedom</li></ul><br></br>
                                <a href="#" className="btn btn-danger">Benefits</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default Description;
