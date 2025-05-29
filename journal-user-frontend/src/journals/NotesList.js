import { useState } from 'react';
import React from 'react';
import styles from '../styles/LayoutStyles';

function NotesList({ notes, openNotes, deleteANote }) {

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const sortedNotes = [...notes].sort((a, b) =>
        new Date(b.lastUpdated || b.createdDate) - new Date(a.lastUpdated || a.createdDate)
    );

    return (
        <div style={styles.sidebar}>
            <ul style={styles.notesList}>
                {sortedNotes.map((note, index) => (
                    //   <li key={index} style={styles.noteItem} onClick={() => openNotes(note)}>
                    <li
                        key={index}
                        style={{
                            ...styles.noteItem,
                            ...(hoveredIndex === index ? styles.noteItemHover : {})
                          }}
                          onClick={() => openNotes(note)}
                          onMouseEnter={() => setHoveredIndex(index)}
                          onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <strong>{note.title}</strong>
                        
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NotesList;