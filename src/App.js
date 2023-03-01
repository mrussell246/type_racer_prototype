import logo from './logo.svg';
import './App.css';
import BasicUsage from './Modal';
import Board from './TypeRacer';

import {useLayoutEffect, useRef, useState} from 'react';

export default function App() {
  const ref = useRef(null);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    setWidth(ref.current.clientWidth);
    setHeight(ref.current.clientHeight);
  }, []);

  return (
    <div ref={ref}>
      <div class="Race-window">
        <Board w={width} />
      </div>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <Board/>
//     </div>
//   );
// }
//
// export default App;
