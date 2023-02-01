import fetch from 'node-fetch';

import { env } from '$env/dynamic/public';
import { ApolloClient } from '@apollo/client/core';
import { HttpLink } from '@apollo/client/link/http';
import { InMemoryCache } from '@apollo/client/cache';
import { setContext } from '@apollo/client/link/context';

class Client {
	static _instance;
	client;

	constructor() {
		if (Client._instance) {
			return Client._instance;
		}
		Client._instance = this;

		this.client = this.setupClient();
	}

	setupClient() {
		const link = new HttpLink({
			uri: 'https://api.github.com/graphql',
			fetch
		});
		const authLink = setContext((_, { headers }) => {
			return {
				headers: {
					...headers,
					authorization: `Bearer ${env.PUBLIC_GITHUB_TOKEN}`
				}
			};
		});
		const client = new ApolloClient({
			credentials: 'include',
			link: authLink.concat(link),
			cache: new InMemoryCache()
		});

		return client;
	}
}

export const client = new Client().client;
