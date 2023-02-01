<header class="appBar">
  <a href="/">
      <img width={114} height={45} src="/assets/logo.svg" alt="site logo" />
  </a>
  <slot/>
</header>

<style lang="scss">
	@use '$lib/scss/mixins' as *;

.appBar {
  min-height: 185px;
  background-image: url('/assets/wave.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0.625rem 0.9375rem;

  @include medium-breakpoint {
    padding: 0.625rem 1.875rem;
  }

  :global(h1) {
    color: white;
    font-size: 1.6875rem;
    font-weight: 300;
    margin-top: 0.625rem;
    text-align: center;
    max-width: 37.5rem;
    margin: 0 auto;

    @include medium-breakpoint {
      font-size: 2rem;
    }
  }
}

</style>