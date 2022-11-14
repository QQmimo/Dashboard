import React from "react";
import IBlockProps from "./IBlockProps";
import IBlockStates from "./IBlockStates";

export default class Block extends React.Component<IBlockProps, IBlockStates> {
	public render(): JSX.Element {
		return (
			<div>{this.props.data.Title}</div>
		);
	}
}