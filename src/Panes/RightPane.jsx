import React, { useState } from 'react';
import SimpleBottomNavigation from '../NavBars/BottomNavigation.jsx';
import One from '../Panes/One';
import Two from '../Panes/Two';
import Three from '../Panes/Three';

const RightPane = () => {
  const [selectedPane, setSelectedPane] = useState(0);

  const handleNavigationChange = (newValue) => {
    setSelectedPane(newValue);
  };

  return (
    <div style={{ backgroundColor: 'cyan' }}>
      <SimpleBottomNavigation onChange={handleNavigationChange} />
      {selectedPane === 0 && <One />}
      {selectedPane === 1 && <Two />}
      {selectedPane === 2 && <Three />}
      My Right Pane
    </div>
  );
};

export default RightPane;
