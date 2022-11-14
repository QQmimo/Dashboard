export default interface IRequestApplication {
	get<T>(url: string): Promise<T>;
}