export const ApiProfile = {
    Dev: "",
    Test: 'http://localhost:5500/',
    UAT: '',
    Prod: ''
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
  