import React, {Component} from 'react';
import Header from '../components/Header';
import firebase from 'firebase';
import {postActions} from '../actions/postActions';

class Admin extends Component{
		constructor(props){
		super(props);
		this.state = {
			mode:'admin',
      username:'',
      password:''
		}
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
	}

  login(){
    if (this.state.username && this.state.password) {}
    postActions('login', this.state).then ((result) =>{
      let responseJSON = result;
      console.log(responseJSON);
    });
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value});
    console.log(this.state);
  }

  render(){
    return(
     <section className={this.state.mode + ' content'}>
      <div className="formWrap">
        <form >
          <input type="text" name="username" placeholder="user name" onChange={this.onChange}/>
          <br/>
          <input type="text" name="password" placeholder="password" onChange={this.onChange}/>
          <br/>
          <button type="login" onClick={this.login}>Login</button>
        </form>
      </div>
      </section>
      );

  }
}

export default Admin;
