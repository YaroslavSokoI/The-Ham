// Отримуємо всі вкладки та блоки контенту
const tabs = document.querySelectorAll('.service-title');
const contents = document.querySelectorAll('.content');

// Додаємо обробник події click до кожної вкладки
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Знаходимо ідентифікатор вкладки, яка була клікнута
    const tabId = tab.dataset.tab;

    // Відображаємо відповідний блок контенту та додаємо клас .active
    contents.forEach(content => {
      if (content.dataset.tab === tabId) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });

    // Змінюємо активну вкладку та додаємо клас .active
    tabs.forEach(tab => {
      if (tab.dataset.tab === tabId) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });
  });
});