export const ApiProfile = {
  Dev: "https://unity-products.onrender.com/",
  Test: 'http://localhost:5500/',
  UAT: 'https://unity-products.onrender.com/',
  Prod: 'https://unity-products.onrender.com/'
}

export const getActivProfile = (profile) => {
  switch (profile) {
    case 'Dev': return (ApiProfile.Dev);
    case 'Test': return (ApiProfile.Test);
    case 'UAT': return (ApiProfile.UAT);
    case 'Prod': return (ApiProfile.Prod);
    default: return (ApiProfile.Dev);
  }
}


export const getActiveImageProfile = (profile) => {
  switch (profile) {
    case 'local': return "http://localhost:5500/";
    case 'Prod': return "https://unity-products.onrender.com/";
    case 'UAT': return "https://unity-products.onrender.com/"
    default: return (ApiProfile.Dev);
  }
}