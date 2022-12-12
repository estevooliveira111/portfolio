<template>

    <a id="whatsapp-button" target="_blank" href="https://api.whatsapp.com/send?phone=5521980626968">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
        </svg>
    </a>

</template>

<style>

#whatsapp-button {
    display: flex;
    position: fixed;
    background: #25d366;
    bottom: 25px;
    border-radius: 50%;
    width: 64px;
    height: 64px;
    box-shadow: 2px 2px 12px rgba(22, 124, 60, .2);
    transition: .4s;
    align-items: center;
    justify-content: center
}

#whatsapp-button>.rwb-tooltip {
    position: absolute;
    bottom: 100%;
    margin-bottom: 20px;
    border-radius: 4px;
    padding: 15px;
    color: #2d2d2d;
    font-size: 16px;
    white-space: nowrap;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, .2);
    opacity: 0;
    transition: .4s;
    pointer-events: none
}

#whatsapp-button>.rwb-tooltip:after {
    display: block;
    content: "";
    position: absolute;
    top: 85%;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6px 7px 0 7px;
    border-color: #fff transparent transparent transparent;
    transition: .4s
}

#whatsapp-button.left {
    left: 125px
}

#whatsapp-button.left>.rwb-tooltip {
    left: 0;
    transform: translateX(-10%)
}

#whatsapp-button.left>.rwb-tooltip:after {
    left: 23px
}

#whatsapp-button:not(.left) {
    right: 50px
}

#whatsapp-button:not(.left)>.rwb-tooltip {
    right: 0;
    transform: translateX(10%)
}

#whatsapp-button:not(.left)>.rwb-tooltip:after {
    right: 23px
}

#whatsapp-button>img {
    display: block;
    width: 34px;
    height: 34px
}

#whatsapp-button:hover {
    background: #21bd5c;
    box-shadow: 3px 3px 12px rgba(14, 81, 39, .4)
}

#whatsapp-button:hover>.rwb-tooltip {
    opacity: 1;
    transform: translateX(0)
}

#whatsapp-button:hover>.rwb-tooltip:after {
    top: 100%;
    transition-delay: .4s
}

</style>