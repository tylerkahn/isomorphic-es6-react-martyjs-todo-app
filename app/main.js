import React from 'react';
import Marty from 'marty';
import Application from './index';
var ApplicationContainer = Marty.ApplicationContainer;

window.React = React; // For React Developer Tools
window.Marty = Marty; // For Marty Developer Tools

var app = new Application();

app.rehydrate();

app.router.run((Handler, state) => {
    React.render((
      <ApplicationContainer app={app}>
        <Handler {...state.params} />
      </ApplicationContainer>
    ), document.getElementById('app'));
});
