// this is an uncontrolled component example in React its uncontrolled because the input value is not managed by React state, instead it uses a ref to access the DOM element directly.

import { useRef } from 'react';

function App() {
  const inputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    const value = inputRef.current.value;
    console.log(value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" placeholder="Enter Text" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
