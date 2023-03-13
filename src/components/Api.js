export default class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

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

  updateProfile(data) {
    return fetch(this._baseUrl + "/users/me/avatar", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then((response) => {
      if (!response.ok) {
        return Promise.reject("Não foi possível atualizar a imagem de perfil.");
      }

      return response.json();
    });
  }

  createCard(data) {
    return fetch(this._baseUrl + "/cards", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then((response) => {
      console.log(response);
      if (!response.ok) {
        return Promise.reject("Não foi possível criar o card.");
      }

      return response.json();
    });
  }

  deleteCard() {
    return fetch(this._baseUrl, {
      method: "DELETE",
      headers: this._headers,
      body: JSON.stringify(),
    }).then((response) => {
      console.log(response);
      if (!response.ok) {
        return Promise.reject("Não foi possível criar o card.");
      }

      return response.json();
    });
  }
}
