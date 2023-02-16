export default class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector;
  }

  open() {
    console.log("inside open function");
    this._popup.classList.add("modal_state_opened");
  }

  close() {
    this._popup.classList.remove("modal_state_opened");
  }

  _handleEscClose() {
    if (evt.key === "Escape") {
      close();
      document.removeEventListener("keydown", close);
    }
  }

  setEventListeners() {
    const closeModal = document.querySelector(".modal__close");

    closeModal.addEventListener("click", () => {
      this.close();
    });

    window.addEventListener("click", () => {
      this.close();
    });
  }
}
