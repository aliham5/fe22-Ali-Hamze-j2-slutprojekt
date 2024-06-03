import { signUp, signIn, deleteUserAccount, logout } from './modules/auth';
import { createProfile, addStatusUpdate, getProfile, getAllProfiles } from './modules/profile';

const dajjalDiv = document.getElementById('dajjal') as HTMLDivElement;

let currentUsername: string | null = null;

//detta gör så att den första sidan som kommer upp alternativ mellan log in och sign up.
function renderInitialScreen() {
  if (!dajjalDiv) return;

  dajjalDiv.innerHTML = `
    <h1>Welcome</h1>
    <button id="showLoginButton">Login</button>
    <button id="showSignUpButton">Sign Up</button>
  `;

  const showLoginButton = document.getElementById('showLoginButton') as HTMLButtonElement;
  const showSignUpButton = document.getElementById('showSignUpButton') as HTMLButtonElement;

  showLoginButton.onclick = () => {
    renderLogin();
  };

  showSignUpButton.onclick = () => {
    renderSignUp();
  };
}

function renderLogin() {
  if (!dajjalDiv) return;

  //sätter upp en HTML för inloggnings sidan
  dajjalDiv.innerHTML = `
    <h1>Login</h1>
    <input type="text" id="username" placeholder="Username">
    <input type="password" id="password" placeholder="Password">
    <button id="loginButton">Login</button>
    <button id="backButton">Back</button>
  `;

  const loginButton = document.getElementById('loginButton') as HTMLButtonElement;
  const backButton = document.getElementById('backButton') as HTMLButtonElement;

  loginButton.onclick = async () => {
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    if (password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }
    await signIn(username, password);
    currentUsername = username;
    renderProfile(username);
  };

  backButton.onclick = () => {
    renderInitialScreen();
  };
}

function renderSignUp() {
  if (!dajjalDiv) return;
//här sätts det upp för sign up
dajjalDiv.innerHTML = `
    <h1>Sign Up</h1>
    <h3>Select a picture</h3>
    <div class="character-selection">
      <input type="radio" id="" name="character" value="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a0a7586b-3d38-4293-9d13-75e10782ff57/dgtdjuz-9633f088-bd64-45aa-b35c-b9ad2ebaab24.png/v1/fit/w_828,h_1128,q_70,strp/walter_white_png_image_by_ongpng_dgtdjuz-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTE3NiIsInBhdGgiOiJcL2ZcL2EwYTc1ODZiLTNkMzgtNDI5My05ZDEzLTc1ZTEwNzgyZmY1N1wvZGd0ZGp1ei05NjMzZjA4OC1iZDY0LTQ1YWEtYjM1Yy1iOWFkMmViYWFiMjQucG5nIiwid2lkdGgiOiI8PTg2NCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.w2oDaHs1OZW6kyjPzI-wHoPs7eZisovT_15XbmZ2Djs" checked>
      <label for="walter"><img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a0a7586b-3d38-4293-9d13-75e10782ff57/dgtdjuz-9633f088-bd64-45aa-b35c-b9ad2ebaab24.png/v1/fit/w_828,h_1128,q_70,strp/walter_white_png_image_by_ongpng_dgtdjuz-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTE3NiIsInBhdGgiOiJcL2ZcL2EwYTc1ODZiLTNkMzgtNDI5My05ZDEzLTc1ZTEwNzgyZmY1N1wvZGd0ZGp1ei05NjMzZjA4OC1iZDY0LTQ1YWEtYjM1Yy1iOWFkMmViYWFiMjQucG5nIiwid2lkdGgiOiI8PTg2NCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.w2oDaHs1OZW6kyjPzI-wHoPs7eZisovT_15XbmZ2Djs" alt="cat-emoji"></label>
      <input type="radio" id="gustavo" name="character" value="https://img1.picmix.com/output/stamp/normal/1/5/1/9/2349151_80ea3.png">
      <label for="gustavo"><img src="https://img1.picmix.com/output/stamp/normal/1/5/1/9/2349151_80ea3.png" alt="dog-emoji"></label>
      <input type="radio" id="hank" name="character" value="https://banner2.cleanpng.com/20180402/aqw/kisspng-dean-norris-breaking-bad-hank-schrader-walter-whit-breaking-bad-5ac225f6c43797.6635745815226731428037.jpgg">
      <label for="hank"><img src="https://banner2.cleanpng.com/20180402/aqw/kisspng-dean-norris-breaking-bad-hank-schrader-walter-whit-breaking-bad-5ac225f6c43797.6635745815226731428037.jpg" alt="goat-emoji"></label>
    </div>
    <input type="text" id="username" placeholder="Username">
    <input type="password" id="password" placeholder="Password">
    <button id="createAccountButton">Create Account</button>
    <button id="backButton">Back</button>
  `;

  const createAccountButton = document.getElementById('createAccountButton') as HTMLButtonElement;
  const backButton = document.getElementById('backButton') as HTMLButtonElement;

  createAccountButton.onclick = async () => {
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    const character = (document.querySelector('input[name="character"]:checked') as HTMLInputElement).value;
    if (password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }
    await signUp(username, password);
    await createProfile(username, character);
    currentUsername = username;
    renderProfile(username);
  };

  backButton.onclick = () => {
    renderInitialScreen();
  };
}

async function renderProfile(username: string) {
  if (!dajjalDiv) return;

  const profile = await getProfile(username);
  if (!profile) {
    alert("Profile not found");
    renderLogin();
    return;
  }

  const isOwner = currentUsername === username;
  const statusUpdates = profile.statusUpdates || [];

  dajjalDiv.innerHTML = `
    <h1>${profile.username}'s Profile</h1>
    <img src="${profile.image}" alt="Profile Image" width="100">
    <div>
      <h2>Status Updates</h2>
      <ul id="statusUpdates">
        ${statusUpdates.map((status: string) => `<li>${status}</li>`).join('')}
      </ul>
      ${isOwner ? `
      <input type="text" id="newStatus" placeholder="New Status">
      <button id="addStatusButton">Add Status</button>
      <button id="deleteAccountButton">Delete Account</button>
      <button id="logoutButton">Logout</button>
      ` : ''}
    </div>
    <button id="backToUserListButton">Back to User List</button>
  `;

  if (isOwner) {
    const addStatusButton = document.getElementById('addStatusButton') as HTMLButtonElement;
    const deleteAccountButton = document.getElementById('deleteAccountButton') as HTMLButtonElement;
    const logoutButton = document.getElementById('logoutButton') as HTMLButtonElement;

    addStatusButton.onclick = async () => {
      const newStatus = (document.getElementById('newStatus') as HTMLInputElement).value;
      await addStatusUpdate(username, newStatus);
      renderProfile(username);
    };

    deleteAccountButton.onclick = async () => {
      const password = prompt("Please enter your password to confirm deletion:");
      if (password) {
        await deleteUserAccount(username, password);
        currentUsername = null;
        renderLogin();
      }
    };

    logoutButton.onclick = async () => {
      await logout();
      currentUsername = null;
      renderLogin();
    };
  }

  const backToUserListButton = document.getElementById('backToUserListButton') as HTMLButtonElement;
  backToUserListButton.onclick = () => {
    renderUserList();
  };
}

async function renderUserList() {
  if (!dajjalDiv) return;

  const profiles = await getAllProfiles();
  const profileEntries = Object.entries(profiles);

  dajjalDiv.innerHTML = `
    <h1>User List</h1>
    <ul id="userList">
      ${profileEntries.map(([username, profile]) => `
        <li>
          <a href="#" data-username="${username}">${username}</a>
        </li>
      `).join('')}
    </ul>
  `;

  document.querySelectorAll('#userList a').forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const username = (event.target as HTMLElement).getAttribute('data-username');
      if (username) {
        renderProfile(username);
      }
    });
  });
}

renderInitialScreen();
