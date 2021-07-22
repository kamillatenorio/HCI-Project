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
                <input className="experimentInput" type="text" name="analyze" id="analyze" placeholder='<Objext(s) of study>' />

                <br />
                <br />

                <label htmlFor="purpose" className="experimentLabel">For the propose of</label>
                <input type="text" name="purpose" id="purpose" placeholder='<Purpose>' className="experimentInput" />


                <br />
                <br />

                <label htmlFor="quality" className="experimentLabel">with respect to their </label>
                <input type="text" name="quality" id="quality" placeholder='<Quality focus>' className="experimentInput" />


                <br />
                <br />

                <label htmlFor="perspective" className="experimentLabel">from the point of view of the</label>
                <input type="text" name="perspective" id="perspective" placeholder=' <Perspective>' className="experimentInput" />

                <br />
                <br />


                <label htmlFor="context" className="experimentLabel">in the context of</label>
                <input type="text" name="context" id="context" placeholder=' <Context>' className="experimentInput" />

                <button className='blue_button saveButton'>Save</button>

              </div>
            </Tab>

            <Tab eventKey="picoc" title="PICOC">

              <div className="experimentDiv">
                <p className="experimentTitle">PICOC</p>
                <hr class="dotted experimentDot"></hr>


                <label htmlFor="quality" className="experimentLabel">Population</label>
                <input type="text" name="quality" id="quality" className="experimentInput" />

                <br />
                <br />

                <label htmlFor="quality" className="experimentLabel">Intervation</label>
                <input type="text" name="quality" id="quality" className="experimentInput" />

                <br />
                <br />

                <label htmlFor="quality" className="experimentLabel">Comparsion</label>
                <input type="text" name="quality" id="quality" className="experimentInput" />

                <br />
                <br />

                <label htmlFor="quality" className="experimentLabel">Outcome</label>
                <input type="text" name="quality" id="quality" className="experimentInput" />

                <br />
                <br />

                <label htmlFor="quality" className="experimentLabel">Context</label>
                <input type="text" name="quality" id="quality" className="experimentInput" />

                <br />

                <button className="blue_button saveButton">Save</button>
              </div>

            </Tab>

            <Tab eventKey="rqs" title="Research Questions">
              <div className="experimentDiv">
                <p className="experimentTitle">Research Questions</p>
                <hr class="dotted experimentDot"></hr>


                <label htmlFor="quality" className="experimentLabel">RQ1</label>
                <input type="text" name="quality" id="quality" className="experimentInput" value="Some question?" />

                <br />
                <br />

                <label htmlFor="quality" className="experimentLabel">RQ2</label>
                <input type="text" name="quality" id="quality" className="experimentInput" value="Some question 2?" />

                <br />

                <button className="blue_button saveButton">Add Question</button>
              </div>
            </Tab>

            <Tab eventKey="practitioner" title="Practitioner notes">
              <div className="experimentDiv">
                <p className="experimentTitle">Practitioner notes</p>
                <hr class="dotted experimentDot"></hr>


                <label htmlFor="quality" className="experimentLabel"> What is already known about this topic?</label> <br />
                <textarea name="quality" id="quality" className="experimentTextArea" rows='6' />

                <br />
                <br />

                <label htmlFor="quality" className="experimentLabel"> What this paper add?</label> <br />
                <textarea name="quality" id="quality" className="experimentTextArea" rows='6' />

                <br />
                <br />

                <label htmlFor="quality" className="experimentLabel"> Implications for practice and/or policy </label> <br />
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

export default Scope;