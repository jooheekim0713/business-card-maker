import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';

const Login = ({ authService }) => {
  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then(console.log);
  };
  return (
    <section>
      <Header />
      <section>
        <h1>Login</h1>
        <ul>
          <li>
            <button onClick={(e) => onLogin(e)}>Google</button>
          </li>
          <li>
            <button onClick={(e) => onLogin(e)}>Github</button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
