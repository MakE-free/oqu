<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Главная</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <header>
    <div class="top-bar">
      <div class="logo">
        <div class="logo-circle">✓</div>
        <span>Oqu</span>
      </div>

      <nav class="nav-links">
        <a href="index.html" class="active">Главное</a>
        <a href="english.html">Английский язык</a>
        <a href="tgo.html">ТГО</a>
        <a href="tests.html">Тесты</a>
        <a href="probniki.html">Пробники</a>
      </nav>

      <div class="top-bar-right">
        <div class="phone">
          📞 <span>+7 (727) 344 95 95</span>
        </div>
        <div class="search-icon">🔍</div>
        <button id="authBtn" class="cta-btn" onclick="handleAuthClick()">Вход</button>
        <div class="lang">
          🌐 <span>Русский</span> ▾
        </div>
      </div>
    </div>
  </header>

  <section class="section">
    <h1>Привет, мир!</h1>
    <p>Это главная страница моего сайта.</p>
  </section>

  <!-- Окно входа/регистрации -->
  <div id="authModal" class="modal-overlay hidden">
    <div class="modal">
      <span class="modal-close" onclick="closeModal()">&times;</span>

      <div class="modal-tabs">
        <button id="tabLogin" class="tab-btn active" onclick="switchTab('login')">Войти</button>
        <button id="tabRegister" class="tab-btn" onclick="switchTab('register')">Регистрация</button>
      </div>

      <form id="loginForm" onsubmit="return loginUser(event)">
        <input type="email" id="loginEmail" placeholder="Почта" required>
        <input type="password" id="loginPassword" placeholder="Пароль" required>
        <button type="submit" class="modal-submit">Войти</button>
        <p id="loginError" class="error-text"></p>
      </form>

      <form id="registerForm" class="hidden" onsubmit="return registerUser(event)">
        <input type="text" id="regNick" placeholder="Никнейм" required>
        <input type="email" id="regEmail" placeholder="Почта" required>
        <input type="password" id="regPassword" placeholder="Пароль" required>
        <button type="submit" class="modal-submit">Зарегистрироваться</button>
        <p id="registerError" class="error-text"></p>
      </form>
    </div>
  </div>

  <!-- Окно профиля -->
  <div id="profileModal" class="modal-overlay hidden">
    <div class="modal">
      <span class="modal-close" onclick="closeProfileModal()">&times;</span>
      <h2>Мой профиль</h2>
      <p><strong>Никнейм:</strong> <span id="profileNick"></span></p>
      <p><strong>Почта:</strong> <span id="profileEmail"></span></p>
      <button class="modal-submit" onclick="logoutUser()">Выйти из аккаунта</button>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
