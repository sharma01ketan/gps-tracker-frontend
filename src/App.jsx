import React from 'react';
import LeftPane from './Panes/LeftPane.jsx';
import RightPane from './Panes/RightPane.jsx';
import useRemoveScrollbar from './Hooks/useRemoveScrollBar.jsx';

function App() {

  useRemoveScrollbar();
  
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ width: '50%' }}>
        <LeftPane/>
      </div>
      <div style={{ width: '50%' }}>
        <RightPane />
      </div>
    </div>
  );
}

export default App;
