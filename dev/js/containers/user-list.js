import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index';

class UserList extends Component{

  createList()
  {
    return this.props.user.map((user) => {
      return (
        <li key={user.id} onClick={() => this.props.selectUser(user)}>
          {user.first} {user.last}
        </li>
      );
    });
  }

  render(){
    return(
      <p>{this.createList()}</p>
    );
  }
}

function mapStateToProps(state){
  return{
    user: state.user
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({selectUser: selectUser}, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(UserList);
