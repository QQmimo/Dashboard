import React from "react"
import BlockAdapter from "../../../../Adapters/BlockAdapter/BlockAdapter";
import RequestAdapter from "../../../../Adapters/RequestAdapter/RequestAdapter";
import RequestApplication from "../../../../Applications/RequestApplication/RequestApplication";
import Block from "../Block/Block";
import IBlockManagerProps from "./IBlockManagerProps";
import IBlockManagerStates from "./IBlockManagerStates";

export default class BlockManager extends React.Component<IBlockManagerProps, IBlockManagerStates> {
	private _BlockAdapter: BlockAdapter;

	public componentDidMount = (): void => {
		this._BlockAdapter.getBlocks().then(blocks => {
			this.setState({
				Blocks: blocks
			}, () => {
				console.log(this.state.Blocks);
			});
		});
	}

	public render(): JSX.Element {
		return (
			<React.Fragment>
				{
					this.state.Blocks.map(blockData => {
						return <Block data={blockData} />
					})
				}
			</React.Fragment>
		);
	}

	constructor (props: IBlockManagerProps) {
		super(props);

		this.state = {
			Blocks: []
		};

		let requestApplication: RequestApplication = new RequestApplication();
		let requestAdapter: RequestAdapter = new RequestAdapter(requestApplication);
		this._BlockAdapter = new BlockAdapter(requestAdapter);
	}
}