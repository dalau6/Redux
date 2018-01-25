function handleError (error) {
  console.warn(error)
  return null
}

export async function fetchPopularRepos (language) {
  const encodedURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`)

  const response = await fetch(encodedURI)
    .catch(handleError)

  const repos = await response.json()

  return repos.items
}