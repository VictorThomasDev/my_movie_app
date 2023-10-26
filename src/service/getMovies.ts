const getMovies = async (page: number): Promise<any> => {
  const urltop =
    (process.env.REACT_APP_API_URL ?? 'defaultURL') +
    '/3/discover/movie?' +
    (process.env.REACT_APP_KEY ?? 'defaultKey') +
    '&page=' +
    page
  console.log(urltop)
  console.log(page)
  try {
    const response = await fetch(urltop)

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const responseData = await response.json()
    return responseData
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

export default getMovies
