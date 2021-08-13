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
                <p className="experimentTitle">Definition of Objective
                <i class="fas fa-info-circle" data-toggle="modal" data-target="#helpModal5"></i>
                </p> 
                <div class="modal fade" id="helpModal5" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel1">Definition of Objective </h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                    The scope of the experiment is set by defining its goals. The purpose of a goal
                    definition template is to ensure that important aspects of an experiment are defined
                    before the planning and execution take place. By defining the goal of the experiment
                    according to this template, the foundation is properly laid. The goal template:<br/>
                    <b>Analyze: Object(s) of study<br/>
                    for the purpose of: Purpose <br/>
                    with respect to their: Quality focus<br/>
                    from the point of view of the: Perspective<br/>
                    in the context of: Context.</b><br/><br/>
                    The object of study is the entity that is studied in the experiment. The object of
                    study can be products, processes, resources, models, metrics or theories. Examples
                    are the final product, the development or inspection process, or a reliability growth
                    model. The purpose defines what the intention of the experiment is. It may be
                    to evaluate the impact of two different techniques, or to characterize the learning
                    curve of an organization. The quality focus is the primary effect under study in the 
                    experiment. Quality focus may be effectiveness, cost, reliability etc. The perspective
                    tells the viewpoint from which the experiment results are interpreted. Examples of
                    perspectives are developer, project manager, customer and researcher. The context is
                    the ‘environment’ in which the experiment is run. The context briefly defines which
                    personnel is involved in the experiment (subjects) and which software artifacts
                    (objects1) are used in the experiment. Subjects can be characterized by experience,
                    team size, workload etc. Objects can be characterized by size, complexity, priority,
                    application domain etc.<br/><br/>

                    References<br/>

                    [1] C. Wohlin et al., Experimentation in Software Engineering,
                    DOI 10.1007/978-3-642-29044-2 8, Springer-Verlag Berlin Heidelberg 2012.
                    </div>
                  </div>
                  </div>
                </div>
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


                <label htmlFor="p_context" className="experimentLabel">in the context of</label>
                <input type="text" name="context" id="p_context" placeholder=' <Add the context>' className="experimentInput" />

                <button className='blue_button saveButton'>Save</button>

              </div>
            </Tab>

            <Tab eventKey="picoc" title="PICOC">

              <div className="experimentDiv">
                <p className="experimentTitle">PICOC
                <i class="fas fa-info-circle" data-toggle="modal" data-target="#helpModal6"></i>
                </p> 
                <div class="modal fade" id="helpModal6" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel2">PICOC </h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                    PICOC stands for population, intervention, comparison, outcomes and context.<br/><br/>

                    The <b>population</b> in which the evidence is collected, i.e. which group of people, programs or businesses are of interest for the review?<br/>
                    The <b>intervention</b> applied in the empirical study, i.e. which technology, tool or procedure is under study?<br/>
                    The <b>comparison</b> to which the intervention is compared, i.e. how is the control treatment defined? In particular the ‘placebo’ intervention is critical, as “not using the intervention” is mostly not a valid action in software engineering.<br/>
                    The <b>outcomes</b> of the experiment should not only be statistically significant, but also be significant from a practical point of view. For example, it is probably not interesting that an outcome is 10% better in some respect if it is twice as time consuming.<br/>
                    The <b>context</b> of the study must be defined, which is an extended view of the population, including whether it is conducted in academia or industry, in which industry segment, and also the incentives for the subjects.<br/><br/>

                    References<br/>

                    [1] C. Wohlin et al., Experimentation in Software Engineering,
                    DOI 10.1007/978-3-642-29044-2 8, Springer-Verlag Berlin Heidelberg 2012.
                    </div>
                  </div>
                  </div>
                </div>
                <hr class="dotted experimentDot"></hr>


                <label htmlFor="population" className="experimentLabel">Population</label>
                <input type="text" name="quality" id="population" placeholder='Add the population in which the evidence is going to be collected.' className="experimentInput" />

                <br />
                <br />

                <label htmlFor="intervation" className="experimentLabel">Intervation</label>
                <input type="text" name="quality" id="intervation" placeholder='Add the intervention that is going to be applied in the empirical study.' className="experimentInput" />

                <br />
                <br />

                <label htmlFor="comparsion" className="experimentLabel">Comparsion</label>
                <input type="text" name="quality" id="comparsion" placeholder='Add the comparison to which the intervention is going to be compared.' className="experimentInput" />

                <br />
                <br />

                <label htmlFor="outcome" className="experimentLabel">Outcome</label>
                <input type="text" name="quality" id="outcome" placeholder='Add the expected outcome of the experiment.' className="experimentInput" />

                <br />
                <br />

                <label htmlFor="context" className="experimentLabel">Context</label>
                <input type="text" name="quality" id="context" placeholder='Add the context of the experiment.' className="experimentInput" />

                <br />

                <button className="blue_button saveButton">Save</button>
              </div>

            </Tab>

            <Tab eventKey="rqs" title="Research Questions">
              <div className="experimentDiv">
                <p className="experimentTitle">Research Questions
                <i class="fas fa-info-circle" data-toggle="modal" data-target="#helpModal7"></i>
                </p> 
                <div class="modal fade" id="helpModal7" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel3">Research Questions  </h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                    The research questions state what is needed to know in order to fulfill the objective of the study. Similar to the objective, the research questions evolve during the study and are narrowed to specific research questions during the study iterations. <br/>

                    References<br/>

                    [1] C. Wohlin et al., Experimentation in Software Engineering,
                    DOI 10.1007/978-3-642-29044-2 8, Springer-Verlag Berlin Heidelberg 2012.
                    </div>
                  </div>
                  </div>
                </div>
                <hr class="dotted experimentDot"></hr>


                <label htmlFor="rq1" className="experimentLabel">RQ1</label>
                <input type="text" name="quality" id="rq1" className="experimentInput" placeholder="Enter your first research question"/>

                <br />
                <br />

                <label htmlFor="rq2" className="experimentLabel">RQ2</label>
                <input type="text" name="quality" id="rq2" className="experimentInput" placeholder="Enter your second research question" />

                <br />

                <button className="blue_button saveButton">Add Question</button>
              </div>
            </Tab>

            <Tab eventKey="practitioner" title="Practitioner notes">
              <div className="experimentDiv">
                <p className="experimentTitle">Practitioner notes
                <i class="fas fa-info-circle" data-toggle="modal" data-target="#helpModal8"></i>
                </p> 
                <div class="modal fade" id="helpModal8" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel4">Practitioner notes </h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                    Each paper has a short boxed text called Practitioner Notes; these notes includes three short summaries: 1) what is already known about this topic, 2) what this paper adds, and 3) implications for practice and/ or policy.<br/><br/>
                    
                    References<br/>

                    [1] Lauri Malmi. 2015. Practitioner notes. ACM Inroads 6, 3 (September 2015), 40–41. DOI:https://doi.org/10.1145/2794297
                    </div>
                  </div>
                  </div>
                </div>
                <hr class="dotted experimentDot"></hr>


                <label htmlFor="n1" className="experimentLabel"> What is already known about this topic?</label> <br />
                <textarea name="quality" id="n1" placeholder='Add what is already known about this subject according to the scientific literature.' className="experimentTextArea" rows='6' />

                <br />
                <br />

                <label htmlFor="n2" className="experimentLabel"> What this experiment add?</label> <br />
                <textarea name="quality" id="n2" placeholder='Add what this experiment add in the current scientific literature.' className="experimentTextArea" rows='6' />

                <br />
                <br />

                <label htmlFor="n3" className="experimentLabel"> Implications for practice and/or policy </label> <br />
                <textarea name="quality" id="n3" placeholder='Add the implications for practice and/or policy of this experiment.' className="experimentTextArea" rows='6' />

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