export default class UserInfo {
  constructor(name, about) {
    this._name = name;
    this._about = about;
  }

  getUserInfo() {
    const addedName = this._name.value;
    const addedAbout = this._about.value;

    const nameProfile = document.querySelector(".profile__name");
    const aboutProfile = document.querySelector(".profile__aboutme");

    nameProfile.textContent = addedName;
    aboutProfile.textContent = addedAbout;
  }

  setUserInfo() {
    return this.getUserInfo();
  }
}
