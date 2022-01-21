class changeViewPoint {
  constructor() {
    this.$modelViewer = document.querySelector('model-viewer');
    this.$aboveButton = document.querySelector('.above_button');
    this.bind();
  }

  viewFromAbove() {
    this.$modelViewer.setAttribute('camera-orbit', "0deg 0deg 50%");
  }

  bind() {
      this.$aboveButton.addEventListener(
        "click",
        e => {
          this.viewFromAbove();
        }
      );
  }
}

new changeViewPoint();