function editElement(element, match, replacer) {
    // element.textContent = element.textContent.replacer(match, replacer);
    element.textContent = element.textContent.split(match).join(replacer);
}