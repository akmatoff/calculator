import { Provider } from "react-redux";
import Calculator from "./components/Calculator";
import store from "./redux/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <main className="flex-column centered">
          <Calculator />
        </main>
      </div>
    </Provider>
  );
}

export default App;
