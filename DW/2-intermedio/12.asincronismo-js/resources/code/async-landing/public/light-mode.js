const btn = document.querySelector(".dark-mode"); //ver error
const body = document.body;
const light = document.querySelector('link[href="./css/light-mode.css"]');
const local_storage_key = 'preferred_theme'
// Clave de almacenamiento local

function toggle_theme() { // Alternar tema
	if (body.getAttribute("data-theme") === "dark") {
		body.setAttribute("data-theme", "light");
		light.disabled = false;
		localStorage.setItem(local_storage_key, 'light')
	} else {
		body.setAttribute("data-theme", "dark");
		light.disabled = true;
		localStorage.setItem(local_storage_key, 'dark')
	}
};

function load_preferred_theme() {
	const preferred_theme = localStorage.getItem(local_storage_key);

	if (preferred_theme === 'light') {
		body.setAttribute('data-theme', 'light');
		light.disabled = false;
	} else {
		body.setAttribute('data-theme', 'dark');
		light.disabled = true;
	}
}

btn.addEventListener('click', toggle_theme);
load_preferred_theme();











/* btn.addEventListener("click", function () {
	if (body.getAttribute("data-theme") === "dark") {
		body.setAttribute("data-theme", "light");
		light.disabled = false;
	} else {
		body.setAttribute("data-theme", "dark");
		light.disabled = true;
	}
}); */