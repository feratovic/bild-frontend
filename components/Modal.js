import {useContext} from 'react';

import {PublicContext} from '../context';

import styles from '../styles/Modal.module.css';

export default function Modal({link}) {
  const {toggleModal} = useContext(PublicContext);

  return (
    <div id={styles.modal}>
      <div id={styles.content}>
        <button onClick={(e) => toggleModal(false)}>X</button>
        {link ? <iframe src={link} /> : <p>Video Not Found!</p>}
      </div>
    </div>
  );
}
