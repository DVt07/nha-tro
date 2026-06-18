const AuthStorage = {
  USERS_KEY: 'rental_house_users',
  CURRENT_USER_KEY: 'rental_house_current_user',

  getUsers() {
    const raw = localStorage.getItem(this.USERS_KEY);
    if (!raw) return [];
    try {
      return JSON.parse(raw);
    } catch (error) {
      console.error('Không đọc được danh sách user:', error);
      return [];
    }
  },

  setUsers(users) {
    localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
  },

  getCurrentUser() {
    const raw = localStorage.getItem(this.CURRENT_USER_KEY);
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch (error) {
      console.error('Không đọc được current user:', error);
      return null;
    }
  },

  setCurrentUser(user) {
    localStorage.setItem(this.CURRENT_USER_KEY, JSON.stringify(user));
  },

  clearCurrentUser() {
    localStorage.removeItem(this.CURRENT_USER_KEY);
  }
};

function hashPassword(password) {
  return btoa(encodeURIComponent(password));
}

function getPageName() {
  const path = window.location.pathname.replace(/\\/g, '/');
  return path.substring(path.lastIndexOf('/') + 1).toLowerCase();
}

function getInputValue(form, selector) {
  const input = form.querySelector(selector);
  return input ? input.value.trim() : '';
}

function showAlert(message) {
  alert(message);
}

function findUserByIdentifier(identifier) {
  if (!identifier) return null;
  const users = AuthStorage.getUsers();
  const lowered = identifier.trim().toLowerCase();
  return users.find(user => user.username.toLowerCase() === lowered || user.email.toLowerCase() === lowered) || null;
}

function bindSocialButtons() {
  const buttons = document.querySelectorAll('.social-button');
  buttons.forEach(button => {
    button.addEventListener('click', event => {
      event.preventDefault();
      showAlert('Đăng nhập / đăng ký với mạng xã hội hiện tại chưa được hỗ trợ. Vui lòng sử dụng tài khoản nội bộ.');
    });
  });
}

function initLoginPage() {
  const loginForm = document.querySelector('.login-form');
  if (!loginForm) return;

  const currentUser = AuthStorage.getCurrentUser();
  if (currentUser) {
    window.location.href = 'profile.html';
    return;
  }

  loginForm.addEventListener('submit', event => {
    event.preventDefault();

    const identifier = getInputValue(loginForm, 'input[type="text"]');
    const password = getInputValue(loginForm, 'input[type="password"]');

    if (!identifier || !password) {
      showAlert('Vui lòng nhập username/email và mật khẩu.');
      return;
    }

    const user = findUserByIdentifier(identifier);
    if (!user || user.password !== hashPassword(password)) {
      showAlert('Tên đăng nhập hoặc mật khẩu không chính xác.');
      return;
    }

    AuthStorage.setCurrentUser({
      username: user.username,
      email: user.email,
      fullName: user.fullName || user.username,
      phone: user.phone || ''
    });

    window.location.href = 'profile.html';
  });
}

function initRegisterPage() {
  const registerForm = document.querySelector('.register-form');
  if (!registerForm) return;

  const currentUser = AuthStorage.getCurrentUser();
  if (currentUser) {
    window.location.href = 'profile.html';
    return;
  }

  registerForm.addEventListener('submit', event => {
    event.preventDefault();

    const username = getInputValue(registerForm, 'input[type="text"]');
    const email = getInputValue(registerForm, 'input[type="email"]');
    const password = getInputValue(registerForm, 'input[type="password"]');
    const confirmPassword = registerForm.querySelectorAll('input[type="password"]')[1]?.value.trim();

    if (!username || !email || !password || !confirmPassword) {
      showAlert('Vui lòng điền đầy đủ thông tin đăng ký.');
      return;
    }

    if (password !== confirmPassword) {
      showAlert('Mật khẩu và xác nhận mật khẩu không khớp.');
      return;
    }

    const users = AuthStorage.getUsers();
    const exists = users.some(user => user.username.toLowerCase() === username.toLowerCase() || user.email.toLowerCase() === email.toLowerCase());
    if (exists) {
      showAlert('Username hoặc email đã tồn tại. Vui lòng dùng thông tin khác.');
      return;
    }

    const newUser = {
      username,
      email,
      password: hashPassword(password),
      fullName: username,
      phone: ''
    };

    users.push(newUser);
    AuthStorage.setUsers(users);

    showAlert('Đăng ký thành công. Vui lòng đăng nhập.');
    window.location.href = 'login.html';
  });
}

function initProfilePage() {
  const currentUser = AuthStorage.getCurrentUser();
  if (!currentUser) {
    window.location.href = 'login.html';
    return;
  }

  const title = document.querySelector('.profile-header h2');
  const emailEl = document.querySelector('.profile-header p');
  const rows = document.querySelectorAll('.profile-row strong');
  if (title) title.textContent = currentUser.fullName || currentUser.username;
  if (emailEl) emailEl.textContent = currentUser.email;

  if (rows.length >= 4) {
    rows[0].textContent = currentUser.fullName || currentUser.username;
    rows[1].textContent = currentUser.email;
    rows[2].textContent = currentUser.phone || 'Chưa cập nhật';
    rows[3].textContent = currentUser.birthday || 'Chưa cập nhật';
  }

  const avatar = document.querySelector('.avatar-placeholder');
  if (avatar) {
    avatar.textContent = (currentUser.fullName || currentUser.username).charAt(0).toUpperCase();
  }

  const logoutButton = document.querySelector('.button.danger');
  if (logoutButton) {
    logoutButton.addEventListener('click', () => {
      AuthStorage.clearCurrentUser();
      window.location.href = 'login.html';
    });
  }
}

function initAuth() {
  bindSocialButtons();
  const pageName = getPageName();

  if (pageName === 'login.html') {
    initLoginPage();
  }

  if (pageName === 'register.html') {
    initRegisterPage();
  }

  if (pageName === 'profile.html') {
    initProfilePage();
  }
}

function updateTopActions() {
  const currentUser = AuthStorage.getCurrentUser();
  const topActions = document.getElementById('top-actions');
  if (!topActions) return;

  if (currentUser) {
    const initial = (currentUser.fullName || currentUser.username).charAt(0).toUpperCase();
    topActions.innerHTML = `
      <div class="user-info">
        <div class="header-avatar">${initial}</div>
        <span><strong>${currentUser.fullName || currentUser.username}</strong></span>
      </div>
      <a class="button secondary" href="logion and profile/profile.html">Hồ sơ</a>
      <button class="button" type="button" onclick="logout()">Đăng xuất</button>
    `;
  } else {
    topActions.innerHTML = `
      <a class="button secondary" href="logion and profile/login.html">Đăng nhập</a>
      <a class="button primary" href="logion and profile/register.html">Đăng ký</a>
    `;
  }
}

function logout() {
  AuthStorage.clearCurrentUser();
  updateTopActions();
  // reload to refresh page-specific state
  window.location.reload();
}

document.addEventListener('DOMContentLoaded', () => {
  initAuth();
  updateTopActions();
});
