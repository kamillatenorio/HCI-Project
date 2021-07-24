import React, { Component } from 'react';
import '../App.css';

class NewExperiment extends Component {
  render() {
    return (
      <div className="content"> 
        <div  class="container" style={{ maxWidth: '65%' }}>
          <div>
            <p style={{
              fontWeight: 'bold', fontSize: 'xx-large', marginTop: '20px',
              color: '#727070'
            }}>CREATE A NEW EXPERIMENT</p>

              <hr class="dotted"></hr>
          </div>
          <div >
            <form action="/scope">

              <label style={{
                fontSize: 'x-large',
                fontWeight: 'bold'
              }} for='title'>Title</label> <br />
              <input class="form-control" type="text" name="title" id="title"  placeholder="Enter the experiment title"/>

              <br />
              <br />

              <label style={{
                fontSize: 'x-large',
                fontWeight: 'bold'
              }} htmlFor="description">Description</label><br />
              <textarea class="form-control"
                name="description" id="" cols="50" rows="5" placeholder="Give a brief description of your experiment."></textarea>

              <br />

              <button style={{ fontSize:'large' ,marginTop: '15px', color: 'white', backgroundColor: '#3D5287', borderRadius: '5px' }}>
                Create Experiment
              </button>

              <button style={{ fontSize:'large', marginTop: '15px', marginLeft: '15px', borderRadius: '5px' }}>
                Cancel
              </button>

            </form>
          </div>
        </div>

      </div>
    )
  }
}

export default NewExperiment;