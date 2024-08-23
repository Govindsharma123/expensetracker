import React, { createContext, useContext } from "react";
import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgbOyFER8PxEPaM0CXQI7vUnH2eB-LBZI",
  authDomain: "expensetracker-adefe.firebaseapp.com",
  projectId: "expensetracker-adefe",
  databaseURL: "https://expensetracker-adefe-default-rtdb.firebaseio.com",
  storageBucket: "expensetracker-adefe.appspot.com",
  messagingSenderId: "574735401300",
  appId: "1:574735401300:web:83a12cd0ca5d7e5b3a08c1",
  measurementId: "G-V5LHQ40XE5"
};

// Initialize Firebase with error handling
let app;
let db;
let storage;
let auth;
let googleProvider;

try {
  // console.log("Initializing Firebase app...");
  app = initializeApp(firebaseConfig);
  // console.log("Firebase app initialized:", app);

  // console.log("Initializing Firebase Database...");
  db = getDatabase(app);
  // console.log("Firebase Database initialized:", db);

  // console.log("Initializing Firebase Storage...");
  storage = getStorage(app);
  // console.log("Firebase Storage initialized:", storage);

  // console.log("Initializing Firebase Auth...");
  auth = getAuth(app);
  // console.log("Firebase Auth initialized:", auth);

  googleProvider = new GoogleAuthProvider();
  // console.log("Google Auth Provider initialized:", googleProvider);

} catch (error) {
  console.error("Firebase initialization error:", error);
}

// Exporting Firebase services
export { app, db, storage, auth, googleProvider };
