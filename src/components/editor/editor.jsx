import React from 'react';
import CardAddForm from '../card_edit_form copy/card_add_form';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';

const Editor = ({ cards, addCard }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>editor</h1>
    <ul>
      {cards.map((card) => (
        <CardEditForm key={card.id} card={card} />
      ))}
      <CardAddForm onAdd={addCard} />
    </ul>
  </section>
);

export default Editor;
