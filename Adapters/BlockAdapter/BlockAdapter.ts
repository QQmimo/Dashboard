import IBlock from "../../Domain/Entities/IBlock";
import EntitiesEnum from "../RequestAdapter/EntitiesEnum";
import IRequestAdapter from "./IRequestAdapter";

export default class BlockAdapter {
	private _RequestAdapter: IRequestAdapter;

	public getBlocks(): Promise<IBlock[]> {
		return this._RequestAdapter.get(EntitiesEnum.Block);
	}

	constructor(requestAdapter: IRequestAdapter) {
		this._RequestAdapter = requestAdapter;
	}
}