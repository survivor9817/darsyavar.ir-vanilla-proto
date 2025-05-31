import { goToBook } from "/main-layout/main.js";
import { currentBookData } from "/book-app/2.currentBookData.js";

// badan bayad ba event delegation anjaamesh bedi. in movaghate
const exerciseRefs = document.querySelectorAll(".ref-page");
exerciseRefs.forEach((exerciseRef) => {
    exerciseRef.addEventListener("click", function() {
        goToBook();
        const pageNumber = parseInt(exerciseRef.dataset.refPage);
        currentBookData.goToPage(pageNumber);
    });
});