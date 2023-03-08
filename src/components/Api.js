export default class Api {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    // this.headers = headers;
  }

  getUser() {
    return fetch(this.baseUrl, {
      headers: {
        authorization: "a1b5ce98-6b5c-47c4-b5da-5267f74b926c",
      },
    }).then((response) => {
      if (!response.ok) {
        console.log(response);
        return Promise.reject("Não foi possível mostrar perfil.");
      }

      return response.json();
    });
  }

  getInitialCards() {
    return fetch(this.baseUrl, {
      headers: {
        authorization: "a1b5ce98-6b5c-47c4-b5da-5267f74b926c",
      },
    }).then((response) => {
      if (!response.ok) {
        console.log(response);
        return Promise.reject("Não foi possível carregar os cards.");
      }

      return response.json();
    });
  }

  // updateProfile() {
  //   return fetch(this.baseUrl, {
  //     method: "PATCH",
  //     body: JSON.stringify(cardData),
  //     headers: {
  //       authorization: "a1b5ce98-6b5c-47c4-b5da-5267f74b926c",
  //       "Content-Type": "application/json",
  //     },
  //   }).then((response) => {
  //     console.log(response);
  //     if (!response.ok) {
  //       return Promise.reject("Não foi possível atualizar a imagem de perfil.");
  //     }

  //     return response.json();
  //   });
  // }

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
