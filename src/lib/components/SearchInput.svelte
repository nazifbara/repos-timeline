<script lang="ts">
  let username = '';

const handleSubmit = () => {
  if (!username) {
    return
  }
  window.location.href = `/${username}`;
}
</script>

<form on:submit|preventDefault={handleSubmit} class="search-input">
  <input
    bind:value={username}
    placeholder="Enter a GitHub username"
    type="text"
  />

  <button>Generate</button>
</form>

<style lang="scss">
  @use '$lib/scss/variables';
@use '$lib/scss/mixins' as *;

.search-input {
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;

  input {
    flex-grow: 4;
    align-self: stretch;
    padding: 0.625rem 1.25rem;
    background-color: variables.$primary;
    color: white;
    border: 0.125rem solid white;
    border-radius: 0.3125rem;
    margin-bottom: 0.9375rem;

    @include medium-breakpoint {
      margin-bottom: 0;
      margin-right: 0.9375rem;
    }
  }

  button {
    flex-grow: 1;
    background-color: variables.$secondary;
    color: white;
    border-left: none;
    padding: 0.625rem 1.25rem;
    border: 0.125rem solid variables.$secondary;
    border-radius: 0.3125rem;
    cursor: pointer;
  }

  @include medium-breakpoint {
    flex-direction: row;
    margin-top: 6.25rem;
  }
}

</style>

