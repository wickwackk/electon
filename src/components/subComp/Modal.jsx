import "../../styles/modal.css";

export default function Modal() {
  let modal = document.getElementById("myModal");
  let btn = document.getElementById("myBtn");
  let span = document.getElementsByClassName("close")[0];

  function show() {
    if (modal) {
      modal.style.display = "block";
    }
  }

  // function span() {
  //   modal.style.display = "none";
  // }

  window.onclick = function (event) {
    if (modal && event.target == modal) {
      modal.style.display = "none";
    }
  };
  return (
    <div>
      <button id="myBtn" onClick={show}>
        Open Modal
      </button>

      <div id="myModal" class="modal">
        <div class="modal-content">
          <span class="close">&times;</span>
          <p>Some text in the Modal..</p>
        </div>
      </div>
    </div>
  );
}
