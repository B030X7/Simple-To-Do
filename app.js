const addForm = document.querySelector(".add");
const searchForm = document.querySelector(".search input");
const list = document.querySelector(".todos");
const generateTemplate = todo => {
	const html = `
    <li>
      <span>${todo}</span>
      <i class="fas fa-trash-alt delete"></i>
    </li>
  `;
	list.innerHTML += html;
};
const filterTodos = term => {

  // add filtered class
  Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.add('filtered'));

  // remove filtered class
  Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.remove('filtered'));

};
addForm.addEventListener("submit", e => {
	e.preventDefault();
	const todo = addForm.add.value.trim();

	if (todo.length) {
		generateTemplate(todo);
		addForm.reset();
	}

});
list.addEventListener("click", e => {
	if (e.target.classList.contains("delete")) {
		e.target.parentElement.remove();
	}
});
searchForm.addEventListener("keyup",e=>{
	e.preventDefault();
	const term = searchForm.value.trim().toLowerCase();
	filterTodos(term);
k});
