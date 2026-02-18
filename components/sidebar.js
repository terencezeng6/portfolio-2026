class Sidebar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <aside class="sidebar">
        <a id="name" href="index.html">Terence Zeng</a>
        <a href="projects.html">Projects</a>
        <a href="gallery.html">Gallery</a>
        <a href="extras.html">Extras</a>
      </aside>
    `;
  }
}

customElements.define('js-sidebar', Sidebar);