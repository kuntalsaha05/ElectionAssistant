import React from 'react';
import Timeline from './components/Timeline';
import ChatInterface from './components/ChatInterface';

/**
 * Main application component.
 * @returns {JSX.Element} The App component.
 */
function App() {
  return (
    <div className="app-container">
      <header className="header" role="banner">
        <h1>Election Process Explorer</h1>
        <p>Your interactive guide to understanding the election cycle, timelines, and voting steps.</p>
      </header>

      <main className="main-content">
        <Timeline />
        <ChatInterface />
      </main>
    </div>
  );
}

export default App;
