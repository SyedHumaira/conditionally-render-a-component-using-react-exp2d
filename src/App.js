import React, { useState } from 'react';

// Child Components
function LoginForm({ onLogin }) {
  return (
    <div style={{ border: '1px solid gray', padding: '20px', borderRadius: '10px', width: '250px', margin: '20px auto' }}>
      <h2>Please log in</h2>
      <button onClick={onLogin} style={{ padding: '10px 20px' }}>Log In</button>
    </div>
  );
}

function Dashboard({ onLogout }) {
  return (
    <div style={{ padding: '20px', border: '1px solid green', borderRadius: '10px', width: '300px', margin: '20px auto' }}>
      <h2>Welcome back, User 🎉</h2>
      <p>You are now logged in!</p>
      <button onClick={onLogout} style={{ padding: '10px 20px', marginTop: '10px' }}>Log Out</button>
    </div>
  );
}

// Main App Component
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
      <h1>Conditional Rendering Demo</h1>

      {isLoggedIn ? (
        <Dashboard onLogout={() => setIsLoggedIn(false)} />
      ) : (
        <LoginForm onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;
