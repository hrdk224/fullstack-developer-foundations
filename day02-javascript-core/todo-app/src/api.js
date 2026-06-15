export async function datafetcher() {
  let response = await fetch(
    'https://jsonplaceholder.typicode.com/todos?_limit=5',
  );
  let data = await response.json();
  return data;
}
