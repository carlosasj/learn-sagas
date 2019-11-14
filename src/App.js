import React from 'react';
import './App.css';
import Username from './components/Username';
import SearchBox from './components/SearchBox';
import UserList from './components/UserList';
import RepoList from './components/RepoList';

function App() {
  return (
    <div>
      <header>
        <SearchBox/>
        <UserList/>
        <Username/>
        <RepoList/>
      </header>
    </div>
  );
}

export default App;
