// Data ophalen via API
export async function fetchDATA(url) {
  const content = await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
  return content;
}