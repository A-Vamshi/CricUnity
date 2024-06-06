// import { initializeApp } from "firebase/app";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
// import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
// import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
// import AsyncStorage from "@react-native-async-storage/async-storage";


// const firebaseConfig = {
//   apiKey: "AIzaSyAhzsiz0N11Ch59yfUESU8WRdAqMw7qPpA",
//   authDomain: "cricunity-01.firebaseapp.com",
//   projectId: "cricunity-01",
//   storageBucket: "cricunity-01.appspot.com",
//   messagingSenderId: "308579222463",
//   appId: "1:308579222463:web:c557de01850e5b745b170a",
//   measurementId: "G-LZZVH2EEZ9"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);
// // const auth = initializeAuth(app, {
// //      persistence: getReactNativePersistence(AsyncStorage)
// // });

// export const signup = async (email, password, username) => {
//      try {
//           const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//           if (!userCredential && error) {
//                console.error(error.message);
//                return;
//           }
//           if (userCredential) {
//                console.log(userCredential.user);
//                const data = {
//                     uid: userCredential.user.uid,
//                     username: username,
//                     email: email,
//                     coins: 0,
//                     profileUrl: "",
//                     date: Date.now(),
//                }
//                const userRef = doc(db, "users", userCredential.user.uid);
//                setDoc(userRef, data);
//                await AsyncStorage.setItem('user', JSON.stringify(userCredential));
//           }
//      } catch (error) {
//           console.log(error);
//      }
// }

// export const signin = async (email, password) => {
//      signInWithEmailAndPassword(auth, email, password)
//      .then((userCredential) => {
//           const user = userCredential.user;
//      })
//      .catch((error) => {
//           console.log(error.message);
//      })
// }

// export const signout = async () => {
//      const success = await signOut(auth);
//      if (success) {
//           console.log("Signout successfull");
//      }
// }

// export const getCurrentUser = async () => {
//       try {
//           const currentUser = auth.currentUser// async (user) => {
//           if (currentUser != null) {
//                const uid = currentUser.uid;
//                const docRef = doc(db, "users", uid);
//                const docSnap = await getDoc(docRef);
//                if (docSnap.exists()) {
//                     return docSnap.data();
//                } else {
//                     console.log("No user found!");
//                }
//                return docSnap.data();
//           } else {
//                throw new Error; 
//           }
//       } catch (error) {
//           console.log(error.message);
//       }
// }