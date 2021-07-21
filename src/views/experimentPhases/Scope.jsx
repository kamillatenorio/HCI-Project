import React, { Component } from 'react';
import '../../App.css';
import { Tabs, Tab } from 'react-bootstrap';

class Scope extends Component {
  render() {
    return (
      <div style={{ width: '80%', marginLeft: '19%', marginRight: '16%' }}>
        <div>
          <p style={{
            fontWeight: 'bold', fontSize: 'xx-large', marginTop: '20px',
            color: '#727070'
          }}>Joana Vicente | Gamification and Flow Experience</p>
        </div>
        <div style={{ width: '80%' }}>
          <Tabs id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="scope" title="Scope">

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

                <Tab eventKey="others" title="Others">

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

                  <br />

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

                  <br />

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

                  <br />

                </Tab>
              </Tabs>
            </Tab>
            <Tab eventKey="planning" title="Planning">
              <div className="experimentDiv">

                <p className="experimentTitle">Context Detailing</p>
                <hr class="dotted experimentDot"></hr>
                <textarea name="quality" id="quality" className="experimentTextArea" rows='6' />

                <br />

                <button className="blue_button saveButton">Save</button>
              </div>

            </Tab>
            <Tab eventKey="operation" title="Operation">
              <p style={{ marginLeft: '14%' }}>The experiment operation will be made by another tool, which can be accessed <a href="#" target="__Blank">HERE</a>.</p>
            </Tab>
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

export default Scope;