import React, {Component} from 'react';
import {connect} from 'react-redux';

class MusicDetail extends Component{
  render(){
    if(!this.props.music)
    {
      return (<h4>Select a Music....</h4>);
    }
    return(
      <div>
        <h3>Id : {this.props.music.id}</h3>
        <h3>Name : {this.props.music.music_name}</h3>
        <h3>Artist : {this.props.music.artist}</h3>
        <h3>Platform : {this.props.music.platform}</h3>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    music: state.activeMusic
  };
}
export default connect(mapStateToProps)(MusicDetail);
