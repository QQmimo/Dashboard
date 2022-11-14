import IBlock from "../../Domain/Entities/IBlock";
import EntitiesEnum from "./EntitiesEnum";

export type EntitesType<T extends EntitiesEnum> =
	T extends EntitiesEnum.Block ? IBlock : never;