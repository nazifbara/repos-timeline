# ReposTimeline

![screenshot](/screenshot.png)

## About

ReposTimeline is a NextJS app that helps visualize your repositories in a timeline you can easily share.

## Installation

```
git clone https://github.com/nazifbara/repos-timeline.git
cd repos-timeline
yarn
```

[Generate a GitHub personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) to be able to communicate the graphql API. Give it the public_repo and read:user scope. Then, create a .env file with the following:

```
PUBLIC_GITHUB_TOKEN=YOUR_TOKEN
```

Now start the app:

```
yarn dev dev
```

## Hosting

This app is hosted on Netlify. Refer to the [instructions here](https://docs.netlify.com/integrations/frameworks/sveltekit/) to learn about the integration. You must add your `PUBLIC_GITHUB_TOKEN` there too.
