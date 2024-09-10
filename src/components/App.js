import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

// About Component
function About() {
  return (
    <div id="about">
      <h1>About</h1>
    </div>
  );
}


// App Component
function App() {
  return (
    <div>
      <NavBar />  
      <Home />    
      <About />   
    </div>
  );
}

export default App;

