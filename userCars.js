class UserCard extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `Aman Sadhwani`;
  }
}

class DynamicUserCard extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = this.getAttribute("name");
  }
}

window.customElements.define("user-card", UserCard);
window.customElements.define("dynamic-user-card", DynamicUserCard);
