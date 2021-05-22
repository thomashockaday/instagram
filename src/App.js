import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Login = lazy(() => import('./pages/login'));

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading..</p>}>
        <Switch>
          <Route path="/login" component={Login} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
