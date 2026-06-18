document.addEventListener('DOMContentLoaded', () => {
  const STORAGE_KEY = 'nhatro-expenses';
  const expensesTbody = document.getElementById('expenses-tbody');
  const totalEl = document.getElementById('expenses-total');
  const emptyEl = document.getElementById('expense-empty');
  const searchInput = document.getElementById('expense-search');
  const addExpenseBtn = document.getElementById('add-expense');
  const expenseModal = document.getElementById('expense-modal');
  const closeModalBtn = document.getElementById('close-expense-modal');
  const cancelExpenseBtn = document.getElementById('cancel-expense');
  const expenseForm = document.getElementById('expense-form');
  const modalTitle = document.getElementById('expense-modal-title');
  const inputDate = document.getElementById('expense-date');
  const inputItem = document.getElementById('expense-item');
  const inputAmount = document.getElementById('expense-amount');
  const inputPayer = document.getElementById('expense-payer');
  const inputId = document.getElementById('expense-id');
  const utilitiesTbody = document.getElementById('utilities-tbody');
  const utilitiesEmptyEl = document.getElementById('utilities-empty');

  let expenses = loadExpenses();
  let utilities = loadUtilities();
  let filterText = '';

  function loadExpenses() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (error) {
      console.warn('Không thể đọc dữ liệu chi phí từ localStorage', error);
    }

    return [
      { id: 'e-1', date: '2026-06-01', item: 'Tiền điện', amount: 500000, payer: 'Minh' },
      { id: 'e-2', date: '2026-06-05', item: 'Thêm nệm', amount: 1200000, payer: 'Lan' }
    ];
  }

  function saveExpenses() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
  }

  function loadUtilities() {
    try {
      const saved = localStorage.getItem('nhatro-utilities');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (error) {
      console.warn('Không thể đọc dữ liệu dịch vụ từ localStorage', error);
    }

    return [
      { id: 'u-1', name: 'Tiền điện', daily: 27000, weekly: 189000, monthly: 810000 },
      { id: 'u-2', name: 'Tiền nước', daily: 8000, weekly: 56000, monthly: 240000 },
      { id: 'u-3', name: 'Internet', daily: 7000, weekly: 49000, monthly: 210000 }
    ];
  }

  function saveUtilities() {
    localStorage.setItem('nhatro-utilities', JSON.stringify(utilities));
  }

  function formatCurrency(value) {
    return value.toLocaleString('vi-VN') + 'đ';
  }

  function renderExpenses() {
    const rows = getFilteredExpenses();
    expensesTbody.innerHTML = rows.map(expense => {
      return `
        <tr>
          <td>${expense.date}</td>
          <td>${escapeHtml(expense.item)}</td>
          <td>${formatCurrency(expense.amount)}</td>
          <td>${escapeHtml(expense.payer)}</td>
          <td>
            <button class="button secondary small expense-action-btn" type="button" data-action="edit" data-id="${expense.id}">Sửa</button>
            <button class="button danger secondary small expense-action-btn" type="button" data-action="delete" data-id="${expense.id}">Xóa</button>
          </td>
        </tr>
      `;
    }).join('');

    emptyEl.classList.toggle('hidden', rows.length > 0);
    updateTotal();
  }

  function getFilteredExpenses() {
    const query = filterText.trim().toLowerCase();
    if (!query) return expenses;
    return expenses.filter(expense => {
      return (
        expense.date.includes(query) ||
        expense.item.toLowerCase().includes(query) ||
        expense.payer.toLowerCase().includes(query)
      );
    });
  }

  function renderUtilities() {
    utilitiesTbody.innerHTML = utilities.map(item => {
      return `
        <tr>
          <td>${escapeHtml(item.name)}</td>
          <td>${formatCurrency(item.daily)}</td>
          <td>${formatCurrency(item.weekly)}</td>
          <td>${formatCurrency(item.monthly)}</td>
          <td>
            <button class="button secondary small expense-action-btn" type="button" data-utility-action="edit" data-id="${item.id}">Sửa</button>
          </td>
        </tr>
      `;
    }).join('');

    utilitiesEmptyEl.classList.toggle('hidden', utilities.length > 0);
  }

  function updateTotal() {
    const total = expenses.reduce((sum, expense) => sum + Number(expense.amount || 0), 0);
    totalEl.textContent = formatCurrency(total);
  }

  function openModal(editExpense = null) {
    expenseModal.classList.remove('hidden');
    expenseModal.setAttribute('aria-hidden', 'false');
    if (editExpense) {
      modalTitle.textContent = 'Sửa chi tiêu';
      inputId.value = editExpense.id;
      inputDate.value = editExpense.date;
      inputItem.value = editExpense.item;
      inputAmount.value = editExpense.amount;
      inputPayer.value = editExpense.payer;
    } else {
      modalTitle.textContent = 'Thêm chi tiêu';
      inputId.value = '';
      inputDate.value = new Date().toISOString().slice(0, 10);
      inputItem.value = '';
      inputAmount.value = '';
      inputPayer.value = '';
    }
    inputDate.focus();
  }

  function closeModal() {
    expenseModal.classList.add('hidden');
    expenseModal.setAttribute('aria-hidden', 'true');
    expenseForm.reset();
    inputId.value = '';
  }

  function createExpenseId() {
    return `e-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const id = inputId.value.trim();
    const date = inputDate.value.trim();
    const item = inputItem.value.trim();
    const amount = Number(inputAmount.value);
    const payer = inputPayer.value.trim();

    if (!date || !item || !amount || !payer) {
      alert('Vui lòng điền đầy đủ thông tin chi tiêu.');
      return;
    }

    if (amount < 0) {
      alert('Số tiền phải lớn hơn hoặc bằng 0.');
      return;
    }

    if (id) {
      const index = expenses.findIndex(expense => expense.id === id);
      if (index !== -1) {
        expenses[index] = { id, date, item, amount, payer };
      }
    } else {
      expenses.push({ id: createExpenseId(), date, item, amount, payer });
    }

    saveExpenses();
    renderExpenses();
    closeModal();
  }

  function handleTableClick(event) {
    const expenseButton = event.target.closest('button[data-action]');
    if (expenseButton) {
      const action = expenseButton.dataset.action;
      const id = expenseButton.dataset.id;
      const expense = expenses.find(item => item.id === id);
      if (!expense) return;

      if (action === 'edit') {
        openModal(expense);
        return;
      }

      if (action === 'delete') {
        if (confirm('Bạn có chắc chắn muốn xóa chi tiêu này?')) {
          expenses = expenses.filter(item => item.id !== id);
          saveExpenses();
          renderExpenses();
        }
      }
    }

    const utilityButton = event.target.closest('button[data-utility-action]');
    if (utilityButton) {
      const id = utilityButton.dataset.id;
      const utility = utilities.find(item => item.id === id);
      if (!utility) return;

      const newDaily = prompt('Sửa chi phí theo ngày cho ' + utility.name + ':', utility.daily);
      if (newDaily === null) return;
      const dailyValue = Number(newDaily);
      if (Number.isNaN(dailyValue) || dailyValue < 0) {
        alert('Chi phí theo ngày không hợp lệ.');
        return;
      }

      const newWeekly = prompt('Sửa chi phí theo tuần cho ' + utility.name + ':', utility.weekly);
      if (newWeekly === null) return;
      const weeklyValue = Number(newWeekly);
      if (Number.isNaN(weeklyValue) || weeklyValue < 0) {
        alert('Chi phí theo tuần không hợp lệ.');
        return;
      }

      const newMonthly = prompt('Sửa chi phí theo tháng cho ' + utility.name + ':', utility.monthly);
      if (newMonthly === null) return;
      const monthlyValue = Number(newMonthly);
      if (Number.isNaN(monthlyValue) || monthlyValue < 0) {
        alert('Chi phí theo tháng không hợp lệ.');
        return;
      }

      utility.daily = dailyValue;
      utility.weekly = weeklyValue;
      utility.monthly = monthlyValue;
      saveUtilities();
      renderUtilities();
    }
  }

  function handleSearch(event) {
    filterText = event.target.value || '';
    renderExpenses();
  }

  function handleOverlayClick(event) {
    if (event.target === expenseModal) {
      closeModal();
    }
  }

  function handleKeyDown(event) {
    if (event.key === 'Escape' && !expenseModal.classList.contains('hidden')) {
      closeModal();
    }
  }

  function escapeHtml(text) {
    const span = document.createElement('span');
    span.textContent = text;
    return span.innerHTML;
  }

  addExpenseBtn.addEventListener('click', () => openModal());
  closeModalBtn.addEventListener('click', closeModal);
  cancelExpenseBtn.addEventListener('click', closeModal);
  expenseForm.addEventListener('submit', handleFormSubmit);
  expensesTbody.addEventListener('click', handleTableClick);
  utilitiesTbody.addEventListener('click', handleTableClick);
  searchInput.addEventListener('input', handleSearch);
  expenseModal.addEventListener('mousedown', handleOverlayClick);
  document.addEventListener('keydown', handleKeyDown);

  renderExpenses();
  renderUtilities();
});