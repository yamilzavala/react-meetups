import { Switch, Route } from "react-router-dom";
import AllMeetupPage from "./pages/AllMeetup";
import FavoritePage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>      
      <Switch>
        <Route path="/" component={AllMeetupPage} exact></Route>
        <Route path="/favorites" component={FavoritePage} exact></Route>
        <Route path="/newMeetup" component={NewMeetupPage} exact></Route>
      </Switch>
    </Layout>
  );
}

export default App;
