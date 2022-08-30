import React, { memo } from 'react';
import styles from './footer.module.css';

const Footer = memo((props) => (
  <footer className={styles.footer}>
    <p className={styles.title}> Joohee's Business card</p>
  </footer>
));

export default Footer;
