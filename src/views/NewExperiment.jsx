import React, { Component } from 'react';
import '../App.css';

class NewExperiment extends Component {
  render() {
    return (
      <div className="content">
        <div style={{ width: '100%', marginLeft: '19%', marginRight: '16%' }}>
          <div style={{width:'61%'}}>
            <p style={{
              fontWeight: 'bold', fontSize: 'xx-large', marginTop: '20px',
              color: '#727070'
            }}>CREATE A NEW EXPERIMENT</p>

              <hr class="dotted"></hr>
          </div>
          <div style={{ width: '61%' }}>
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

              <button style={{ fontSize:'large' ,marginTop: '15px', color: 'white', backgroundColor: '#3D5287' }}>
                Create Experiment
              </button>

              <button style={{ fontSize:'large', marginTop: '15px', marginLeft: '15px' }}>
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