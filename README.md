# ReposTimeline

![screenshot](/screenshot.png)

## About

ReposTimeline is a NextJS app that helps visualize your repositories in a timeline you can easily share.

## Installation

```
git clone https://github.com/nazifbara/repos-timeline.git
cd repos-timeline
npm install
```

[Generate a GitHub personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) to be able to communicate the graphql API. Give it the public_repo and read:user scope. Then, create a .env.local file with the following:

```
GITHUB_TOKEN=YOUR_TOKEN
```

Now start the app:

```
npm run dev
```

## Hosting

This app is hosted on AWS using AWS Amplify. Refer to the [AWS Amplify docs for the instructions](https://docs.amplify.aws/cli/start/install/#option-1-watch-the-video-guide). I suggest you use the git-based hosting with Continuous Deployment.

Once your backend is set up, head over to the build settings. Edit the amplify.yml and modify the build section:

```yml
build:
  commands:
    - npm run build
    - echo "GITHUB_TOKEN=$GITHUB_TOKEN" >> .env.local
```

Finally, add the GITHUB_TOKEN env variable in the "Environment variables" section.
