import React, { Component } from 'react';
import  '../../App.css';
import NavBarExp from '../../components/NavBarExp';
import { Tabs, Tab } from 'react-bootstrap';

class Analysis extends Component {
  render() {
    return (
      <div>
        <NavBarExp/>
        <div class="container" style={{ maxWidth: '65%' }}>
          <Tabs id="uncontrolled-tab-example2" className="mb-3">
          <Tab eventKey="analysis" title="Analysis & Interpretation">
              <h1>Analysis & Interpretation</h1>
              <div className="experimentDiv">
                <p className="experimentLabel">Descriptive Analysis</p>
                <select name="select" className="experimentTextArea">
                  <option value="valor1" selected>Select one...</option>
                  <option value="valor1" >Option 2</option>
                  <option value="valor1" >Option 3</option>
                </select>
                <p className="experimentLabel">Graphs</p>
                <select name="select" className="experimentTextArea">
                  <option value="valor1" selected>Select one...</option>
                  <option value="valor1" >Option 2</option>
                  <option value="valor1" >Option 3</option>
                </select>
                <p className="experimentLabel">Hypothesis Tests</p>
                <select name="select" className="experimentTextArea">
                  <option value="valor1" selected>Select one...</option>
                  <option value="valor1" >Option 2</option>
                  <option value="valor1" >Option 3</option>
                </select>
              </div>
            </Tab>
          </Tabs> 
        </div>
      </div>
    )
  }
}

export default Analysis;