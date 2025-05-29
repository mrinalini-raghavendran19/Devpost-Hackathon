// import React, { useEffect, useState } from "react";
// import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
// import Header from './journals/NotesHeader';
// import NotesList from './journals/NotesList';
// import NoteEditor from './journals/NoteEditor';
// import styles from './styles/LayoutStyles';
// import axios from "axios";

// function Layout() {
//     const [notes, setNotes] = useState([]);
//     const [addNew, setAddNew] = useState(false);
//     const [newNote, setNewNote] = useState('');
//     const [newTitle, setNewTitle] = useState('');
//     const [selectedNote, setSelectedNote] = useState(null);
//     // const [isDirty, setIsDirty] = useState(false);
//     const user = JSON.parse(localStorage.getItem('user'));

//     // useEffect(() => {

//     //     const getNotesForUser = async () =>{
//     //         console.log("hiiiii");
//     //         try {

//     //             const res = await axios.get(`http://localhost:8080/${user.userName}/journals`);
//     //             setNotes(getNotesForUser); 

//     //         }
//     //         catch(err){
//     //             console.log("hi it failed",err);
//     //         }
//     //     }
//     // }, [user])

//     useEffect(() => {
//         const getNotesForUser = async () => {
//             //console.log(user);
//             try {
//                 const res = await axios.get(`http://localhost:8080/${user.userName}/journals`, {
//                     headers: {
//                         Authorization: localStorage.getItem("token")
//                     }
//                 });
//                 setNotes(res.data);
//                 //console.log(res.data);
//             } catch (err) {
//                 console.log("hi it failed", err);
//             }
//         };

//         if (user?.userName) {
//             getNotesForUser();
//         }
//     }, [user]);

//     // useEffect(() => {
//     //     if (!addNew || !isDirty) return;

//     // const timer = setTimeout(() => {
//     //     if (newTitle.trim() || newNote.trim()) {
//     //         saveNote();         
//     //         setIsDirty(false);  
//     //     }
//     // }, 1500);
//     // },[newTitle, newNote, isDirty])

//     const addANote =  async () => {
//         setAddNew(true);
//         resetNotes();

//         // const now = new Date();
//         // const timestamp = now.toISOString();

//         // const newNoteObj = {
//         //     title: '',
//         //     content: '',
//         //     created: timestamp,
//         //     lastUpdated: timestamp,
//         // };

//         // try {
//         //     const res = await axios.post(`http://localhost:8080/${user.userName}/journals`, newNoteObj, {
//         //         headers: {
//         //             Authorization: localStorage.getItem("token")
//         //         }
//         //     });

//         //     const createdNote = res.data;

//         //     setSelectedNote(createdNote);
//         //     setNewTitle('');
//         //     setNewNote('');
//         //     setNotes([...notes, createdNote]);
//         //     setAddNew(true);
//         // } catch (err) {
//         //     console.error("Error while creating new note:", err);

//         // };

//     }

//         const resetNotes = () => {
//             setSelectedNote(null);
//             setNewNote('');
//             setNewTitle('');
//             setAddNew(true);
//         }



//         // const saveNote = async () => {
//         //     if (!selectedNote) return;

//         //     const timestamp = new Date().toISOString();

//         //     const updatedNote = {
//         //         ...selectedNote,
//         //         title: newTitle,
//         //         content: newNote,
//         //         lastUpdated: timestamp,
//         //     };

//         //     try {
//         //         await axios.put(`http://localhost:8080/${user.userName}/journals/${selectedNote.journalId}`, updatedNote, {
//         //             headers: {
//         //                 Authorization: localStorage.getItem("token")
//         //             }
//         //         });

//         //         // setNotes(notes.map(note =>
//         //         //     note.journalId === selectedNote.journalId ? updatedNote : note
//         //         // ));

//         //         setNotes(prevNotes =>
//         //             prevNotes.map(note =>
//         //                 note.journalId === updatedNote.journalId ? updatedNote : note
//         //             )
//         //         );
//         //     } catch (err) {
//         //         console.error("Autosave failed:", err);
//         //     }
//         // };

//         const saveNote = async () => {
//             if (newTitle.trim() || newNote.trim()) {
//                 // const timestamp = new Date();
//                 // timestamp = timestamp.toISOString();
//                 // const now = timestamp.toLocaleString();
//                 const lol = new Date();
//                 const timestamp = lol.toISOString();
//                 const now = lol.toLocaleString();

//                 const newNoteObj = {
//                     title: newTitle,
//                     content: newNote,
//                     created: timestamp,
//                     lastUpdated: timestamp
//                 };

//                 try {
//                     if (selectedNote) {
//                         const updatedNote = {
//                             ...selectedNote,
//                             title: newTitle,
//                             content: newNote,
//                             lastUpdated: timestamp,
//                         };

//                         await axios.put(`http://localhost:8080/${user.userName}/journals/${selectedNote.journalId}`, updatedNote);
//                         setNotes(notes.map(note => note.journalId === selectedNote.journalId ? updatedNote : note));

//                     }
//                     else {
//                         const res = await axios.post(`http://localhost:8080/${user.userName}/journals`, newNoteObj);
//                         setNotes([...notes, res.data]);
//                     }
//                     //console.log("mommumumu",selectedNote);
//                     resetNotes();
//                 }
//                 catch (err) {
//                     console.log("failed error");
//                 }


//                 // const updatedNotes = selectedNote
//                 //     ? notes.map((note) => (note === selectedNote ? {
//                 //         ...note, 
//                 //          title: newTitle, content: newNote, lastUpdated: now } : note))
//                 //     : [...notes, { title: newTitle, content: newNote, created: now, lastUpdated: now }];
//                 // setNotes(updatedNotes);
//                 // resetNotes();
//             }
//         };

//         const openNotes = (note) => {
//             setSelectedNote(note);
//             setNewTitle(note.title);
//             setNewNote(note.content);
//             setAddNew(true);
//         };

//         const deleteANote = async (note, idx) => {
//             await axios.delete(`http://localhost:8080/${user.userName}/journals/${note.journalId}`);
//             setNotes(notes.filter((_, i) => i !== idx));
//             resetNotes();
//         };

//         return (

//             <div style={styles.container}>
//                 <Header onAddNote={addANote} icon={faPenToSquare} />

//                 <div style={styles.mainLayout}>
//                     <NotesList notes={notes} openNotes={openNotes} deleteANote={deleteANote} />
//                     <div style={styles.content}>
//                         {addNew && (
//                             <NoteEditor
//                                 newTitle={newTitle}
//                                 newNote={newNote}
//                                 setNewTitle={setNewTitle}
//                                 setNewNote={setNewNote}
//                                 saveNote={saveNote}
//                                 selectedNote={selectedNote}
//                             />
//                         )}
//                     </div>
//                 </div>
//             </div>

//         );
//     }

//     export default Layout;

import React, { useEffect, useState } from "react";
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import Header from './journals/NotesHeader';
import NotesList from './journals/NotesList';
import NoteEditor from './journals/NoteEditor';
import styles from './styles/LayoutStyles';
import axios from "axios";


function Layout() {
    const [notes, setNotes] = useState([]);
    const [addNew, setAddNew] = useState(false);
    const [newNote, setNewNote] = useState('');
    const [newTitle, setNewTitle] = useState('');
    const [selectedNote, setSelectedNote] = useState(null);
    const user = JSON.parse(localStorage.getItem('user'));
    const [theme, setTheme] = useState('light');


    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.body.className = newTheme;
    };

    useEffect(() => {
        const getNotesForUser = async () => {
            try {
                const res = await axios.get(`http://localhost:8080/${user.userName}/journals`, {
                    headers: {
                        Authorization: localStorage.getItem("token")
                    }
                });
                setNotes(res.data);
            } catch (err) {
                console.error("Failed to fetch notes:", err);
            }
        };

        if (user?.userName) {
            getNotesForUser();
        }
    }, [user]);

    const addANote = () => {
        setAddNew(true);
        resetNotes();
    };

    const resetNotes = () => {
        setSelectedNote(null);
        setNewNote('');
        setNewTitle('');
        setAddNew(true);
    };

    const saveNote = async () => {
        if (newTitle.trim() || newNote.trim()) {
            const timestamp = new Date().toISOString();

            const notePayload = {
                title: newTitle,
                content: newNote,
                lastUpdated: timestamp,
            };

            try {
                if (selectedNote) {
                    const updatedNote = {
                        ...selectedNote,
                        ...notePayload
                    };
                    await axios.put(`http://localhost:8080/${user.userName}/journals/${selectedNote.journalId}`, updatedNote);
                    setNotes(notes.map(note =>
                        note.journalId === selectedNote.journalId ? updatedNote : note
                    ));
                } else {
                    const newNoteObj = {
                        ...notePayload,
                        created: timestamp
                    };
                    const res = await axios.post(`http://localhost:8080/${user.userName}/journals`, newNoteObj);
                    setNotes([...notes, res.data]);
                }
                resetNotes();
            } catch (err) {
                console.error("Failed to save note:", err);
            }
        }
    };

    const openNotes = (note) => {
        setSelectedNote(note);
        setNewTitle(note.title);
        setNewNote(note.content);
        setAddNew(true);
    };

    const deleteANote = async (note, idx) => {
        try {
            await axios.delete(`http://localhost:8080/${user.userName}/journals/${note.journalId}`);
            setNotes(notes.filter((_, i) => i !== idx));
            resetNotes();
        } catch (err) {
            console.error("Failed to delete note:", err);
        }
    };

    return (

        <div style={styles.container}>
            
                <Header onAddNote={addANote} addicon={faPenToSquare} selectedNote={selectedNote} deleteicon={faTrash} onDelete={() => deleteANote(selectedNote)} />


                <div style={styles.mainLayout}>
                    <NotesList notes={notes} openNotes={openNotes} deleteANote={deleteANote} />
                    <div style={styles.content}>
                        {addNew && (
                            <NoteEditor
                                newTitle={newTitle}
                                newNote={newNote}
                                setNewTitle={setNewTitle}
                                setNewNote={setNewNote}
                                saveNote={saveNote}
                                selectedNote={selectedNote}
                               
                            />
                        )}
                    </div>
                </div>
            </div>
    );
}

export default Layout;
