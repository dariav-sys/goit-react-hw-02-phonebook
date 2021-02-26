import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactItem.module.css';

const ContactItem = ({ contact: { id, name, number }, onDelete }) => {
  const onHandleDelete = () => {
    onDelete(id);
  };

  return (
    <li className={styles.contact} name={name}>
      <button className={styles.button} type="button" onClick={onHandleDelete}>
        Delete
      </button>
      {name} : {number}
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
