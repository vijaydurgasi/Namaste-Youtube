import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <h1 className="text-left text-green-900 font-bold">Namaste</h1>

      <Header />
      <Body />
    </div>
  );
}

export default App;
