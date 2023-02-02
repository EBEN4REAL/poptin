function showPopup() {
  let popup = document.createElement("div");
  popup.classList.add("popup");
  popup.innerHTML = `
  <div class="popin-bg-wrapper" ref="popin-bg-wrapper">
    <div class="close-button" onClick="closePopUp()">
        <span class="close-butto">&times;</span>
    </div>
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
        <span class="footerText" contenteditable="false" >
        No credit card required. No Surprises
        </span>
    </div>
    </div>
    </div>
    </div>
    `;

  setTimeout(() => {
    document.body.appendChild(popup);
    let popinBgWrapper = document.querySelector(".popin-bg-wrapper");
    popinBgWrapper.style.display = "block";
    popinBgWrapper.classList.add("show-element");
    const popinElement = document.querySelector(".popin-wrapper");
    popinElement.classList.add("popin-wrapper-slide-in");

    document.querySelector(".close-button").addEventListener("click", () => {
      closePopUp();
    });
  }, 1000);
}

function closePopUp() {
  let popinBgWrapper = document.querySelector(".popin-bg-wrapper");
  popinBgWrapper.style.display = "none";
}
