// import { initializeApp } from "firebase/app"; //"https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration

// import { getDatabase, ref, push } from "firebase/database";
// import { title } from "process";

// const firebaseConfig = {
//   apiKey: "AIzaSyBO6iLdWMAPXT-045rpgOVy9koSa8Mdmyo",
//   authDomain: "js2-slutprojekt-81b80.firebaseapp.com",
//   projectId: "js2-slutprojekt-81b80",
//   storageBucket: "js2-slutprojekt-81b80.appspot.com",
//   databaseURL:
//     "https://js2-slutprojekt-81b80-default-rtdb.europe-west1.firebasedatabase.app",
//   messagingSenderId: "949431055913",
//   appId: "1:949431055913:web:3fd03638ef07f340b9ce38",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getDatabase(app);

// console.log(db);

// loginPage();

// function loginPage() {
//   document.title = "loggin";
//   document.body.innerHTML = ` <form action="">
//     <input id="name" type="text" id="username" />
//     <input id="password" type="password" name="password" id="password" />

//     <input id="button" type="submit" value="loggin" />
//   </form>
//   <button id="register">
//     Create account
//   </button>`;

//   let regButton = document.getElementById("register") as HTMLButtonElement;
//   regButton.addEventListener("click", (e) => {
//     registerPage();
//   });
// }

// function registerPage() {
//   document.title = "register";
//   document.body.innerHTML = ` <div id="div1">
//     <input type="radio" name="pictures" id="pic1" checked /><img
//       src="https://e1.pxfuel.com/desktop-wallpaper/290/278/desktop-wallpaper-walter-white-breaking-bad-%E2%98%86-find-more-funny-and-at-pretty.jpg"
//       alt=""
//     />
//     <input type="radio" name="pictures" id="pic2" /><img
     
//       src="https://e1.pxfuel.com/desktop-wallpaper/271/564/desktop-wallpaper-gustavo-fring.jpg"
//       alt=""
//     />
//     <input type="radio" name="pictures" id="pic3" /><img
//       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZpHE-h7wEQFf2lJopj_SnUvKrJboD_MuBamSzkjEFlEKRB5Ws"
//       alt=""
//     />
//     <div id="div2">
//     <input id="username" type="text" placeholder="username" />
//       <input id="email" type="email" placeholder="email"  />
//       <input id="password" type="password" name="password"  placeholder="password"/>
//     </div>

//     <div id="div3">
//     <input id="register" type="submit" value="register" />
//     </div>
//       <button id="backToLoginBtn" > back </button>
//       <h3 id="warning"></h3>
//       <h3 id="warning2"></h3>
//       <h3 id="warning3"></h3>
//   </div>`;

//   function writeUserData(
//     password: String,
//     name: string,
//     email: string,
//     imageUrl: string
//   ) {
//     push(ref(db, "users/"), {
//       username: name,
//       password: password,
//       email: email,
//       profile_picture: imageUrl,
//     });
//     alert("bööööör");
//   }

//   let backToLoginBtn = document.getElementById("backToLoginBtn");
//   backToLoginBtn?.addEventListener("click", (e) => {
//     loginPage();
//   });

//   let regBtn = document.getElementById("register") as HTMLButtonElement;
//   regBtn.addEventListener("click", (e) => {
//     let password = document.getElementById("password") as HTMLInputElement;
//     let email = document.getElementById("email") as HTMLInputElement;
//     let pic1 = document.getElementById("pic1") as HTMLInputElement;
//     let pic2 = document.getElementById("pic2") as HTMLInputElement;
//     let pic3 = document.getElementById("pic3") as HTMLInputElement;
//     let userName = document.getElementById("username") as HTMLInputElement;
//     let warning=document.getElementById("warning") as HTMLHeadingElement
//     let warning2=document.getElementById("warning2") as HTMLHeadingElement
//     let warning3=document.getElementById("warning2") as HTMLHeadingElement

//     let picChose: string;
//     if (pic1.checked == true) picChose = "pic 1";
//     else if (pic2.checked == true) picChose = "pic 2";
//     else if (pic3.checked == true) picChose = "pic 3";
//     else picChose = "nopic";
// if (password.value=="") warning.innerHTML="fyll i lösenord!"
// else if (email.value=="") warning2.innerHTML="fyll i email!"
// else if (userName.value=="") warning3.innerHTML="fyll i användar namn!"

//    else writeUserData(password.value,email.value, userName.value,picChose);

//   });
// }

