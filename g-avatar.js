const template = document.createElement("template");
template.innerHTML = `
  <style>
    .g-avatar-container {
      padding: 8px;
      width: 80px;
      text-align: center;
    }
    .g-avatar-img-container{
      border-radius:50%;
    }
    .g-avatar-desc{
      font-size: 12px;      
      text-align: center;
    }
  </style>
  <div class="g-avatar-container">
    <div class="g-avatar-img-container">
      <img class="g-avatar-img" width="50px" height="50px"/>
    </div>
    <p class="g-avatar-desc">xxx</p>
  </div>
`;

class GAvatar extends HTMLElement {
  constructor() {
    super();
    // 创建DOM
    this._shadowRoot = this.attachShadow({ mode: "closed" });
    this._content = template.content.cloneNode(true);
    this._shadowRoot.appendChild(this._content);
    this._img = this._shadowRoot.querySelector("img");
    this.addEventListener("click", e => {
      console.log("internal click");
    });
    // 赋值
    this.src = this.getAttribute("src");
    this.desc = this.getAttribute("desc");
  }

  get src() {
    return this._src;
  }
  set src(value) {
    this._src = value;
    this._shadowRoot.querySelector("img").setAttribute("src", this._src);
  }

  get desc() {
    return this._desc;
  }
  set desc(value) {
    this._desc = value;
    this._shadowRoot.querySelector(".g-avatar-desc").innerText = this._desc;
  }
}
window.customElements.define("g-avatar", GAvatar);
