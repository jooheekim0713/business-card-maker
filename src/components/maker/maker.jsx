import React, { useEffect, useState } from 'react';
import styles from './maker.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({ authService }) => {
  const history = useHistory();
  const [cards, setCards] = useState([
    {
      id: '1',
      name: ' joohee',
      company: 'fuck',
      theme: 'dark',
      title: 'softwarre engineer',
      email: 'gmail.com',
      message: 'go for it',
      fileName: 'ellie',
      fileURL: null,
    },
    {
      id: '2',
      name: ' joohee',
      company: 'fuck',
      theme: 'colorful',
      title: 'softwarre engineer',
      email: 'gmail.com',
      message: 'go for it',
      fileName: 'ellie',
      fileURL: null,
    },
    {
      id: '3',
      name: ' joohee',
      company: 'fuck',
      theme: 'light',
      title: 'softwarre engineer',
      email: 'gmail.com',
      message: 'go for it',
      fileName: 'ellie',
      fileURL: 'ellie.png',
    },
  ]);

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push('/');
      }
    });
  });

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
