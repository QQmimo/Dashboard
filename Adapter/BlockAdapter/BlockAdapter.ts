import IBlock from "../../Domain/Entities/IBlock";
import IBlockApplication from "./IBlockApplication";

export default class BlockAdapter {
	private _BlockApplication: IBlockApplication;

	public getBlocks(): Promise<IBlock[]> {
		return this._BlockApplication.get<IBlock[]>("");
	}

	constructor (blockApplication: IBlockApplication) {
		this._BlockApplication = blockApplication;
	}
}