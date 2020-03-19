export function storeItem(name, value) {
  localStorage.removeItem(name);
  return localStorage.setItem(name, value);
}

export function getItem(name) {
  return localStorage.getItem(name);
}

export const initIndexedDb = () => new Promise((resolve, reject) => {
  // open my database
  const request = indexedDB.open('swiped', 1);

  // add error handler
  request.addEventListener('error', (err) => reject(err.message));

  // add success handler
  request.addEventListener('success', () => resolve(request.result));

  // add upgradeneeded
  request.addEventListener('upgradeneeded', (evt) => {
    // get the database
    const myDb = evt.target.result;

    // Create an objectStore to hold information about our posts. We're
    // going to use "id" as our key path that will generated automatically
    const liked = myDb.createObjectStore('liked', { keyPath: 'id', autoIncrement: true });
    const disliked = myDb.createObjectStore('disliked', { keyPath: 'id', autoIncrement: true });

    // Define the posts data
    // var myIDBIndex = objectStore.createIndex(indexName, keyPath, objectParameters);
    liked.createIndex('title', 'title', { unique: false });
    liked.createIndex('content', 'content', { unique: false });

    disliked.createIndex('title', 'title', { unique: false });
    disliked.createIndex('content', 'content', { unique: false });
  });
});