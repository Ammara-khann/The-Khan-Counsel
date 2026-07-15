// ==============================================================
// FIREBASE CONFIGURATION
// ==============================================================
// 1. Go to https://console.firebase.google.com
// 2. Create a project (or use an existing one)
// 3. Inside the project, go to Project Settings > General
//    > "Your apps" > click the "</>" (Web) icon to register a web app
// 4. Firebase will show you a config object exactly like the one
//    below — copy YOUR values and paste them here.
// 5. Also go to "Build > Firestore Database" in the left sidebar
//    and click "Create Database" (start in production mode).
// ==============================================================

import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: 'AIzaSyD-_JXs4890tcXbNlI_R1wgh0GB-l1QdoI',
  authDomain: 'the-khan-counsel.firebaseapp.com',
  projectId: 'the-khan-counsel',
  storageBucket: 'the-khan-counsel.firebasestorage.app',
  messagingSenderId: '894702020313',
  appId: '1:894702020313:web:714d106a48113f1b68c0c8',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);