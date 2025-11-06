export const httpRequest = async (URL: string, token?: string) => {
   try {

      const headers: Record<string, string> = {'Content-Type': 'application/json'};
      if (token) {
         headers['Authorization'] = `Bearer ${token}`;
      }
      const response = await fetch(URL, {headers});

      if(!response.ok){
         console.log("Failed request")
         return null
      }
      const data = response.json();

      return data
   } catch (error) {
      console.log(error);
      return null
   }
}