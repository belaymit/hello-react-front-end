import React from 'react';
import { useSelector } from 'react-redux';

function Greeting() {
  const greeting = useSelector((state) => state.greeting.message.message);
  const status = useSelector((state) => state.greeting.status);

  let content;
  if (status === 'succeeded') {
    content = greeting;
  }
  if (status === 'loading') {
    content = 'Loading...';
  }

  return (
    <>
      <h1>Greetings Between React-front-end and Rails Back-end</h1>
      <p className="App">{ content }</p>
    </>
  );
}

export default Greeting;
