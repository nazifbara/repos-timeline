<script lang="ts">
	import moment from 'moment';

	import Icon from './Icon.svelte';

	export let repositories: any;
	export let username: string;
</script>

<div class="timeline">
	{#each repositories as r}
		<article class="timeline__item">
			<time dateTime={r.createdAt}>{moment(r.createdAt).format('YYYY-MM-DD')}</time>
			<div class="timeline__separator">
				<div class="timeline__dot" />
				<div class="timeline__connector" />
			</div>
			<a
				href={`https://github.com/${username}/${r.name}`}
				rel="noreferrer"
				target="_blank"
				class="timeline__content"
				class:archived={r.isArchived}
			>
				<time dateTime={r.createdAt}>{moment(r.createdAt).format('YYYY-MM-DD')}</time>
				<div class="flex ai-c timeline__heading">
					{#if r.isFork}
						<Icon name="fork" />
					{/if}
					<h2>{r.name}</h2>
					<div class="flex ai-c">
						<Icon name="star" />
						{r.stargazerCount}
					</div>
				</div>
				{#if r.lastCommitDate}
					<span class="timeline__activeTime">
						active time: {moment(r.createdAt).from(r.lastCommitDate, true)} - last commit:{' '}
						{moment(r.lastCommitDate).fromNow()}
					</span>
				{/if}

				{#if r.description}
					<p>{r.description}</p>
				{/if}
			</a>
		</article>
	{/each}
</div>

<style lang="scss">
	@use '$lib/scss/variables';
	@use '$lib/scss/mixins' as *;

	.timeline {
		&__item {
			display: flex;

			> time {
				display: none;
				width: 48%;
			}

			@include small-breakpoint {
				> time {
					display: block;
				}
				&:nth-child(even) {
					flex-direction: row-reverse;
					justify-content: flex-end;

					.timeline__heading {
						justify-content: flex-end;
					}

					.timeline__content {
						padding: 0 0.625rem 0.625rem 0;
					}

					& {
						text-align: right;
					}

					> time {
						text-align: left;
						padding-left: 0.625rem;
					}
				}

				&:nth-child(odd) {
					justify-content: flex-end;

					> time {
						text-align: right;
						padding-right: 0.625rem;
					}
				}
			}
		}

		&__separator {
			display: flex;
			flex-direction: column;
			align-items: center;
			min-height: 8.75rem;

			@include small-breakpoint {
				flex-grow: 1;
			}
		}

		&__dot {
			width: 1rem;
			height: 1rem;
			margin-bottom: 0.5rem;
			background: variables.$gradient;
			border: 0.125rem solid black;
			border-radius: 50%;
		}

		&__connector {
			width: 0.5rem;
			flex-grow: 1;
			margin-bottom: 0.5rem;
			background-color: white;
			border: 0.125rem solid black;
		}

		&__content {
			padding: 0 0 0.625rem 0.625rem;
			transform: translateY(-0.4063rem);
			color: inherit;
			text-decoration: none;

			&:hover,
			&:active {
				.timeline__heading {
					&,
					h2 {
						color: variables.$secondary;
					}
					:global(svg) {
						fill: variables.$secondary;
					}
				}
			}

			@include small-breakpoint {
				width: 48%;

				time {
					display: none;
				}
			}

			h2 {
				font-size: 1.25rem;
				font-weight: 500;
				margin: 0;
				color: white;
			}
			p {
				margin: 0;
			}
		}

		&__heading {
			:global(svg) {
				margin: 0 0.3125rem;
			}
		}

		&__activeTime {
			display: block;
			margin-bottom: 0.5rem !important;
			font-size: 0.75rem;
			color: #4cc38a;
		}
	}
</style>
