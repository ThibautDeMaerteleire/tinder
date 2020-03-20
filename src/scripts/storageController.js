// Storing items in local storage
export function storeItem(name, value) {
  localStorage.removeItem(name);
  return localStorage.setItem(name, JSON.stringify(value));
}

// Get item from local storage
export function getItem(name) {
  return JSON.parse(localStorage.getItem(name));
}

