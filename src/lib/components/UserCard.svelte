<script lang="ts">
	export let user: any;
</script>

<div class="user-card">
	<a href={`https://github.com/${user.login}`} rel="noreferrer" target="_blank" class="flex ai-c">
		<img
			class="user-card__avatar"
			alt={`${user.name} avatar`}
			src={user.avatarUrl}
			width={100}
			height={100}
		/>
		<div class="user-card__info">
			{#if user.name}
				<h1>
					<strong>{user.name}</strong>
				</h1>
				<h2>{user.login}</h2>
			{:else}
				<h1>
					<strong>{user.login}</strong>
				</h1>
			{/if}
		</div>
	</a>
</div>

<style lang="scss">
	@use '$lib/scss/variables' as *;

	.user-card {
		display: flex;
		justify-content: space-evenly;

		a {
			color: inherit;
			text-decoration: none;
			padding: 0;
			transition: all, 0.3s;

			&:hover {
				color: $secondary;
				border: 0.125rem solid $secondary;
				border-radius: 5px;
				padding: 0.3125rem 0.9375rem;
			}
		}

		&__info {
			margin-left: 0.9375rem;

			h1 {
				font-size: 20px;
				text-align: left;
				font-weight: 400;
			}
			h2 {
				margin-top: 0.1875rem;
				font-size: 1.125rem;
				text-align: left;
				font-weight: 300;
			}
		}

		&__avatar {
			border-radius: 50%;
			margin-right: 0.9375rem;
		}

		strong {
			color: white;
		}
	}
</style>
