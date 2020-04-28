import React from 'react';

const GitHubButtons = ({ star, fork }) => (
  <>
    {star && (
      <a
        style={{ marginRight: '10px' }}
        href="https://github.com/magnetis/astro-galaxy/stargazers"
        target="_blank"
        rel="nofollow,noopener,noreferrer"
        aria-label="Click to access Astro Galaxy repository's stargazers on GitHub">
        <img src="https://img.shields.io/github/stars/magnetis/astro-galaxy?style=social" alt="" />
      </a>
    )}

    {fork && (
      <a
        href="https://github.com/magnetis/astro-galaxy"
        target="_blank"
        rel="nofollow,noopener,noreferrer"
        aria-label="Click to access Astro Galaxy repository on GitHub">
        <img src="https://img.shields.io/github/forks/magnetis/astro-galaxy?style=social" alt="" />
      </a>
    )}
  </>
);

export default GitHubButtons;
