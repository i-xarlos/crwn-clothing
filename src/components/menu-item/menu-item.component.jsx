import React from 'react';
import './menu-item.styles.scss';

export default function MenuItem({ title, size, imageUrl }) {
	return (
		<div
			className={`menu-item ${size ? +size : ''}`}
			style={{ backgroundImage: `url(${imageUrl})` }}
		>
			<div className="content">
				<h1 className="title">{title}</h1>
				<span className="subtitle">Shop now</span>
			</div>
		</div>
	);
}
