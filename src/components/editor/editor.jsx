import React from 'react';
import CardAddForm from '../card_edit_form copy/card_add_form';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';

const Editor = ({ FileInput, cards, addCard, updateCard, deleteCard }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>editor</h1>
    <ul>
      {Object.keys(cards).map((key) => (
        <CardEditForm
          key={key}
          FileInput={FileInput}
          card={cards[key]}
          updateCard={updateCard}
          deleteCard={deleteCard}
        />
      ))}
      <CardAddForm FileInput={FileInput} onAdd={addCard} />
    </ul>
  </section>
);

export default Editor;
