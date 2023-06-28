import Popup from "./Popup.js";
//passar card id em terceiro parametro, this_id no construtor setando o paramentro... confimartion passar o parametro this_id e modificar o delete do catrd js para receber u  parametro do cardid
export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, deleteConfirm) {
    super(popupSelector);
    this.setEventListeners();
    this.deleteConfirm = deleteConfirm;
  }

  confirmation() {
    console.log("It works!!!!");
    this.deleteConfirm();
  }

  setEventListeners() {
    const form = this._popup.querySelector(".form__form_action_confirmation");
    const btn = this._popup.querySelector(".form__button_action_confirmation");
    console.log(btn);

    form.addEventListener("submit", (evt) => {
      evt.preventDefault();

      btn.addEventListener("click", () => this.confirmation());
      // this.close();
    });

    super.setEventListeners();
  }
}
