export default class Api {
  constructor(url) {
    this._url = url;
  }

  getInitialCards() {
    return fetch("https://around.nomoreparties.co/v1/group-42/cards", {
      headers: {
        authorization: "c56e30dc-2883-4270-a59e-b2f7bae969c6",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  createCard() {}

  updateProfile(profilData) {
    const { name, about } = profilData;

    fetch("https://around.nomoreparties.co/v1/groupId/users/me", {
      method: "PATCH",
      headers: {
        authorization: "c56e30dc-2883-4270-a59e-b2f7bae969c6",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Marie Skłodowska Curie",
        about: "Physicist and Chemist",
      }),
    });
  }

  deleteCard() {}

  addLike() {}
}
