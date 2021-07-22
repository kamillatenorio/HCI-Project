import React, { Component } from 'react';
import '../../App.css';
import NavBarExp from '../../components/NavBarExp';
import Navigation from '../Navigation';

class Analysis extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <NavBarExp />
        <div class="container" style={{ maxWidth: '65%' }}>


          <div id="accordion">
            <div class="card">
              <div class="card-header" id="headingOne">
                <h5 class="mb-0">
                  <p style={{float:'left', display:'inline-block', marginTop:'1%'}}>Descriptive Statistics</p>
                  <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" style={{float:'right', display:'inline-block', verticalAlign:'midlle', color:'#3D5287'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
                  </button>
                </h5>

              </div>

              <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                <div class="card-body">
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-header" id="headingTwo">
              <h5 class="mb-0">
                  <p style={{float:'left', display:'inline-block', marginTop:'1%'}}>Graphs</p>
                  <button class="btn btn-link" data-toggle="collapse" data-target="#collapseTwo" style={{float:'right', display:'inline-block', verticalAlign:'midlle', color:'#3D5287'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
                  </button>
                </h5>
              </div>
              <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                <div class="card-body">

                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingThree">
              <h5 class="mb-0">
                  <p style={{float:'left', display:'inline-block', marginTop:'1%'}}>Hypothesis Tests</p>
                  <button class="btn btn-link" data-toggle="collapse" data-target="#collapseThree" style={{float:'right', display:'inline-block', verticalAlign:'midlle', color:'#3D5287'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
                  </button>
                </h5>
              </div>
              <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                <div class="card-body">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Analysis;