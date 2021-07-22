import React, { Component } from 'react';
import  '../../App.css';
import NavBarExp from '../../components/NavBarExp';
import { Tabs, Tab } from 'react-bootstrap';

class Report extends Component {
  render() {
    return (
      <div>
        <NavBarExp/>
        <div class="container" style={{ maxWidth: '65%' }}>
          <Tabs id="uncontrolled-tab-example2" className="mb-3">
          <Tab eventKey="report" title="Report">
              <div className="experimentDiv">
                <p className="experimentTitle">Download a Report</p>
                <hr class="dotted experimentDot"></hr>

                <p className="experimentLabel">Scope</p>
                <div>
                  <input type="radio" className="experimentRadio" id="definition" name="scope" />
                  <label htmlFor="scope">Definition of the objective</label>
                </div>

                <div>
                  <input type="radio" className="experimentRadio" id="picoc" name="scope" />
                  <label htmlFor="scope">PICOC</label>
                </div>

                <div>
                  <input type="radio" className="experimentRadio" id="rqs" name="scope" />
                  <label htmlFor="scope">Research Questions</label>
                </div>

                <div>
                  <input type="radio" className="experimentRadio" id="notes" name="scope" />
                  <label htmlFor="scope">Practitioner Notes</label>
                </div>

                <br/>

                <p className="experimentLabel">Planning</p>
                <div>
                  <input type="radio" className="experimentRadio" id="detailing" name="planning" />
                  <label htmlFor="scope">Context Detailing</label>
                </div>

                <div>
                  <input type="radio" className="experimentRadio" id="variables" name="planning" />
                  <label htmlFor="scope">Selection of Variables</label>
                </div>

                <div>
                  <input type="radio" className="experimentRadio" id="hypothesis" name="planning" />
                  <label htmlFor="scope">Formulation of Hypotheses</label>
                </div>

                <div>
                  <input type="radio" className="experimentRadio" id="subjects" name="planning" />
                  <label htmlFor="scope">Selection of Subjects</label>
                </div>

                <div>
                  <input type="radio" className="experimentRadio" id="design" name="planning" />
                  <label htmlFor="scope">Experiment Design</label>
                </div>

                <div>
                  <input type="radio" className="experimentRadio" id="instrumentation" name="planning" />
                  <label htmlFor="scope">Instrumentation</label>
                </div>

                <br/>

                <p className="experimentLabel">Analysis & Interpretation</p>
                <div>
                  <input type="radio" className="experimentRadio" id="overview" name="analysis" />
                  <label htmlFor="scope">Overview</label>
                </div>

                <div>
                  <input type="radio" className="experimentRadio" id="statistics" name="analysis" />
                  <label htmlFor="scope">Descriptive Statistics</label>
                </div>

                <div>
                  <input type="radio" className="experimentRadio" id="htests" name="analysis" />
                  <label htmlFor="scope">Hypotheses Tests</label>
                </div>

                <br />
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

export default Report;