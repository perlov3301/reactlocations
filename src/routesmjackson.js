// api renderRoutes(routes, extraProps = {}, switchProps = {})
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Children } from 'react';
import Home from '';
const routes = [
    {
        component: Root,
        routes: [
            {
                path: "/",
                exact: true,
                component: Home
            },
            {
                path: "/child/:id",
                component: Child,
                routes: [
                   { path: "/child/:id/grand-child",
                    component: Grandchild
                   }
                ]
            }
        ]
    }
];
const Root = ({ route }) => (
    <div>
        <h2>Root</h2>
        {/* child routes won't render without this */}
        { renderRoutes(route.routes) }
    </div>
);
const Child = ({ route }) => (
    <div>
        <h3>Child</h3>
        {/* child routes won't render without this */}
        { renderRoutes(route.routes, 
            { propmy: "extra prop" }) }
    </div>
);
const Grandchild = ({ propmy }) => (
    <div>
        <h4>Grandchild</h4>
        <div>{ propmy }</div>
    </div>
);
// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <BrowserRouter>
      {/* kick it all off with the root route */}
      { renderRoutes(routes) }
    </BrowserRouter>,
    document.getElementById("root")
);