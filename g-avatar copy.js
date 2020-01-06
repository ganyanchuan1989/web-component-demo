const template = document.createElement("template");
template.innerHTML = `
  <style>
    .g-avatar-container {
      padding: 8px;
      width: 80px;
    }
    .g-avatar-img-container{
      border-radius:50%;
    }
    .g-avatar-desc{
      font-size: 10px;
      text-align: center;
      color: red;
    }
  </style>
  <div class="g-avatar-container">
    <div class="g-avatar-img-container">
      <img class="g-avatar-img" width="50px" height="50px"/>
    </div>
    <p class="g-avatar-desc"></p>
  </div>
`;

class GAvatar extends HTMLElement {
  constructor() {
    super();
    this._content = template.content.cloneNode(true);
    console.log("this._content", this._content);

    var shadow = this.attachShadow({ mode: "open" });

    shadow.appendChild(this._content);

    this.src = this.getAttribute("src");
    this.desc = this.getAttribute("desc");
  }

  get src() {
    return this._src;
  }
  set src(value) {
    this._src = value;
    console.log(this._content);
    this._content.querySelector("img").setAttribute("src", this._src);
  }

  get desc() {
    return this._desc;
  }
  set desc(value) {
    this._desc = value;
    console.log(this._content.querySelector(".g-avatar-desc"));
    // this._content.querySelector(".g-avatar-desc").innerText = this._desc;
  }
}
window.customElements.define("g-avatar", GAvatar);
