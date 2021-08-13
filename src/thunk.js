const fetchOneFramework = framework => {
  return fetch(`https://api.github.com/repos/${framework}`)
    .then(res => res.json())
    .then(data => {
      return {
        name: data.name,
        forks: data.forks_count,
        stargazers: data.stargazers_count,
        openIssues: data.open_issues_count,
      };
    });
};

const fetchFrameworks = async frameworks => {
  return await Promise.all(
    frameworks.map(framework => fetchOneFramework(framework))
  );
};

export default fetchFrameworks;
