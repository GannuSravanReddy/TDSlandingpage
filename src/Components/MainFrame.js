import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import './functional';
import './Core.css';
import profile from './images/profile.webp';
import accounts from './images/faq.webp';
import home from './images/home.webp';
import Description from './Description';
import plays from './images/playslogo.png';
import sstaff from './images/mangement.png';
;

class MainFrame extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }

  }

  render() {
    return (
      <>
        <center><br />
          <p><img className='logo' src='https://www.tdsbachao.com/images/favicon.ico' /><b className='title'>TDS Bachao</b></p><p className='title'>Welcome to Management World.</p>
          <div className='perspectwall' >

            <img className='profilescreen' title='Adding vendor' src={accounts} />
            <img className='homescreen' title='Home' src={home} />
            <img className='dashscreen' title='Profile' src={profile} />

            <Description />
            <img className='playslogo' title='Play Store' onClick={(e) => {
              e.preventDefault();
              window.location.href = 'https://play.google.com/store/apps/details?id=com.app.tdsbachao';
              window.location.target = '_blank';
            }} src={plays} />

            <img className='staff' title='Profile' src={sstaff} />

            <h1 className='parabody'>About &amp; Services</h1>
            <hr className='nav-division' />
            <div class="row reveal">
              <div class="col-sm-3 p-3 bg-none parabody">
                <h3>Hello</h3>
                We live in a very small world and we are bridging the gap between cities and villages. Everyone wants to reduce their Accounting and Management Cost of their Part time accountants and Chartered Accountants.
              </div>
              <div class="col-sm-3 p-3 bg-none parabody">
                <h3>Solutions</h3>
                <ul>
                  <li>Turbo Accounting.</li>
                  <li>GST Health Check-Up</li>
                  <li>Quick TDS Refunds</li>
                  <li>Penalty Less GST Filings</li>
                  <li>Tax Portal</li>
                  <li><a className='listlink' href='https://www.tdsbachao.com/#Sol' target='_blank'>Know more...</a></li>
                </ul>
              </div>
              <div class="col-sm-3 p-3 bg-none parabody">
                <h3>Pricing</h3>
                <ul>
                  <li>Individual</li>
                  <li>Emitra</li>
                  <li>Business</li>
                  <li><a className='listlink' href='https://www.tdsbachao.com/' target='_blank'>Know more...</a></li>
                </ul>
              </div>
              <div class="col-sm-3 p-3 bg-none parabody">
                <h3>Contact us</h3>
                <ul className='list-unstyled'>
                  <li><svg xmlns="http://www.w3.org/2000/svg" width='20px' class="ionicon" viewBox="0 0 512 512"><title>Location</title><path d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" /><circle cx="256" cy="192" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" /></svg>
                    &nbsp;&nbsp;106-111, 1st Floor, B.J.Acrade,<br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lankhara Chowk, Nokha,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bikaner - 334803
                  </li>
                  <li><svg xmlns="http://www.w3.org/2000/svg" width='20px' class="ionicon" viewBox="0 0 512 512"><title>Call</title><path d="M451 374c-15.88-16-54.34-39.35-73-48.76-24.3-12.24-26.3-13.24-45.4.95-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48 5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160.15 160.15 0 0083 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64 54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159.09 159.09 0 0013.8-25.8C465 391.17 468 391.17 451 374z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" /></svg>
                    &nbsp;&nbsp;<a className='listlink' href="https://wa.me/918766004420">+91 876-600-4420</a>
                  </li>
                  <li><svg xmlns="http://www.w3.org/2000/svg" width='20px' class="ionicon" viewBox="0 0 512 512"><title>Mail</title><rect x="48" y="96" width="416" height="320" rx="40" ry="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" /><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M112 160l144 112 144-112" /></svg>
                    &nbsp;&nbsp;<a className='listlink' href="mailto:mark@tdsbachao.com">mark@tdsbachao.com</a>
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </center>

      </>
    );
  }
}

export default MainFrame;
