<script lang="ts">
	import AppBar from '$lib/components/AppBar.svelte';
	import SearchInput from '$lib/components/SearchInput.svelte';
</script>

<svelte:head>
	<title>Repos Timeline</title>
	<meta name="description" content="Generate repositories timeline" />
</svelte:head>

<div class="home">
	<AppBar>
		<h1>Visualize GitHub repositories through a timeline</h1>
	</AppBar>

	<main class="content-box">
		<a
			href="https://www.producthunt.com/posts/repostimeline?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-repostimeline"
			target="_blank"
			rel="noreferrer"
		>
			<img
				src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=332685&theme=light"
				alt="ReposTimeline - Generate&#0032;GitHub&#0032;repositories&#0032;timeline&#0032;using&#0032;a&#0032;username | Product Hunt"
				width="250"
				height="54"
			/>
		</a>
		<SearchInput />
	</main>
</div>

<style lang="scss">
	@use '$lib/scss/mixins' as *;

	img {
		width: 250px;
		height: 54px;
		position: fixed;
		bottom: 100px;
		right: 50px;
	}

	.home {
		height: 100vh;
		background-image: url('/assets/github-octocat.svg');
		background-size: 25rem;
		background-repeat: no-repeat;
		background-position: bottom -7.5rem right 50%;

		@include medium-breakpoint {
			background-size: 28.125rem;
		}
	}
</style>
