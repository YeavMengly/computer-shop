class ApiService{
    constructor (baseUrl){
        this.baseUrl = baseUrl;
    }

    // initialize method GET
    get(url, headers = {}) {
        return this.request(url, 'GET', null, headers);
      }
    
    // initialize method POST
    post(url, data, headers = {}) {
        return this.request(url, 'POST', data, headers);
      }
    
    // initialize method DELETE
    delete(url, headers = {}) {
        return this.request(url, 'DELETE', null, headers);
      }


    async request(url, method, body = null, headers = {}) {

        const apiUrl = this.baseUrl + url;
    
        const requestOptions = {
          method: method,
          headers: new Headers(headers),
          body: body ? JSON.stringify(body) : null,
        };
    
        try {
            const response = await fetch(apiUrl, requestOptions);
            if (!response.ok) {
                throw new Error(`Network response was not ok, status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }
}