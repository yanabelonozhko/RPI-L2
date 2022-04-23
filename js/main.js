function _createModal(options) {
    const modal = document.createElement('div');
    modal.classList.add('vmodal');
    modal.id = "myModal";
    modal.insertAdjacentHTML('afterbegin', `
    <div class="dws-wrapper">
      <div class="dws-form">
        <form class="tab-form" action="">
          <div id="first">
            <i id="closeBtn" class="close fa-solid fa-square-xmark fa-2x"></i>
            <label class="lbl-sign-up active">${options.title}</label>
            ${options.content}
          </div>
          <div id="success" class="success">
            Registration completed successfully!
          </div>
        </form>
      </div>
    </div>
    `)
    document.body.appendChild(modal); 
    return modal;

}

$.modal = function (options) {
    const $modal = _createModal(options);
    return {
        open() {
            $modal.style.display = "block";
        },
        close() {
            $modal.style.display = "none";
        },
        destroy() { }
    }
}