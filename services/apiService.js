class ApiService {
  #key = "896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043";
  #apiBase = `https://api.unsplash.com/`;

  getResource = async (url) => {
    const res = await fetch(`${this.#apiBase}${url}`, {
      headers: {
        "Content-Type": "application/json",
        "Accept-Version": "v1",
      },
    });

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
    }

    return await res.json();
  };

  getAllPosts = async (page) => {
    return await this.getResource(
      `photos/?client_id=${this.#key}&per_page=50&page=${page}`
    );
  };
}

export default ApiService;
