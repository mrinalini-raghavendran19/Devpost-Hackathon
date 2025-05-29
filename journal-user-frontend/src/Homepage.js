import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faPenFancy } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div style={styles.container}>
      <FontAwesomeIcon icon={faBook} style={styles.bookIcon} />

      <h1 style={styles.title}>Welcome to JournalApp</h1>

      <p style={styles.subtitle}>Write and Reflect</p>

      <div style={styles.link}>
        <div style={styles.penSection}>
          <div style={styles.animationContainer}>
            <span className="squiggly-text">~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~</span>
            <FontAwesomeIcon icon={faPenFancy} className="moving-pen" />
          </div>
        </div>
      </div>

      <div style={styles.buttonSection}>
        <Link to="/login" style={styles.button}>
          Login
        </Link>
        <Link to="/signup" style={styles.button}>
          Sign Up
        </Link>
      </div>

      <style>
        {`
          .animationContainer {
            position: relative;
            display: inline-block;
            height: 40px;
            margin-top: 30px;
          }

          .squiggly-text {
            font-size: 28px;
            font-family: 'Courier New', Courier, monospace;
            color: #666;
            animation: fadein 4s ease-in-out;
          }

          .moving-pen {
            position: absolute;
            top: -5px;
            left: 0;
            font-size: 24px;
            color: #333;
            transform: rotate(-20deg);
            animation: movePen 4s ease-in-out forwards;
          }

          @keyframes movePen {
            0% { left: 0%; opacity: 1; }
            100% { left: 100%; opacity: 0; }
          }

          @keyframes fadein {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "80px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#333",
    lineHeight: 1.6
  },
  bookIcon: {
    fontSize: "120px",
    marginBottom: "40px"
  },
  title: {
    fontSize: "36px",
    marginBottom: "20px"
  },
  subtitle: {
    fontSize: "20px",
    color: "#666",
    marginBottom: "40px"
  },
  penSection: {
    display: "flex",
    justifyContent: "center",
    marginTop: "30px"
  },
  animationContainer: {
    position: "relative"
  },
  link: {
    textDecoration: "none"
  },
  buttonSection: {
    marginTop: "40px",
    display: "flex",
    justifyContent: "center",
    gap: "20px"
  },
  button: {
    textDecoration: "none",
    backgroundColor: "black",
    color: "white",
    padding: "12px 24px",
    borderRadius: "5px",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
    display: "inline-block"
  }
};
