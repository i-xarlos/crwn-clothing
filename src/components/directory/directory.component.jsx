import React, { Component } from 'react';
import { sections } from './directory.data';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

export default class Directory extends Component {
	state = {
		sections: sections,
	};
	render() {
		const { sections } = this.state;
		return (
			<div className="directory-menu">
				{sections.map((item) => (
					<MenuItem key={item.id} {...item} />
				))}
			</div>
		);
	}
}
