import "./App.css";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <div className="main_container">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
