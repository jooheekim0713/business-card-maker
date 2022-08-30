import React, { useEffect, useState } from 'react';
import styles from './maker.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({ FileInput, authService }) => {
  const history = useHistory();
  const [cards, setCards] = useState({
    1: {
      id: '1',
      name: ' joohee',
      company: 'starbucks',
      theme: 'dark',
      title: 'software engineer',
      email: 'gmail.com',
      message: 'go for it',
      fileName: 'ellie',
      fileURL: null,
    },
    2: {
      id: '2',
      name: ' joohee',
      company: 'starbucks',
      theme: 'colorful',
      title: 'software engineer',
      email: 'gmail.com',
      message: 'go for it',
      fileName: 'ellie',
      fileURL: null,
    },
    3: {
      id: '3',
      name: ' joohee',
      company: 'starbucks',
      theme: 'light',
      title: 'software engineer',
      email: 'gmail.com',
      message: 'go for it',
      fileName: 'ellie',
      fileURL: 'ellie.png',
    },
  });

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

  const createOrUpdate = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };
  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdate}
          updateCard={createOrUpdate}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
