// import backgroundImage from '../images/signup-background.jpg';
// const styles = {

//   //   layoutBackground: {
//   //     backgroundImage: 'url("/Users/mrinaliniraghavendran/journal-user-frontend/src/images/signup-background.jpg")',
//   //     backgroundSize: 'cover',
//   //     backgroundPosition: 'center',
//   //     height: '100vh',
//   //     width: '100vw',
//   //     display: 'flex',
//   //     justifyContent: 'center',
//   //     alignItems: 'center'
//   // },

//   container: {
//     // maxWidth: '1400px',
//     // margin: '20px auto',
//     // padding: '20px',
//     // border: '1px solid lightgray',
//     // borderRadius: '8px',
//     // backgroundColor: '#f9f9f9'
//     maxWidth: '1400px',
//     margin: '20px auto',
//     padding: '20px',
//     border: '1px solid lightgray',
//     borderRadius: '8px',
//     backgroundColor: '#f9f9f9',
//     backgroundImage: `url(${backgroundImage})`,
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//   },
//   header: {
//     textAlign: 'left'
//   },
//   headerRow: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: '20px'
//   },

//   inputSection: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '10px',
//     alignItems: 'flex-start',
//     width: '100%',
//     marginBottom: '20px',
//     maxHeight: '100%', // instead of height: '100%'
//     overflowY: 'auto',

//   },
//   // inputSection: {
//   //   display: 'flex',
//   //   flexDirection: 'column',
//   //   height: '100%',
//   //   gap: '10px',
//   //   alignItems: 'flex-start',
//   //   width: '100%',
//   //   marginBottom: '20px',
//   //   // padding: '20px',
//   //   // border: '1px solid #ccc',
//   //   // borderRadius: '8px',
//   //   // backgroundColor: '#fff',
//   //   // boxSizing: 'border-box',
//   // },
//   titleInput: {
//     padding: '10px',
//     border: 'none',
//     outline: 'none',
//     width: '100%',
//     fontSize: '18px',
//   },

//   textarea: {
//     padding: '10px',
//     border: 'none',
//     outline: 'none',
//     width: '100%',
//     minHeight: '150px',
//     maxHeight: '400px',
//     fontSize: '16px',
//     resize: 'none',
//     overflowY: 'auto',
//   },

//   // textarea: {
//   //   padding: '10px',
//   //   border: 'none',
//   //   outline: 'none',
//   //   width: '100%',
//   //   height: '200px',
//   //   fontSize: '16px',
//   //   resize: 'vertical',
//   //   height: '200px',
//   // },
//   button: {
//     padding: '8px 12px',
//     backgroundColor: '#007bff',
//     color: 'white',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//   },
//   notesList: {
//     listStyle: 'none',
//     padding: 0,
//     background: 'rgba(0,0,0,0)',
//     backdropFilter: 'blur(10px)',
//     borderRadius: '12px',
//     boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
//   },
//   // noteItem: {
//   //     backgroundColor: '#fdfdfd',
//   //     border: '1px solid #ddd',
//   //     borderRadius: '8px',
//   //     padding: '16px',
//   //     marginBottom: '12px',
//   //     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
//   //     cursor: 'pointer',
//   //     transition: 'transform 0.2s ease, box-shadow 0.2s ease',
//   //   },
//   noteItem: {
//     backgroundColor: '#fffff',
//     border: '1px solid #ddd',
//     borderRadius: '10px',
//     padding: '16px',
//     marginBottom: '12px',
//     boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
//     cursor: 'pointer',
//     transition: 'transform 0.2s ease, box-shadow 0.3s ease',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backdropFilter: 'blur(10px)',
//     borderRadius: '12px',
//     boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
//   },

//   noteItemHover: {
//     transform: 'translateY(-4px)',
//     boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
//   },
//   // noteItem: {
//   //   display: 'flex',
//   //   justifyContent: 'space-between',
//   //   padding: '8px',
//   //   borderBottom: '1px solid #ddd'
//   // },
//   deleteButton: {
//     backgroundColor: 'transparent',
//     color: 'black',
//     border: 'none',
//     fontSize: '18px',
//     fontWeight: 'bold',
//     cursor: 'pointer',
//     marginLeft: '10px'
//   },
//   mainLayout: {
//     display: 'flex',
//     gap: '20px',
//     marginTop: '20px',
//     flex: 1, // Let it grow
//     minHeight: '0', // Important in flex children for scroll to work
//     overflow: 'hidden',
//   },

//   sidebar: {
//     width: '30%',
//     backgroundColor: '#eef1f5',
//     padding: '10px',
//     borderRadius: '8px',
//     height: '100%'
//   },
//   content: {
//     flex: 1,
//     padding: '10px',
//     backgroundColor: '#ffffff',
//     borderRadius: '8px',
//     boxShadow: '0 0 10px rgba(0, 0, 0, 0.05)',
//     overflowY: 'auto',
//     padding: '20px',
//     maxHeight: '100%',
//     boxSizing: 'border-box',
//   },
//   saveButton: {
//     marginTop: 'auto',
//     alignSelf: 'flex-end',
//     backgroundColor: 'black',
//     padding: '10px 20px',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//   },
// };

// export default styles;


import { before } from 'slate';
import backgroundImage from '../images/signup-background.jpg';

const styles = {
  // === Layout ===
  container: {
    maxWidth: '1400px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid lightgray',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    backgroundImage: `linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  containerBefore: {

  },

  mainLayout: {
    display: 'flex',
    gap: '20px',
    marginTop: '20px',
    flex: 1,
    minHeight: '0',
    overflow: 'hidden',
  },

  // === Header ===
  header: {
    textAlign: 'left',
  },
  headerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },

  // === Sidebar & Content ===
  sidebar: {
    width: '28%',                   // slightly narrower for better layout balance
    backgroundColor: 'white',    // lighter, fresher background
    padding: '20px',               // more padding for breathing space
    borderRadius: '12px',          // smoother rounded corners
    height: '100%',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // subtle shadow for depth
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#333',                 // dark but soft text color
    overflowY: 'auto',             // scroll if content overflows vertically
  },
  // content: {
  //   flex: 1,
  //   padding: '20px',
  //   backgroundColor: '#ffffff',
  //   borderRadius: '8px',
  //   boxShadow: '0 0 10px rgba(0, 0, 0, 0.05)',
  //   overflowY: 'auto',
  //   maxHeight: '100%',
  //   boxSizing: 'border-box',
  // },

  content: {
    flex: 1,
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.05)',
    overflowY: 'auto',
    height: '100%',             // ← explicitly allow height
    boxSizing: 'border-box',
  },


  // === Input Section ===
  // inputSection: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   gap: '10px',
  //   alignItems: 'flex-start',
  //   width: '100%',
  //   marginBottom: '20px',
  //   maxHeight: '100%',
  //   overflowY: 'auto',
  // },

  inputSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: '20px',
    flexGrow: 1,               // ← allow it to grow
    overflowY: 'auto',
  },

  titleInput: {
    padding: '10px',
    border: 'none',
    outline: 'none',
    width: '100%',
    fontSize: '18px',
  },
  textareaWrapper: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  // textarea: {
  //   padding: '10px',
  //   border: 'none',
  //   outline: 'none',
  //   width: '100%',
  //   minHeight: '150px',
  //   maxHeight: '400px',
  //   fontSize: '16px',
  //   resize: 'none',
  //   overflowY: 'auto',
  // },

  textarea: {
    padding: '10px',
    border: 'none',
    outline: 'none',
    width: '100%',
    minHeight: '250px',  // ← increase this
    maxHeight: '600px',  // optional
    fontSize: '16px',
    resize: 'none',  // ← let user resize if needed
    overflowY: 'auto',
  },


  // === Buttons ===
  button: {
    padding: '8px 12px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  saveButton: {
    marginTop: 'auto',
    alignSelf: 'flex-end',
    backgroundColor: 'black',
    padding: '10px 20px',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  deleteButton: {
    backgroundColor: 'transparent',
    color: 'black',
    border: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginLeft: '10px',
  },

  // === Notes List ===
  notesList: {
    listStyle: 'none',
    padding: 0,
    background: 'rgba(0,0,0,0)',
    backdropFilter: 'blur(10px)',
    borderRadius: '12px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Questrial, sans-serif'
  },

  noteItem: {
    backgroundColor: '#ffffff',
    color: 'black',
    border: '1px solid #ddd',
    borderRadius: '12px',
    padding: '16px',
    marginBottom: '12px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    transition: 'transform 0.2s ease, box-shadow 0.3s ease',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backdropFilter: 'blur(10px)',
    fontWeight: '500',
    fontSize: '16px',
    letterSpacing: '0.5px',
  },
  noteItemHover: {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
  },

  iconContainer: {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
  },

  icon: {
    cursor: 'pointer',
    fontSize: '24px',
    color: 'black',
  },

  // tickIcon: {
  //   position: 'fixed',
  //   alignItems: 'right',
  //   bottom: '200px',
  //   right: '100px',
  //   fontSize: '30px',
  //   color: 'green',
  //   cursor: 'pointer'
  // },
  tickIcon: {
    fontSize: '28px',
    color: 'green',
    cursor: 'pointer',
    marginTop: '10px',
    marginLeft: 'auto' // ✅ Pushes it to the right
  }




};

export default styles;
