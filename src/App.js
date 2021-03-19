import styles from "./css/App.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <BrowserRouter>
      <main className={styles.App}>
        <Switch>
          <Route path="/" component={HomePage} exact />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
