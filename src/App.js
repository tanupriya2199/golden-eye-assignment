import { Switch, Route } from "react-router-dom";
import UsersList from "./components/Users/UsersList";

function App() {
  return (
    <Switch>
      <Route path="/" component={UsersList} />
    </Switch>
  );
}

export default App;
