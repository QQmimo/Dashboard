import EntitiesEnum from "./EntitiesEnum";
import { EntitesType } from "./EntitiesType";
import IRequestApplication from "./IRequestApplication";

export default class RequestAdapter {
	private _RequestApplication: IRequestApplication;

	public get<T extends EntitiesEnum, K extends EntitesType<T>>(entity: T): Promise<K[]> {
		if (process.env.NODE_ENV === 'development') {
			return new Promise((resolve, reject) => {
				let json = require(`../../FAKE/${entity}.json`);
				resolve(json.value);
			});
		}
		return this._RequestApplication.get<K[]>(`/_api/web/${entity}`);
	}

	constructor (requestApplication: IRequestApplication) {
		this._RequestApplication = requestApplication;
	}
}