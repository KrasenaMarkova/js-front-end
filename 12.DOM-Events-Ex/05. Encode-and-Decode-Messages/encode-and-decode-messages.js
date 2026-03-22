document.addEventListener('DOMContentLoaded', solve);

function solve() {
    //TODO
}

function solve() {
    const encodeButton = document.querySelector("#encode button");
    const decodeButton = document.querySelector("#decode button");
    const encodeTextarea = document.querySelector("#encode textarea");
    const decodeTextarea = document.querySelector("#decode textarea");

    encodeButton.addEventListener("click", (event) => {
        event.preventDefault();
        
        let message = encodeTextarea.value;
        let encodedMessage = "";
        
        for (let char of message) {
            encodedMessage += String.fromCharCode(char.charCodeAt(0) + 1);
        }
        
        decodeTextarea.value = encodedMessage;
        encodeTextarea.value = "";
    });

    decodeButton.addEventListener("click", (event) => {
        event.preventDefault();
        
        let encodedMessage = decodeTextarea.value;
        let decodedMessage = "";
        
        for (let char of encodedMessage) {
            decodedMessage += String.fromCharCode(char.charCodeAt(0) - 1);
        }
        
        decodeTextarea.value = decodedMessage;
    });
}