const navbar = document.querySelector('#js-navbar');
const toggleBtn = document.querySelector('#js-toggle-btn');
const filterProductsBtnGroup = document.querySelector(
  '#js-filter-products-btn'
);
const filterProductsBtn = document.querySelectorAll(
  '#js-filter-products-btn .list-group-item'
);

toggleBtn.addEventListener('click', (e) => {
  e.preventDefault();
  navbar.classList.toggle('active');
});

filterProductsBtnGroup.addEventListener('click', (e) => {
  e.preventDefault();

  filterProductsBtn.forEach((item) => {
    item.classList.remove('active');
  });

  if (e.target.nodeName === 'LI') {
    e.target.classList.toggle('active');
  }
});
