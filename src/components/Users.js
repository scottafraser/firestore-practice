import React from 'react';
import firebase from "./firebase";
import '../index.css'

class User extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            fullname: ''
        };
    }

    updateInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    addUser = e => {
        e.preventDefault();
        const db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
        });
        const userRef = db.collection("users").add({
            fullname: this.state.fullname,
            email: this.state.email
        })
        this.setState({
            fullname: '',
            email: ''
        });
    };

  render() {
    return (
        <div className="form">
        <h1>Submit a User</h1>
        <form onSubmit={this.addUser}>
          <input
            type="text"
            name="fullname"
            placeholder="Full name"
            onChange={this.updateInput}
            value={this.state.fullname}
          />
          <br></br>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={this.updateInput}
            value={this.state.email}
          />
          <br></br>
          <button type="submit">Submit</button>
        </form>
        </div>
        );
      }
   }
export default User;