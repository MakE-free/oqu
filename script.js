// ===== Работа с пользователями (localStorage) =====

function getUsers() {
  return JSON.parse(localStorage.getItem('users') || '{}');
}

function saveUsers(users) {
  localStorage.setItem('users', JSON.stringify(users));
}

function openAuthModal() {
  document.getElementById('authModal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('authModal').classList.add('hidden');
  document.getElementById('loginError').textContent = '';
  document.getElementById('registerError').textContent = '';
}

function openProfileModal() {
  document.getElementById('profileModal').classList.remove('hidden');
}

function closeProfileModal() {
  document.getElementById('profileModal').classList.add('hidden');
}

function switchTab(tab) {
  document.getElementById('loginForm').classList.toggle('hidden', tab !== 'login');
  document.getElementById('registerForm').classList.toggle('hidden', tab !== 'register');
  document.getElementById('tabLogin').classList.toggle('active', tab === 'login');
  document.getElementById('tabRegister').classList.toggle('active', tab === 'register');
}

function registerUser(e) {
  e.preventDefault();
  const nick = document.getElementById('regNick').value.trim();
  const email = document.getElementById('regEmail').value.trim().toLowerCase();
  const password = document.getElementById('regPassword').value;

  const users = getUsers();
  if (users[email]) {
    document.getElementById('registerError').textContent = 'Пользователь с такой почтой уже существует';
    return false;
  }

  users[email] = { nick, email, password };
  saveUsers(users);
  localStorage.setItem('currentUser', email);

  closeModal();
  updateAuthButton();
  return false;
}

function loginUser(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim().toLowerCase();
  const password = document.getElementById('loginPassword').value;

  const users = getUsers();
  if (!users[email] || users[email].password !== password) {
    document.getElementById('loginError').textContent = 'Неверная почта или пароль';
    return false;
  }

  localStorage.setItem('currentUser', email);
  closeModal();
  updateAuthButton();
  return false;
}

function logoutUser() {
  localStorage.removeItem('currentUser');
  closeProfileModal();
  updateAuthButton();
}

function handleAuthClick() {
  const currentEmail = localStorage.getItem('currentUser');
  if (currentEmail) {
    const users = getUsers();
    const user = users[currentEmail];
    document.getElementById('profileNick').textContent = user.nick;
    document.getElementById('profileEmail').textContent = user.email;
    openProfileModal();
  } else {
    openAuthModal();
  }
}

function updateAuthButton() {
  const btn = document.getElementById('authBtn');
  const currentEmail = localStorage.getItem('currentUser');
  if (currentEmail) {
    const users = getUsers();
    const user = users[currentEmail];
    btn.textContent = user.nick;
  } else {
    btn.textContent = 'Вход';
  }
}

document.addEventListener('DOMContentLoaded', updateAuthButton);
