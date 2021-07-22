import React, { Component } from 'react';
import '../../App.css';
import NavBarExp from '../../components/NavBarExp';
import { Tabs, Tab, Table } from 'react-bootstrap';
import Navigation from '../Navigation';

class Planning extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <NavBarExp />
        <div class="container" style={{ maxWidth: '65%' }}>
          <Tabs id="uncontrolled-tab-example2" className="mb-3">
            <Tab eventKey="planning" title="Context Detailing">
              <div className="experimentDiv">

                <p className="experimentTitle">Context Detailing</p>
                <hr class="dotted experimentDot"></hr>
                <textarea name="quality" id="quality" className="experimentTextArea" rows='6' />

                <br />

                <button className="blue_button saveButton">Save</button>
              </div>
            </Tab>
            <Tab eventKey="selectionVariables" title="Selection of Variables">
              <div className="experimentDiv">

                <p className="experimentTitle">Selection of Variables</p>

                <p style={{ marginLeft: '10px' }}>Inform your independent and dependente variables and press Enter to add.</p>
                <hr class="dotted experimentDot"></hr>

                <div style={{ marginLeft: '10px', width: '40%', display: 'inline-block' }}>
                  <p>Independent variables</p>
                  <input type="text" name="independent" id="independent" className="experimentInput selctionVariables" />
                  <textarea className="selectionTextArea" name="variable" id="variable" cols="30" rows="5"></textarea>

                  <button className='saveButton redButton'>Remove Selected</button>
                </div>

                <div style={{ width: '40%', float: 'right', marginRight: '30px' }}>
                  <p>Dependent variables</p>
                  <input type="text" name="independent" id="independent" className="experimentInput selctionVariables" />
                  <textarea className="selectionTextArea" name="variable" id="variable" cols="30" rows="5"></textarea>

                  <button className='saveButton redButton'>Remove Selected</button>
                </div>
              </div>
            </Tab>

            <Tab eventKey="formulation" title="Formulation of Hypotheses">
              <div className="experimentDiv">

                <p className="experimentTitle">Formulation of Hypotheses</p>

                <label htmlFor="perspective" className="experimentLabel">Null Hypothesis</label>
                <input type="text" name="perspective" id="perspective" className="experimentInput" />

                <br />
                <br />


                <label htmlFor="context" className="experimentLabel">Alternative Hypothesis</label>
                <input type="text" name="context" id="context" className="experimentInput" />

                <button className='blue_button saveButton'>Add Hypothesis</button>
              </div>
            </Tab>
            <Tab eventKey="subjects" title="Selection of Subjects">
              <div className="experimentDiv">

                <p className="experimentTitle">Selection of Subjects</p>
                <hr class="dotted experimentDot"></hr>
                <textarea name="quality" id="quality" className="experimentTextArea" rows='6' />

                <br />

                <button className="blue_button saveButton">Save</button>
              </div>
            </Tab>

            <Tab eventKey="design" title="Experiment Design">
              <div className="experimentDiv">

                <p className="experimentTitle">Experiment Design</p>
                <hr class="dotted experimentDot"></hr>
                <p style={{ marginLeft: '10px' }}>Randomization</p>
                <div style={{ marginLeft: '10px' }}>
                  <input type="radio" className="randomization" id="randomization" name="randomization" />
                  <label htmlFor="scope" style={{ marginLeft: '5px' }}>Yes</label>
                </div>

                <div style={{ marginLeft: '10px' }}>
                  <input type="radio" className="randomization" id="randomization" name="randomization" />
                  <label htmlFor="scope" style={{ marginLeft: '5px' }}>No</label>
                </div>

                <br />

                <p style={{ marginLeft: '10px' }}>Blocking and Balancing </p>
                <Table striped bordered hover id='experimentTable' style={{
                  marginLeft: '10px'
                  , width: '95%'
                }}>
                  <thead>
                    <tr>
                      <th style={{
                        width: '20%'
                      }}>Group</th>
                      <th style={{
                        width: '25%'
                      }}>Number of Subjects</th>
                      <th style={{
                        width: '55%'
                      }}>Description of subjects in each group</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Group 1</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Group 2</td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
                <button className="blue_button saveButton">+ Add Group</button>
                <br/><br/><br/><br/>
                <button className="blue_button saveButton">Save</button>
              </div>
            </Tab>

            <Tab eventKey="instrumentation" title="Instrumentation">

              <div className="experimentDiv">

                <p className="experimentTitle">Formulation of Hypotheses</p>

                <div>
                  <p>Experiment Objects</p>
                  <label htmlFor="perspective" className="experimentLabel"> Name </label>
                  <input type="text" name="perspective" id="perspective" className="experimentInput" />
                  <button className="blue_button saveButton">Save</button>
                </div>

                <br />
                <br />

                <div><p>Guidelines</p>
                  <label htmlFor="perspective" className="experimentLabel"> Name </label>
                  <input type="text" name="perspective" id="perspective" className="experimentInput" />
                  <button className="blue_button saveButton">Save</button>
                </div>

                <br />
                <br />

                <div>
                  <p>Measurement</p>
                  <label htmlFor="perspective" className="experimentLabel"> Name </label>
                  <input type="text" name="perspective" id="perspective" className="experimentInput" />
                  <button className="blue_button saveButton">Save</button>
                </div>

                <br />
                <br />

              </div>

            </Tab>
          </Tabs>
        </div>
      </div>
    )
  }
}

export default Planning;