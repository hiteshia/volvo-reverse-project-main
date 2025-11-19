import axios from "axios";

export const getCertificateData = async (id: string) => {
  try {
    const response = await axios.get(`https://leads.pravis.co/volvo/certificate/${id}/`);
    if (response.status >= 399) {
      return [];
    } else {
      if (response?.data?.data?.result?.trees && Object.keys(response.data.data.result.trees).length > 0) {
        return Object.keys(response.data.data.result.trees[1]["tree-data"]).map((key) => response.data.data.result.trees[1]["tree-data"][key]);
      } else {
        return [];
      }
    }
  } catch (error) {
    return [];
  }
};

export const getCertificate = async (id: string) => {
  const response = await axios.get(`https://leads.pravis.co/volvo/certificate/${id}/`);
  if (response.status >= 399) {
    return "";
  } else {
    return response?.data?.data?.result?.certificate || "";
  }
};
