export function storeItem(name, value) {
  localStorage.removeItem(name);
  return localStorage.setItem(name, value);
}

export function getItem(name) {
  return localStorage.getItem(name);
}

