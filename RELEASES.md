## Release Checklist (Magnetis contributors only)

The Magnetis Astro team launches a new release every time we decide the latest changes should go live. When that occurs, we update the npm registry package.

If you're a Magnetis employee who's about to launch a new release, please follow this checklist.

Before you start, make sure you are a member of Magnetis' npm org, and you are logged in your local terminal with `npm login`.

1. Create a new branch and push it to GitHub.
2. Update the CHANGELOG.md file. To make sure you add all changes, see the commit history: https://github.com/magnetis/astro-galaxy/commits/master.
3. Just to make sure everything is compiled, run `yarn compile`.
4. Run `yarn publish` or `npx lerna publish` and follow the instructions for versioning each package.
5. Push your new changes to GitHub and open the PR.
6. Merge with master.
7. Notify about the release on #astro and #codehood channels on Slack.
