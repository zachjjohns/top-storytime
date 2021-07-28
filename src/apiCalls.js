export const getHomeStories = async () => {
  const response = await fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=Brb8P3A2NnSMIqrAI7Rpr41wOdHNm9vR');
  const data = await errorHandler(response);
  return data;
}

export const errorHandler = (response) => {
  if (!response.ok) {
    throw new Error(response.message);
  } else {
    return response.json();
  }
}