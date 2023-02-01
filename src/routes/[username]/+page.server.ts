import { error } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';
import { client } from '$lib/apolloClient';
import { GET_TIMELINE } from '$lib/graphql/queries';

export const load = (async ({ params: { username } }) => {
	console.log(process.env.PUBLIC_GITHUB_TOKEN);

	try {
		const { data } = await client.query({
			query: GET_TIMELINE,
			variables: { username }
		});
		return {
			result: {
				user: data.user,
				repositories: data.repositoryOwner.repositories.edges.map((i: any) => ({
					...i.node,
					lastCommitDate: i.node.defaultBranchRef
						? i.node.defaultBranchRef.target.history.edges[0].node.committedDate
						: null
				}))
			},
			error: null
		};
	} catch (err) {
		console.error(err);

		throw error(404, {
			message: 'User not found'
		});
	}
}) satisfies PageServerLoad;
