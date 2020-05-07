import React, { Component } from 'react';
import SECTIONS_DATA from './directory.data';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

export default class Directory extends Component {
	state = {
		sections: SECTIONS_DATA,
	};
	render() {
		const { sections } = this.state;
		return (
			<div className="directory-menu">
				{sections.map(({ id, ...otherProps }) => (
					<MenuItem key={id} {...otherProps} />
				))}
			</div>
		);
	}
}
