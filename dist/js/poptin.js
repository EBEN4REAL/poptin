// window.onload = () => {
//   const poptinWrapper = document.querySelector(".popin-bg-wrapper");
// };

function showPopup() {
  // Create the pop-up element
  console.log("EBEN")
  let popup = document.createElement("div");
  popup.classList.add("popup");
  popup.innerHTML = `
  <div class="popin-bg-wrapper" ref="popin-bg-wrapper">
<i
  class="fa fa-times close-btn"
  aria-hidden="true"
></i>
</div>
<div class="popin-wrapper" ref="popin-wrapper">
<div
  class="popin-container"
  ref="popin-container"
>
<div class="popin-inner-container">
  <div class="popin-stars-wrapper">
    <div class="popin-stars position-relative">
      <div>
        <i
          class="fa fa-star popin-star popin-star--small star1"
          aria-hidden="true"
          v-drag
          ref="star1"
        ></i>
      </div>
      <div class="popin-center-star star-2">
        <i
          class="fa fa-star popin-star popin-star--big star2"
          v-drag
          aria-hidden="true"
          ref="star2"
        ></i>
      </div>
      <div class="star-3">
        <i
          class="fa fa-star popin-star popin-star--small star3"
          aria-hidden="true"
          ref="star3"
        ></i>
      </div>
    </div>
  </div>
  <div class="popin-para-container">
    <div
      class="popin-para text-white text-center"
      contenteditable="false"
    >
      <span  ref="headerText">
        <span class="headerText">
          All the text and elements in this popup should be editable and
          dragable
        </span>
      </span>
    </div>
  </div>
  <form class="popin-form-wrapper">
    <div class="poppin-input-wrapper position-relative">
      <input
        class="popin-input draggableElement"
        type="text"
        placeholder="E-mail"
        id="popin-input"
        ref="popinInput"
      />
    </div>
    <div class="poppin-btn-wrapper position-relative">
       <button
        class="poptin-btn"
        id="popinBtn"
        ref="poptinBtn"
      >
        SIGNUP NOW
      </button>
    </div>
  </form>
  <div class="text-center text-white mt-3 position-relative" ref="footerText">
    <span class="footerText" contenteditable="false">
      No credit card required. No Surprises
    </span>
  </div>
</div>
</div>
</div>

    `;

  // Append the pop-up element to the body
  document.body.appendChild(popup);
}
