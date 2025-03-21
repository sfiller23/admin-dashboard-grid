import "./App.css";
import Dashboard from "./pages/Dashboard";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxiwSDfWQdv3ymnDnlDlNb_35B7Zj5eEY",
  authDomain: "admin-dashboard-83b97.firebaseapp.com",
  projectId: "admin-dashboard-83b97",
  storageBucket: "admin-dashboard-83b97.firebasestorage.app",
  messagingSenderId: "343670078848",
  appId: "1:343670078848:web:3efb04f0e89cad82bf5565"
};

// Initialize Firebase
initializeApp(firebaseConfig);

function App() {
  return <Dashboard />;
}

export default App;
