import React from 'react';
import Header from './Header';
import Calendar from './Calendar';
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <h1>Weekly Test Assessment</h1>
        <p>"Weekly Test is now live! Time to test your knowledge and track your progress.”<br />Good luck!</p>
        <Calendar />
      </div>
    </div>
  );
}

export default App;
