import React from 'react';

interface BookmarkProps {
	id: string;
	name: string;
	url: string;
}

const Bookmark: React.FC<BookmarkProps> = props => (
	<article className="bookmark">
		<h1 className="bookmark__name">{props.name}</h1>
		<p className="bookmark__link">
			<a target="_blank" rel="noopener noreferrer" href={props.url}>
				{window.location.protocol}//{window.location.host}/{props.id}
			</a>
		</p>
	</article>
);

export default Bookmark;
