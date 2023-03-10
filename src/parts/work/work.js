export default function work() {
    const btnAddImg = document.querySelector(".work__btn-load");

    addImgWork();

    btnAddImg.addEventListener("click", () => {
        addImgWork();
    });

    function addImgWork() {
        const workListImg = document.querySelector(".work__list-img");

        for (let index = 0; index < 12; index++) {
            const li = document.createElement("li");

            li.classList.add("work__list-img-item");
            li.classList.add("faded");

            li.innerHTML = `
        <img src="./img/work-${index}.jpg" alt="" class="grid__img">
        `;
            addCreateWindow(li);
            workListImg.append(li);
        }
    }

    function addCreateWindow(element) {
        const div = document.createElement("div");

        div.innerHTML = `
                <div class="work__block  faded" >
                    <div class="btns-block">
                        <button class="work-btn btn-chein">
                            <svg class="work-btn-svg" widhth="15" height="15" viewBox="0 0 15 15" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.913 2.72817L12.0948 0.891285C11.2902 0.0808612 9.98304 0.0759142 9.1768 0.882615L7.1592 2.89256C6.3516 3.69885 6.34817 5.01032 7.1505 5.82074L8.3035 4.68897C8.18677 4.32836 8.3304 3.9153 8.61591 3.62946L9.89948 2.35187C10.3061 1.94624 10.9584 1.94913 11.3595 2.35434L12.4513 3.45805C12.8528 3.86283 12.851 4.51713 12.4469 4.92318L11.1634 6.20241C10.8918 6.47296 10.4461 6.62168 10.1002 6.52626L8.97093 7.65887C9.77452 8.47177 11.0803 8.47466 11.8889 7.66837L13.9039 5.65924C14.7141 4.85254 14.7167 3.53983 13.913 2.72817ZM6.52612 10.0918C6.6219 10.4441 6.46856 10.8997 6.19092 11.1777L4.99226 12.3752C4.58073 12.7845 3.91594 12.7833 3.5067 12.369L2.39296 11.2475C1.98464 10.8349 1.98727 10.1633 2.39823 9.75473L3.59802 8.55769C3.89031 8.26607 4.31043 8.12025 4.6771 8.24375L5.83352 7.0715C5.01492 6.2462 3.68248 6.24207 2.86058 7.06324L0.915186 9.0042C0.0922501 9.8266 0.088357 11.1629 0.906499 11.9886L2.75816 13.8618C3.57594 14.6846 4.90723 14.6912 5.7311 13.8701L7.67648 11.9287C8.49851 11.1054 8.50239 9.77166 7.68552 8.9443L6.52612 10.0918ZM6.25786 9.56307C5.98011 9.84189 5.53426 9.84105 5.26178 9.55812C4.98791 9.27434 4.99009 8.82039 5.26612 8.53993L8.59074 5.16109C8.86678 4.88227 9.31172 4.88311 9.58512 5.16398C9.86047 5.44569 9.85875 5.90088 9.58168 6.18299L6.25786 9.56307Z" fill="#1FDAB5"/>
                            </svg>
                        </button>

                        <button class="work-btn btn-coub"><div class="coub"></div></button>

                    </div> 
                    <h3 class="work__block-title">creative design</h3>

                    <p clsss="work__block-text">Web Design</p>

                </div>
            `;
        element.addEventListener("mouseenter", () => {
            element.append(div);
        });

        element.addEventListener("mouseleave", () => {
            div.remove();
        });
    }
}
