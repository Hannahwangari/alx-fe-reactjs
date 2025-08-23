import axios from "axios";

/**
 * Fetch GitHub user data by username
 * @param {string} username - GitHub username
 * @returns {Promise<Object>} - GitHub user data
 */
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data; // ✅ return user data
  } catch (error) {
    console.error("Error fetching GitHub user data:", error);
    throw error; // re-throw so component can handle it
  }
};