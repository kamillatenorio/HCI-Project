import React, { Component } from 'react';
import  '../../App.css';
import NavBarExp from '../../components/NavBarExp';
import { Tabs, Tab } from 'react-bootstrap';

class Operation extends Component {
  render() {
    return (
      <div>
        <NavBarExp/>
        <div class="container" style={{ maxWidth: '65%' }}>
          <Tabs id="uncontrolled-tab-example2" className="mb-3">
            <Tab eventKey="operation" title="Operation">
              <p style={{ marginLeft: '14%' }}>The experiment operation will be made by another tool, which can be accessed <a href="#" target="__Blank">HERE</a>.</p>
            </Tab>
          </Tabs>
        </div>
      </div>
    )
  }
}

export default Operation;