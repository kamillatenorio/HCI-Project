import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import '../App.css';

class UserProfile extends Component {
    render() {
        return (
            <div className="content">
                <div class="container" style={{ marginLeft: '18%', marginTop:'5%' }}>
                    <div class="image">
                        <img id="profile_image" src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png" alt="Foto de perfil do(a) usuário(a)."/>
                    </div>
                    <div id="profile_information">
                        <span style={{ color: "#3D5287", fontWeight: 'bold' }}>Joana Vicente</span> <br />
                        <span>2 Followers | 0 Following</span>
                        <br />

                        <a href='login'><button
                            style={{
                                borderRadius: '5px'
                            }}>Edit Profile</button></a>
                    </div>
                </div>
                <br />


                <div className="experiments_table">
                    <button className="blue_button" id="experiment_button" style={{ marginLeft: '0', marginBottom: '10px' }}>
                        <a href="/newexperiment" style={{ textDecoration: 'none', color: 'white' }}>Create Experiment</a>
                    </button>


                    <Table striped bordered hover id='experimentTable'>
                        <thead>
                            <tr>
                                <th style={{
                                    width: '5%'
                                }}>#</th>
                                <th style={{
                                    width: '50%'
                                }}>Title</th>
                                <th>Authors</th>
                                <th style={{
                                    width: '17%'
                                }}>Last Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Gamification and Flow Experience</td>
                                <td>Joana Vicente, Kamila Rios</td>
                                <td>Sat Jul 22 2021 </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

export default UserProfile;
