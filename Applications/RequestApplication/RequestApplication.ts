export default class RequestApplication {
	public get<T>(url: string): Promise<T> {
		return new Promise((resolve, reject) => {
			fetch(url, {
				method: "GET",
				headers: {
					"Accept": "application/json"
				}
			}).then(response => {
				if (response.ok) {
					response.json().then(data => {
						resolve(data.value);
					});
				} else {
					reject(response);
				}
			});
		});
	}
}