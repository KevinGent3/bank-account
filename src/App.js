import "./App.css";
import data from "./assets/data.json";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      {data.map((account) => {
        return (
          <div>
            <p>{account.name}</p>
            <p>{account.balance}</p>
            {account.operations.map((operation) => {
              return <p>{operation}</p>;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default App;
