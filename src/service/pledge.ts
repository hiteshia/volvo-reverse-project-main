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
