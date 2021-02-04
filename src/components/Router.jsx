import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Layout from './Layout'
import Music from './Music';
import Video from './Video';
import Contact from './Contact';

function Router() {

  return (
    <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/music" component={Music} />
            <Route path="/video" component={Video} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Layout>
    </BrowserRouter>
  );
}

export default Router;
