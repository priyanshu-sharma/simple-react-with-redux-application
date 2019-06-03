import React from 'react';
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-display';
import MusicList from '../containers/music-list';
import MusicDetail from '../containers/music-display'
require('../../scss/style.scss');

const App = () => (
  <div>
    <h2>User List: </h2>
    <UserList />
    <hr />
    <h2>User Details: </h2>
    <UserDetail />
    <hr />
    <h2>Music List: </h2>
    <MusicList />
    <hr />
    <h2>Music Details: </h2>
    <MusicDetail />
    <hr />
  </div>
);

export default App;
