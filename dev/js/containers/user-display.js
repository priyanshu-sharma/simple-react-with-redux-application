import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component{
  render(){
    if(!this.props.user){
      return(<h4>Select a User....</h4>);
    }
    return(
      <div>
        <h3>Id : {this.props.user.id}</h3>
        <h3>First Name : {this.props.user.first}</h3>
        <h3>Last Name : {this.props.user.last}</h3>
        <h3>Age : {this.props.user.age}</h3>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    user: state.activeUser
  };
}

export default connect(mapStateToProps)(UserDetail);
