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

                <p className="experimentTitle">Context Detailing 
                  <i class="fas fa-info-circle" data-toggle="modal" data-target="#helpModal"></i>
                </p> 
                <div class="modal fade" id="helpModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Context Detailing </h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                    The context of the experiment can be characterized according to four dimensions:<br/>
                    • Off-line vs. on-line<br/>
                    • Student vs. professional<br/>
                    • Toy vs. real problems<br/>
                    • Specific vs. general<br/>


                    References<br/>

                    [1] C. Wohlin et al., Experimentation in Software Engineering,
                    DOI 10.1007/978-3-642-29044-2 8, Springer-Verlag Berlin Heidelberg 2012.
                    </div>
                  </div>
                  </div>
                </div>
                <hr class="dotted experimentDot"></hr>
                <textarea name="quality" id="quality" placeholder='Detail the context of your experiment.' className="experimentTextArea" rows='6' />

                <br />

                <button className="blue_button saveButton">Save</button>
              </div>
            </Tab>
            <Tab eventKey="selectionVariables" title="Selection of Variables">
              <div className="experimentDiv">

                <p className="experimentTitle">Selection of Variables
                <i class="fas fa-info-circle" data-toggle="modal" data-target="#helpModal1"></i>
                </p> 
                <div class="modal fade" id="helpModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Selection of Variable </h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                    The <b>independent variables</b> are those variables that we can control and change in the experiment.  These variables should have some effect on the <b>dependent variable</b> and must be controllable. The choices of the independent and dependent variables are often done simultaneously or in reverse order.  The effect of the treatments is measured in the dependent variable(s). <br/>


                    References <br/>

                    [1] C. Wohlin et al., Experimentation in Software Engineering,
                    DOI 10.1007/978-3-642-29044-2 8, Springer-Verlag Berlin Heidelberg 2012.
                    </div>
                  </div>
                  </div>
                </div>

                <hr class="dotted experimentDot"></hr>

                <div style={{ marginLeft: '10px', width: '40%', display: 'inline-block' }}>
                  <p>Independent variables</p>
                  <input placeholder='Inform an independent variable and press Enter to add.' type="text" name="independent" id="independent" className="experimentInput selctionVariables" />
                  <textarea className="selectionTextArea" name="variable" id="variable" cols="30" rows="5"></textarea>

                  <button className='saveButton redButton'>Remove Selected</button>
                </div>

                <div style={{ width: '40%', float: 'right', marginRight: '30px' }}>
                  <p>Dependent variables</p>
                  <input placeholder='Inform an dependent variable and press Enter to add.' type="text" name="independent" id="independent" className="experimentInput selctionVariables" />
                  <textarea className="selectionTextArea" name="variable2" id="variable2" cols="30" rows="5"></textarea>

                  <button className='saveButton redButton'>Remove Selected</button>
                </div>
              </div>
            </Tab>

            <Tab eventKey="formulation" title="Formulation of Hypotheses">
              <div className="experimentDiv">

                <p className="experimentTitle">Formulation of Hypotheses
                <i class="fas fa-info-circle" data-toggle="modal" data-target="#helpModal2"></i>
                </p> 
                <div class="modal fade" id="helpModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Formulation of Hypotheses </h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                    The experiment definition is formalized into hypotheses.<br/>
                    Two hypotheses have to be formulated:<br/>

                    <b>Null hypothesis:</b> H0, states that there are no real underlying trends or patterns in the experiment setting; the only reasons for differences in our observations are coincidental. This is the hypothesis that the experimenter wants to reject with as high significance as possible.
                    Ex: There is no significant effect of "dependent variable" on "independent variable".<br/>

                    <b>Alternative hypothesis:</b> Ha; H1, etc., is the hypothesis in favor of which the null hypothesis is rejected. 
                    Ex: There is significant effect of "dependent variable" on "independent variable".<br/><br/>



                    References<br/>

                    [1] C. Wohlin et al., Experimentation in Software Engineering,
                    DOI 10.1007/978-3-642-29044-2 8, Springer-Verlag Berlin Heidelberg 2012.
                    </div>
                  </div>
                  </div>
                </div>
                <hr class="dotted experimentDot"></hr>

                <label htmlFor="perspective" className="experimentLabel">Null Hypothesis</label>
                <input placeholder="Add your null hypothesis." type="text" name="perspective" id="perspective" className="experimentInput" />

                <br />
                <br />


                <label htmlFor="context" className="experimentLabel">Alternative Hypothesis</label>
                <input placeholder="Add your alternative hypothesis." type="text" name="context" id="context" className="experimentInput" />

                <button className='blue_button saveButton'>Add Hypothesis</button>
              </div>
            </Tab>
            <Tab eventKey="subjects" title="Selection of Subjects">
              <div className="experimentDiv">

                <p className="experimentTitle">Selection of Subjects<i class="fas fa-info-circle" data-toggle="modal" data-target="#helpModal3"></i>
                </p> 
                <div class="modal fade" id="helpModal3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Selection of Subjects </h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                    The selection is closely connected to the generalization of the results from the experiment. In order to generalize the results to the desired population, the selection must be representative for that population. The selection of subjects is also called a sample from a population.<br/>

                    The sampling of the population can be either a probability or a non-probability sample. The difference between the two is that in the probability sampling, the probability of selecting each subject is known and in the non-probability sampling it is unknown.<br/><br/>
                    
                    References<br/>

                    [1] C. Wohlin et al., Experimentation in Software Engineering,
                    DOI 10.1007/978-3-642-29044-2 8, Springer-Verlag Berlin Heidelberg 2012.
                    </div>
                  </div>
                  </div>
                </div>
                <hr class="dotted experimentDot"></hr>
                <textarea placeholder="Detail the subjects that will be participating in your experiment." name="quality" id="quality" className="experimentTextArea" rows='6' />

                <br />

                <button className="blue_button saveButton">Save</button>
              </div>
            </Tab>

            <Tab eventKey="design" title="Experiment Design">
              <div className="experimentDiv">

                <p className="experimentTitle">Experiment Design
                <i class="fas fa-info-circle" data-toggle="modal" data-target="#helpModal4"></i>
                </p> 
                <div class="modal fade" id="helpModal4" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Experiment Design </h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                    When designing an experiment, many aspects must be considered. For example:<br/>
                    <b>Randomization.</b> One of the most important design principles is randomization. All statistical methods used for analyzing the data require that the observations be from independent random variables. To meet this requirement, randomization is used. <br/>
                    Example. The selection of the persons (subjects) will be representative of the designers in the company, by random selection of the available designers. The assignment to each treatment (object-oriented design or the standard company design principle) is selected randomly.<br/><br/>

                    <b>Blocking.</b> Sometimes we have a factor that probably has an effect on the response, but we are not interested in that effect. If the effect of the factor is known and controllable, we can use a design technique called blocking. Blocking is used to systematically eliminate the undesired effect in the comparison among the treatments. <br/>
                    Example. The persons (subjects) used, for this experiment, have different experience. Some of them have used object-oriented design before and some have not. To minimize the effect of the experience, the persons are grouped into two groups (blocks), one with experience of object-oriented design and one without.<br/><br/>

                    <b>Balancing.</b> If we assign the treatments so that each treatment has equal number of subjects, we have a balanced design. Balancing is desirable because it both simplifies and strengthens the statistical analysis of the data, but it is not necessary.<br/>
                    Example. The experiment uses a balanced design, which means that there is the same number of persons in each group (block).<br/><br/>



                    References<br/>

                    [1] C. Wohlin et al., Experimentation in Software Engineering,
                    DOI 10.1007/978-3-642-29044-2 8, Springer-Verlag Berlin Heidelberg 2012.
                    </div>
                  </div>
                  </div>
                </div>
                <hr class="dotted experimentDot"></hr>
                <p style={{ marginLeft: '10px' }}>Randomization</p>
                <div style={{ marginLeft: '10px' }}>
                  <input type="radio" className="randomization" id="y" name="randomization" />
                  <label htmlFor="scope" style={{ marginLeft: '5px' }}>Yes</label>
                </div>

                <div style={{ marginLeft: '10px' }}>
                  <input type="radio" className="randomization" id="n" name="randomization" />
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

                <p className="experimentTitle">Instrumentation
                <i class="fas fa-info-circle" data-toggle="modal" data-target="#helpModal5"></i>
                </p> 
                <div class="modal fade" id="helpModal5" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Experiment Design </h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                    The instruments for an experiment are of three types, namely objects, guidelines and measurement instruments. <br/>

                    <b>Experiment</b> objects may be, for example, specification or code documents. When planning for an experiment, it is important to choose objects that are appropriate. For example, in an inspection experiment, the number of faults must be known in the inspection objects. This can be achieved by seeding faults or by using a document with a known number of faults. Using a true early version of a document in which the faults are identified can do the latter.<br/>

                    <b>Guidelines</b> are needed to guide the participants in the experiment. Guidelines include, for example, process descriptions and checklists. If different methods are compared in the experiment, guidelines for the methods have to be prepared for the experiment. In addition to the guidelines, the participants also need training in the methods to be used.<br/>

                    <b>Measurements</b> in an experiment are conducted via data collection. In human-intensive experiments, data is generally collected via manual forms or in interviews. The planning task to be performed is to prepare forms and interview questions and to validate the forms and questions with some people having similar background and skills as the experiment participants.<br/><br/>

                    References<br/>

                    [1] C. Wohlin et al., Experimentation in Software Engineering,
                    DOI 10.1007/978-3-642-29044-2 8, Springer-Verlag Berlin Heidelberg 2012.
                    </div>
                  </div>
                  </div>
                </div>
                <hr class="dotted experimentDot"></hr>

                <div>
                  <p>Experiment Objects</p>
                  <label htmlFor="perspective" className="experimentLabel"> Name </label>
                  <input placeholder="Add the names of the experiment objects." type="text" name="perspective" id="perspective" className="experimentInput" />
                  <button className="blue_button saveButton">Save</button>
                </div>

                <br />
                <br />

                <div><p>Guidelines</p>
                  <label htmlFor="perspective" className="experimentLabel"> Name </label>
                  <input placeholder="Add the names of the guidelines." type="text" name="guidelines" id="guidelines" className="experimentInput" />
                  <button className="blue_button saveButton">Save</button>
                </div>

                <br />
                <br />

                <div>
                  <p>Measurement</p>
                  <label htmlFor="perspective" className="experimentLabel"> Name </label>
                  <input placeholder="Add the name of the measurement." type="text" name="measurement" id="measurement" className="experimentInput" />
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