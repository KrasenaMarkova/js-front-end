document.addEventListener('DOMContentLoaded', solve);

function solve() {
    
    // add event listeners to each 'More' button
    let buttons = Array.from(document.querySelectorAll('button'));

    for (let button of buttons) {
        button.addEventListener('click', toggleText);
    }


    function toggleText(ev) {
        // - find button's parent
        let profile = ev.target.parantElement;

         // - find current profile's lock status
         let isLocked = profile.querySelector('[type="radio"]').checked;

          // - if locked, do nothing
          if (isLocked) {
            return;
          }

        // - otherwise, toggle additional info and change button text
        let info = profile.querySelector('.hidden-fields');

        if (info.style.display =='block') {
             // -- otherwise, hide it
             info.style.display = 'none';
             ev.target.textContent = 'Show more';
        } else {
            // -- if hidden, show it
            info.style.display = 'block';
            ev.target.textContent = 'Show less';
        }
    }
}



// function solve () {
//     const profiles = document.querySelectorAll(".profile");
    
//     profiles.forEach(profile => {
//         const lockRadio = profile.querySelector("input[type='radio'][id$='Lock']");
//         const unlockRadio = profile.querySelector("input[type='radio'][id$='Unlock']");
//         const hiddenFields = profile.querySelector(".hidden-fields");
//         const button = profile.querySelector("button");
        
//         button.addEventListener("click", function () {
//             if (!unlockRadio.checked) return; // Do nothing if the profile is locked
            
//             if (hiddenFields.style.display === "none" || hiddenFields.style.display === "") {
//                 hiddenFields.style.display = "block";
//                 button.textContent = "Hide it";
//             } else {
//                 hiddenFields.style.display = "none";
//                 button.textContent = "Show more";
//             }
//         });

//         lockRadio.addEventListener("change", function () {
//             hiddenFields.style.display = "none";
//             button.textContent = "Show more";
//         });
//     });
// }