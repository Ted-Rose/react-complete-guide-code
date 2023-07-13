// Create helper function that gets token
// from local storage
export function getAuthToken() {
  const token = localStorage.getItem("token");
  return token;
}
