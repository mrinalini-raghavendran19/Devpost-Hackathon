import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/LayoutStyles';

function Header({ onAddNote, addicon, selectedNote, deleteicon, onDelete }) {
  return (
    <div style={styles.headerRow}>
      <h1 style={styles.header}>Entries</h1>

      <div style={styles.iconContainer}>
        <FontAwesomeIcon
          onClick={onAddNote}
          icon={addicon}
          title="Add Note"
          style={styles.icon}
        />
        
        {selectedNote && (
          <FontAwesomeIcon
            onClick={onDelete}
            icon={deleteicon}
            title="Delete Note"
            style={styles.icon}
          />
        )}
      </div>
    </div>
  );
}

export default Header;