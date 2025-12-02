import axios from "axios";

export const getPldeges = async () => {
  const response = await axios.get("https://leads.pravis.co/volvo/pledges/");
  if (response && response.data) {
    return response?.data?.data?.result?.pledges || null;
  }
  return null;
};

export const newPledge = async () => {
  const response = await axios.post("https://leads.pravis.co/volvo/pledges/");
  if (response && response.data) {
    return response?.data?.data?.result?.pledges || null;
  }
  return null;
};

// Fetch auth token from Sankalptaru API
export const fetchAuthToken = async (): Promise<string | null> => {
  try {
    const response = await axios.post("https://app.sankalptaru.org/oauth/token", {
      grant_type: "client_credentials",
      client_id: "11",
      client_secret: "51Ew49U6FnqGdRbkHxyDYSOQkbtHwUYwVkW0GtyE",
    });
    if (response && response.data && response.data.access_token) {
      return response.data.access_token;
    }
    return null;
  } catch (error) {
    console.error("Error fetching auth token:", error);
    return null;
  }
};

// Assign trees using Sankalptaru API
export const assignTrees = async (name: string, count: number = 2): Promise<string | null> => {
  try {
    // First, get the auth token
    const token = await fetchAuthToken();
    if (!token) {
      throw new Error("Failed to fetch auth token");
    }

    // Then, assign the trees
    const response = await axios.post(
      "https://app.sankalptaru.org/api/v1/business-card/VolvoCarsIndia/assign-tree",
      {
        name: name,
        count: count,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response && response.data && Array.isArray(response.data) && response.data.length > 0) {
      return response.data[0]["vforest-url"] || null;
    }
    return null;
  } catch (error) {
    console.error("Error assigning trees:", error);
    return null;
  }
};
