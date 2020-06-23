const inputs = document.querySelectorAll('.controls input'); // the descendant selector matches all elements that are descendants of a specified element. In this case, input is the descendant of the specified .controls class.
// NodeList prototype doesn't contain all methods that array prototype does.


function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
