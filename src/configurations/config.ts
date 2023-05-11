export const Config = {
    publicFolder: process.env.REACT_APP_PUBLIC_FOLDER,
    apiUrl:
      process.env.NODE_ENV === "development"
        ? process.env.REACT_APP_LOCAL_API_URL
        : process.env.REACT_APP_ONLINE_API_URL,
    frontEndUrl: "",
  };
  
  