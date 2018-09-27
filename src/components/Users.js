import React from 'react';
import firebase from "./firebase";
import '../index.css'
import { mapProps } from 'recompose';



class User extends React.Component {
    constructor() {
        super();
        this.state = {
            db: firebase.firestore(),
            email: '',
            fullname: '',
            users: []
        };
        this.getData = this.getData.bind(this)
    }

    updateInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    addUser = e => {
        e.preventDefault();
        // this.state.db.settings({
        //     timestampsInSnapshots: true
        // });
        const userRef = this.state.db.collection("users").add({
            fullname: this.state.fullname,
            email: this.state.email
        })
        this.setState({
            fullname: '',
            email: ''
        });
    };

   
    getData(e) {
    e.preventDefault();
        this.state.db.collection("users").get().then((querySnapshot) => {
            if (querySnapshot.empty) {
                console.log('no documents found');
            } else {
            querySnapshot.forEach((documentSnapshot) => {
                let data = documentSnapshot.data();
                this.setState(previousState => ({
                    users: [...previousState.users, data]
                }));
            });
        }
    });
}

  render() {
      console.log(this.state.users)
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
        <button onClick={this.getData}>See Users</button>
        {this.state.users.map((users, id) =>
            <div key={id}>
            <h3>{users.name}</h3>
            <h4>{users.email}</h4>
            </div>
         )}
        </div>
        );
      }
   }
export default User;