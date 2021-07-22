import React, { Component } from 'react';
import  '../../App.css';
import NavBarExp from '../../components/NavBarExp';
import { Tabs, Tab } from 'react-bootstrap';
import Navigation from '../Navigation';

class Planning extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <NavBarExp/>
        <div class="container" style={{ maxWidth: '65%' }}>
          <Tabs id="uncontrolled-tab-example2" className="mb-3">
            <Tab eventKey="planning" title="Planning">
                  <div className="experimentDiv">

                    <p className="experimentTitle">Context Detailing</p>
                    <hr class="dotted experimentDot"></hr>
                    <textarea name="quality" id="quality" className="experimentTextArea" rows='6' />

                    <br />

                    <button className="blue_button saveButton">Save</button>
                  </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    )
  }
}

export default Planning;