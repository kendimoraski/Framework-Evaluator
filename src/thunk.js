export const fetchOneFramework = framework => {
  // framework as a single string is actually `${library}/${framework}`
  return fetch(`https://api.github.com/repos/${framework}`)
    .then(res => res.json())
    .then(data => {
      return {
        name: data.name,
        forks: data.forks_count,
        stargazers: data.stargazers_count,
        openIssues: data.open_issues_count,
      }
    })
}

// Keep this in case we want to have maybe 3 frameworks displayed by default when the page first loads
export const fetchFrameworks = async frameworks => {
  return await Promise.all(
    frameworks.map(framework => fetchOneFramework(framework))
  )
}

// export default { fetchOneFramework, fetchFrameworks }
