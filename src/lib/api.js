const JSONPlaceholderAPI = "https://jsonplaceholder.typicode.com";

export const fetchPosts = async (endpoint) => {
  try {
    const url = `${JSONPlaceholderAPI}/${endpoint}`;
    const response = await fetch(url);

    if (response.ok) {
      const json = await response.json();
      return json;
    }
    throw new Error("API 통신 실패");
  } catch (e) {
    alert(e.message);
  }
};
