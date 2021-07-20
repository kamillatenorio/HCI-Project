import React, { Component } from 'react';
import  '../App.css';

class UserProfile extends Component {
  render() {
    return (
      <div className="content">
        <div class="container">
            <div class="image">
                <img id="profile_image" src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png"/>
            </div>
            <div id="profile_information">
                <span style={{color: "#3D5287"}}>Joana Vicente</span> <br />
                <span>1 Followers | 0 Following</span>
                <br />
                <button className="blue_button">Edit Profile</button>
            </div>
        </div>   
        <button className="blue_button" id="experiment_button">
            <a href="/newexperiment">Create Experiment</a>
        </button>

    <div className="experiments_table">
        <table class="table table-striped table-hover">
            <tr>
                <td colspan="3">Experiments in progress</td>
            </tr>
            <tr>
                <th>Title</th>
                <th >Authors</th>
                <th >Last Update</th>
            </tr>
            <tr>
                <td>Gamification and Flow Experience</td>
                <td>Joana Vicente</td>
                <td>Sat 15 May 2021</td>
            </tr>
            <tr>
                <td>Gamification and Flow Experience</td>
                <td>Joana Vicente</td>
                <td>Sat 15 May 2021</td>
            </tr>
            <tr>
                <td>Gamification and Flow Experience</td>
                <td>Joana Vicente</td>
                <td>Sat 15 May 2021</td>
            </tr>
            <tr>
                <td>Gamification and Flow Experience</td>
                <td>Joana Vicente</td>
                <td>Sat 15 May 2021</td>
            </tr>
            <tr>
                <td>Gamification and Flow Experience</td>
                <td>Joana Vicente</td>
                <td>Sat 15 May 2021</td>
            </tr>

        </table>
    </div>
      </div>
    )
  }
}

export default UserProfile;