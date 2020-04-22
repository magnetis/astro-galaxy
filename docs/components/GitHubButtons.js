import React from 'react';

const GitHubButtons = ({ star, fork }) => (
  <>
    {star && (
      <iframe
        title="star astro on github"
        src="https://ghbtns.com/github-btn.html?user=magnetis&repo=astro-galaxy&type=star&count=true&size=large"
        frameBorder="0"
        scrolling="0"
        width="160px"
        height="30px"
      />
    )}

    {fork && (
      <iframe
        title="fork astro on github"
        src="https://ghbtns.com/github-btn.html?user=magnetis&repo=astro-galaxy&type=fork&count=true&size=large"
        frameBorder="0"
        scrolling="0"
        width="160px"
        height="30px"
      />
    )}
  </>
);

export default GitHubButtons;
