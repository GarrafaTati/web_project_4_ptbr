export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    // this.headers.authorization = options.authorization;
  }

  // _fetchData(endpoint, options = {}) {
  //   return fetch(this.baseUrl + endpoint, {
  //     ...options,
  //     headers: this.headers,
  //   }).then((response) => {
  //     if (!response.ok) {
  //       return Promise.reject("Não foi possível carregar options.");
  //     }

  //     return response.json();
  //   });
  // }

  // setHeaders(key, value) {
  //   this.headers[key] = value;
  // }

  getInitialCards() {
    return fetch(this._baseUrl + "/cards", {
      headers: this._headers,
    }).then((response) => {
      if (!response.ok) {
        return Promise.reject("Não foi possível carregar cards.");
      }

      return response.json();
    });
  }

  getUser() {
    return fetch(this._baseUrl + "/users/me", {
      headers: this._headers,
    }).then((response) => {
      if (!response.ok) {
        return Promise.reject("Não foi possível mostrar perfil.");
      }

      return response.json();
    });
  }

  updateProfile(name, about, avatar) {
    return fetch(this.baseUrl, {
      method: "PATCH",
      body: JSON.stringify({
        name: name,
        about: about,
        avatar: avatar,
      }),
      headers: {
        authorization: "a1b5ce98-6b5c-47c4-b5da-5267f74b926c",
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (!response.ok) {
        return Promise.reject("Não foi possível atualizar a imagem de perfil.");
      }

      return response.json();
    });
  }

  // createCard(newCard) {
  //   return fetch(this.baseUrl, {
  //     method: "POST",
  //     body: JSON.stringify({
  //       name: newCard.name,
  //       link: newCard.link,
  //     }),
  //     headers: {
  //       authorization: "a1b5ce98-6b5c-47c4-b5da-5267f74b926c",
  //       "Content-Type": "application/json",
  //     },
  //   }).then((response) => {
  //     console.log(response);
  //     if (!response.ok) {
  //       return Promise.reject("Não foi possível criar o card.");
  //     }

  //     return response.json();
  //   });
  // }

  // deleteCard() {
  //   return fetch(this.baseUrl, {
  //     method: "DELETE",
  //     body: JSON.stringify(cardData),
  //     headers: {
  //       authorization: "a1b5ce98-6b5c-47c4-b5da-5267f74b926c",
  //       "Content-Type": "application/json",
  //     },
  //   }).then((response) => {
  //     console.log(response);
  //     if (!response.ok) {
  //       return Promise.reject("Não foi possível criar o card.");
  //     }

  //     return response.json();
  //   });
  // }
}
