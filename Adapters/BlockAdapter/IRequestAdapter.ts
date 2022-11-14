import EntitiesEnum from "../RequestAdapter/EntitiesEnum";
import { EntitesType } from "../RequestAdapter/EntitiesType";

export default interface IRequestAdapter {
	get<T extends EntitiesEnum, K extends EntitesType<T>>(entity: T): Promise<K[]>;
}