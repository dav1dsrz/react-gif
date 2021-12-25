import serializeObjectToQuery from "./serializeObjectToQuery";

async function getGifs(category, limit = 24) {
  if (typeof category !== "string") {
    throw new Error("The category must be a string");
  }

  if (!category) {
    return [];
  }

  const params = {
    api_key: "mnGAzQCGjgrcOhAbM7reIWVCCrsL21pX",
    q: category,
    limit,
  };

  const api_url = `https://api.giphy.com/v1/gifs/search?${serializeObjectToQuery(
    params
  )}`;

  const response = await fetch(api_url);
  const { data = [] } = await response.json();

  return data.map((item) => {
    return {
      id: item.id,
      title: item.title,
      url: item.images?.downsized_medium.url,
    };
  });
}

export default getGifs;
