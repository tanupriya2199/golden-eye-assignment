import { Switch, Route } from "react-router-dom";
import UserDetail from "./components/Users/UserDetail";
import UsersList from "./components/Users/UsersList";

function App() {
  return (
    <Switch>
      <Route path="/users/:id" component={UserDetail} />
      <Route exact path="/" component={UsersList} />
    </Switch>
  );
}

export default App;
