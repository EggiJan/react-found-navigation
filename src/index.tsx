import {
  createBrowserRouter,
  makeRouteConfig,
  Route,
} from 'found';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReaderPage from './ReaderPage';


const BrowserRouter = createBrowserRouter({
  routeConfig: makeRouteConfig(
    <Route path="dokument/:id" Component={ReaderPage} />,
  ),

  renderError: ({ error }) => (
    <div>{error.status === 404 ? 'Not found' : 'Error'}</div>
  ),
});

ReactDOM.render(<BrowserRouter />, document.getElementById('root'));