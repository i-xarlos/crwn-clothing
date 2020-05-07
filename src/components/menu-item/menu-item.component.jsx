import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

function MenuItem({ title, size, imageUrl, linkUrl, history, match }) {
	return (
		<div
			className={`menu-item ${size ? +size : ''}`}
			style={{ backgroundImage: `url(${imageUrl})` }}
			onClick={() => history.push(`${match.url}${linkUrl}`)}
		>
			<div className="content">
				<h1 className="title">{title}</h1>
				<span className="subtitle">Shop now</span>
			</div>
		</div>
	);
}

export default withRouter(MenuItem);
