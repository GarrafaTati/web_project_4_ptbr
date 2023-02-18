export default class UserInfo {
  constructor(data) {
    this._name = data.name;
    this._about = data.about;
    console.log(this._name + " " + this._about);
  }

  getUserInfo() {
    // this._name = document.querySelector(".profile__name").textContent;
    // this._about = document.querySelector(".profile__aboutme").textContent;

    this._inputsValue = document.querySelectorAll(".form__input");

    // this._profileValues = {
    //   nameValue: this._name,
    //   aboutValue: this._about
    // };

    this._inputsValue.forEach((inputValeu) => {
      this._profileValues[inputValeu.name] = input.value;
    });

    console.log("profileValues", this._profileValues);
    return this._profileValues;
  }

  setUserInfo(name, about) {
    const nameValue = formElement.querySelector(".form__input_type_name");
    const aboutValue = formElement.querySelector(".form__input_type_about");

    nameValue.textContent = name;
    aboutValue.textContent = about;
  }
}
