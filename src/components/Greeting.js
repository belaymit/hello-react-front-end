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
      <h1>Rails Back-end React Front-end App Greetings!</h1>
      <p className=".App-link">{ content }</p>
    </>
  );
}

export default Greeting;