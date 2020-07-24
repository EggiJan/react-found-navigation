import {
  createBrowserRouter,
  makeRouteConfig,
  Route,
} from 'found';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const AppPage: React.FC = () => {
  return <div>AppPage</div>
}

const BrowserRouter = createBrowserRouter({
  routeConfig: makeRouteConfig(
    <Route path="/" Component={AppPage}>
      <Route path="dokument/:documentId">
        
      </Route>
    </Route>,
  ),

  renderError: ({ error }) => (
    <div>{error.status === 404 ? 'Not found' : 'Error'}</div>
  ),
});

ReactDOM.render(<BrowserRouter />, document.getElementById('root'));