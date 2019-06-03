import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectMusic} from '../actions/index-music';

class MusicList extends Component{

  createMusicList(){
    return this.props.music.map((music) =>{
      return (
        <li key={music.id} onClick={() => this.props.selectMusic(music)}>
        {music.music_name} {music.artist}</li>
      );
    }
  );
  }

  render(){
    return(
      <p>{this.createMusicList()}</p>
    );
  }
}

function mapStateToProps(state){
  return{
    music: state.music
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({selectMusic: selectMusic}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(MusicList);
