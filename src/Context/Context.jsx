import { createContext, useContext, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvleU9tw8Umvdo9MpN8pw3jgSfSTLOvgQ",
  authDomain: "signuploginproject-18e24.firebaseapp.com",
  projectId: "signuploginproject-18e24",
  storageBucket: "signuploginproject-18e24.appspot.com",
  messagingSenderId: "98735806768",
  appId: "1:98735806768:web:0cc55345e83d208e9c90f5",
};
const AppContext = createContext();

// Initialize Firebase
const FireBaseApp = initializeApp(firebaseConfig);
const FirebaseAuth = getAuth(FireBaseApp);
const FirebaseDB = getFirestore(FireBaseApp);

export function useAppContext() {
  return useContext(AppContext);
}

export function AppContextProvider({ children }) {
  const [ShowLogOut, setShowLogOut] = useState(false);

  const value = {
    FireBaseApp,
    FirebaseAuth,
    FirebaseDB,
    setShowLogOut,
    ShowLogOut,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
