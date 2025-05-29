import React, { useRef, useEffect } from 'react';
import styles from '../styles/LayoutStyles';
import { Slate, Editable, withReact } from 'slate-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';


function NoteEditor({ newTitle, newNote, setNewTitle, setNewNote, saveNote, selectedNote }) {

    // const lastUpdatedNew = new Date(selectedNote.lastUpdated);
    // const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit' };
    // const date = lastUpdatedNew.toLocaleString('us-en', options);

    let date = '';
    
    if (selectedNote?.lastUpdated) {
        const lastUpdatedNew = new Date(selectedNote.lastUpdated);
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit' };
        date = lastUpdatedNew.toLocaleString('en-US', options);
    }

    const handleTitleChange = (e) => {
        setNewTitle(e.target.value);
    };

    const handleChangeNote = (e) => {
        setNewNote(e.target.value);
    };
    
    



    //console.log("cgfddgfdd",selectedNote);
    return (
        <div style={{ maxHeight: '100%', overflowY: 'auto', width: '100%' }}>
            <div style={styles.inputSection}>
                <input
                    type="text"
                    placeholder="Title"
                    value={newTitle}
                    onChange={handleTitleChange}
                    style={styles.titleInput}
                />
                <div style={styles.textareaWrapper}>
                <textarea
                    placeholder="Write your text here..."
                    value={newNote}
                    onChange={handleChangeNote}
                    style={styles.textarea}
                />
                {/* <button onClick={saveNote} style={styles.saveButton}>
                    {selectedNote ? 'Update' : 'Save'}
                </button> */}

                <FontAwesomeIcon icon={faCircleCheck} onClick={saveNote} style={styles.tickIcon} />
                {selectedNote && (
                    <div style={{
                        marginBottom: '10px',
                        fontStyle: 'italic',
                        color: 'gray',
                        textAlign: 'right',
                        fontSize: '14px'
                    }}>
                        <br/>
                        <div>Last updated: {date}</div>
                    </div>
                )}
            </div>
            </div>

        </div>
    );
}

export default NoteEditor;
