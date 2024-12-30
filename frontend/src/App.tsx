import React from 'react';
import Header from './components/header.jsx';
import UserProfile from './components/userProfile';
import Feed from './components/postFeed';
import Footer from './components/pageFooter';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <UserProfile />
        <Feed />
      </div>
      <Footer />
    </div>
  );
}

export default App;
