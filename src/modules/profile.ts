import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  set,
  get,
  child,
  update,
  remove,
} from "firebase/database";
import { firebaseConfig } from "../firebasConfig";

//initilize:s firebase appen här med
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

//en funktion för att skapa användarprofil
export async function createProfile(username: string, image: string) {
  try {
    //sätter datan i realtime database (firebase sidan)
    await set(ref(db, "users/" + username), {
      username: username,
      image: image,
      statusUpdates: [],
    });
    console.log("Profile created");
  } catch (error) {
    console.error("Error creating profile:", error);
  }
}

//för att kunna lägga till inlägg/uppdateringar
export async function addStatusUpdate(username: string, status: string) {
  try {
    const userRef = ref(db, "users/" + username + "/statusUpdates");
    const statusUpdatesSnapshot = await get(userRef);
    const statusUpdates = statusUpdatesSnapshot.exists()
      ? statusUpdatesSnapshot.val()
      : [];
    statusUpdates.push(status);
    await set(userRef, statusUpdates);
    console.log("Status update added");
  } catch (error) {
    console.error("Error adding status update:", error);
  }
}

//för o hämta en användarprofil
export async function getProfile(username: string) {
  try {
    const userRef = ref(db, "users/" + username);
    const snapshot = await get(userRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("No profile found");
      return null;
    }
  } catch (error) {
    console.error("Error fetching profile:", error);
  }
}

//denna gör så att man hämtar ALLA profiler
export async function getAllProfiles() {
  try {
    const usersRef = ref(db, "users");
    const snapshot = await get(usersRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("No users found");
      return {};
    }
  } catch (error) {
    console.error("Error fetching profiles:", error);
  }
}
