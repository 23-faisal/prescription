import "./App.css";
import logoImage from "../public/logo.png";

function App() {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-col items-center justify-center">
        <img src={logoImage} alt="prescription" />
        <h1 className="text-5xl text-teal-500  font-bold">Prescription</h1>
        <p className="text-xl text-blue-400">A doctor appointment app.</p>
      </div>
    </div>
  );
}

export default App;
