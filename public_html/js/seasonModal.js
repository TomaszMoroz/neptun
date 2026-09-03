// Modal o starcie nowego sezonu treningowego - znika automatycznie 08.09.2026
const SEASON_MODAL_HIDE_FROM = new Date(2026, 8, 8, 0, 0, 0);

const $seasonModal = document.querySelector(".seasonModal");

if ($seasonModal) {
    if (new Date() < SEASON_MODAL_HIDE_FROM) {
        $seasonModal.classList.remove("isHidden");

        const closeModal = () => $seasonModal.classList.add("isHidden");

        $seasonModal.querySelector(".exit-icon").addEventListener("click", closeModal);
        $seasonModal.querySelector(".popup__btn").addEventListener("click", closeModal);
        $seasonModal.addEventListener("click", (e) => {
            if (e.target === $seasonModal) {
                closeModal();
            }
        });
    } else {
        $seasonModal.remove();
    }
}
