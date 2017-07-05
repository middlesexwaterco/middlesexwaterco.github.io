"use strict";
import React from 'react';
import {Router, Route, browserHistory, Link} from 'react-router';
import {
	createContainer,
	query,
	BodyRenderer
} from '@phenomic/preset-react-app/lib/client';
import {Layout} from './layout';

export const AboutPage = ({page, about}) =>
		<Layout>
			{page.node &&
			<article>
				<h1>{page.node.title}</h1>
				<BodyRenderer>{page.node.body}</BodyRenderer>
				<ul>
					{about &&
					about.node &&
					about.node.list &&
					about.node.list.map(post =>
							<li key={post.id}>
								<Link to={`/about/${post.id}`}>{post.title || post.id}</Link>
							</li>
					)}
				</ul>
			</article>}
		</Layout>;

export const AboutPageContainer = createContainer(AboutPage, props => ({
	page: query({ collection: 'about', id: props.params.splat }),
	about: query({ collection: 'about' }),
}));
