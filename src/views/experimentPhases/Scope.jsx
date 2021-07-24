import React, { Component } from 'react';
import '../../App.css';
import { Tabs, Tab } from 'react-bootstrap';
import NavBarExp from '../../components/NavBarExp';
import Navigation from '../Navigation';

class Scope extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <NavBarExp />
        <div class="container" style={{ maxWidth: '65%' }}>
          <Tabs id="uncontrolled-tab-example2" className="mb-3">

            <Tab eventKey="objective" title="Definition of Objective">
              <div className="experimentDiv">
                <p className="experimentTitle">Definition of objective</p>
                <hr class="dotted experimentDot"></hr>

                <label htmlFor="analyze" className="experimentLabel">Analyze</label>
                <input className="experimentInput" type="text" name="analyze" id="analyze" placeholder='<Add the objext(s) of study>' />

                <br />
                <br />

                <label htmlFor="purpose" className="experimentLabel">For the propose of</label>
                <input type="text" name="purpose" id="purpose" placeholder='<Add the Purpose>' className="experimentInput" />


                <br />
                <br />

                <label htmlFor="quality" className="experimentLabel">with respect to their </label>
                <input type="text" name="quality" id="quality" placeholder='<Add the quality focus>' className="experimentInput" />


                <br />
                <br />

                <label htmlFor="perspective" className="experimentLabel">from the point of view of the</label>
                <input type="text" name="perspective" id="perspective" placeholder=' <Add the perspective>' className="experimentInput" />

                <br />
                <br />


                <label htmlFor="context" className="experimentLabel">in the context of</label>
                <input type="text" name="context" id="context" placeholder=' <Add the context>' className="experimentInput" />

                <button className='blue_button saveButton'>Save</button>

              </div>
            </Tab>

            <Tab eventKey="picoc" title="PICOC">

              <div className="experimentDiv">
                <p className="experimentTitle">PICOC</p>
                <hr class="dotted experimentDot"></hr>


                <label htmlFor="quality" className="experimentLabel">Population</label>
                <input type="text" name="quality" id="quality" placeholder='Add the population in which the evidence is going to be collected.' className="experimentInput" />

                <br />
                <br />

                <label htmlFor="quality" className="experimentLabel">Intervation</label>
                <input type="text" name="quality" id="quality" placeholder='Add the intervention that is going to be applied in the empirical study.' className="experimentInput" />

                <br />
                <br />

                <label htmlFor="quality" className="experimentLabel">Comparsion</label>
                <input type="text" name="quality" id="quality" placeholder='Add the comparison to which the intervention is going to be compared.' className="experimentInput" />

                <br />
                <br />

                <label htmlFor="quality" className="experimentLabel">Outcome</label>
                <input type="text" name="quality" id="quality" placeholder='Add the expected outcome of the experiment.' className="experimentInput" />

                <br />
                <br />

                <label htmlFor="quality" className="experimentLabel">Context</label>
                <input type="text" name="quality" id="quality" placeholder='Add the context of the experiment.' className="experimentInput" />

                <br />

                <button className="blue_button saveButton">Save</button>
              </div>

            </Tab>

            <Tab eventKey="rqs" title="Research Questions">
              <div className="experimentDiv">
                <p className="experimentTitle">Research Questions</p>
                <hr class="dotted experimentDot"></hr>


                <label htmlFor="quality" className="experimentLabel">RQ1</label>
                <input type="text" name="quality" id="quality" className="experimentInput" placeholder="Enter your first research question"/>

                <br />
                <br />

                <label htmlFor="quality" className="experimentLabel">RQ2</label>
                <input type="text" name="quality" id="quality" className="experimentInput" placeholder="Enter your second research question" />

                <br />

                <button className="blue_button saveButton">Add Question</button>
              </div>
            </Tab>

            <Tab eventKey="practitioner" title="Practitioner notes">
              <div className="experimentDiv">
                <p className="experimentTitle">Practitioner notes</p>
                <hr class="dotted experimentDot"></hr>


                <label htmlFor="quality" className="experimentLabel"> What is already known about this topic?</label> <br />
                <textarea name="quality" id="quality" placeholder='Add what is already known about this subject according to the scientific literature.' className="experimentTextArea" rows='6' />

                <br />
                <br />

                <label htmlFor="quality" className="experimentLabel"> What this experiment add?</label> <br />
                <textarea name="quality" id="quality" placeholder='Add what this experiment add in the current scientific literature.' className="experimentTextArea" rows='6' />

                <br />
                <br />

                <label htmlFor="quality" className="experimentLabel"> Implications for practice and/or policy </label> <br />
                <textarea name="quality" id="quality" placeholder='Add the implications for practice and/or policy of this experiment.' className="experimentTextArea" rows='6' />

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

export default Scope;