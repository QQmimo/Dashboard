export default interface IBlockApplication {
	get: <T>(url: string) => Promise<T>;
}