import { useState } from 'react';
import produce from 'immer';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import Expandable from './components/Expandable';
import { UserContext } from './context/UserContext';
function App() {
  const person = { name: 'Siva', age: 30 };

  return (<UserContext.Provider value={person}>
    <Expandable maxChar={20}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto odit quia quaerat magnam exercitationem ipsum amet eos sed, rem officia, pariatur, expedita molestiae nemo aliquid eaque earum suscipit quos eum.
    </Expandable>
  </UserContext.Provider>)
}

export default App