import React from 'react';
import ReactDOM from 'react-dom/client';

const user = {
  firstName: 'Matthew',
  lastName: 'McKee',
  avatarUrl: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
};

//These are identical. All three objects are "React elements".
const greeting1 = (<h1 className='greeting'>Hello, world!</h1>);
const greeting2 = React.createElement('h1',{className: 'greeting'},'Hello, world!');
const greeting3 = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};

const avatar = <img src ={user.avatarUrl}/>
const link = <a href='https://www.reactjs.org'>link</a>

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
  if (user) {
    return <div>
      <h1>Hello, {formatName(user)}!</h1>
      <h2>Good to see you here.</h2>
    </div>;
  }
  return <div>
    <h1>Hello, Stranger.</h1>
    <h2>Good to see you here.</h2>
  </div>;
}