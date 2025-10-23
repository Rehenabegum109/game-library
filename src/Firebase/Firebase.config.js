import { initializeApp, } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyCYzqz18anc9oP8tr7gPHrwxZfvAwlKnOE",
//   authDomain: "a-game-library-2f051.firebaseapp.com",
//   projectId: "a-game-library-2f051",
//   storageBucket: "a-game-library-2f051.firebasestorage.app",
//   messagingSenderId: "427092386739",
//   appId: "1:427092386739:web:4463a92e6bd5ed31e261c6"
// };
const firebaseConfig = {
  apiKey: "AIzaSyCuYdFCvO_3703slPzBj6Ptqhr92H_XXFc",
  authDomain: "dragon-news-router-5d373.firebaseapp.com",
  projectId: "dragon-news-router-5d373",
  storageBucket: "dragon-news-router-5d373.firebasestorage.app",
  messagingSenderId: "566218829681",
  appId: "1:566218829681:web:130ba060f20ecdb30b90d0"
};

// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);


