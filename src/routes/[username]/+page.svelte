<script lang="ts">
	import type { PageServerData } from './$types';
	import AppBar from '$lib/components/AppBar.svelte';
	import UserCard from '$lib/components/UserCard.svelte';
	import Timeline from '$lib/components/Timeline.svelte';

	export let data: PageServerData;
	const user = data.result.user;
	const repositories = data.result.repositories;
</script>

<svelte:head>
	{#if user.name}
		<title>
			{user.name} repositories
		</title>
	{:else}
		<title>
			{user.login} repositories
		</title>
	{/if}
	<meta name="description" content={`${user.name} repositories`} />
</svelte:head>

<div>
	<AppBar>
		<UserCard {user} />
	</AppBar>
	<main class="content-box">
		{#if repositories.length === 0}
			<p style="text-align: center;">{user.login} has no public repositories</p>
		{/if}
		<Timeline {repositories} username={user.login} />
	</main>
</div>
