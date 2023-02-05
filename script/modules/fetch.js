const URL = "https://jsonplaceholder.typicode.com/posts";
const fetchRequest = async (url, {method = "GET", callback, body, headers}) => {
	try {
		const options = {
			method,
		};
		if (body) options.body = JSON.stringify(body);
		if (headers) options.headers = headers;

		const response = await fetch(url, options); //запрос

		if (response.ok) {
			const data = await response.json();
			if (callback) callback(null, data);
			return;
		}

		throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
	} catch (err) {
		callback(err);
	}
};

const form = document.querySelector(".reservation__form");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	fetchRequest(URL, {
		method: "POST",
		body: {
			title: form.dates.value,
			body: form.people.value,
		},
		callback(err, data) {
			if (err) {
				console.warn(err, data);
				form.textContent = err;
			}
			form.textContent = `Заявка успешно отправлена, номер заявки ${data.id}`;
		},
		headers: {
			"Content-Type": "application/json",
		},
	});
});
