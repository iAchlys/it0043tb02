document.addEventListener('DOMContentLoaded', () => {
    const flexboxContainer = document.querySelector('.flexbox-container');
    const boxes = document.querySelectorAll('.box');

    document.getElementById('resetFlexbox').addEventListener('click', () => {
        flexboxContainer.style.gap = '0px';
        flexboxContainer.style.flexDirection = 'row';
        flexboxContainer.style.justifyContent = 'flex-start';
        flexboxContainer.style.alignItems = 'flex-start';
    });

    document.getElementById('gap').addEventListener('input', (e) => {
        flexboxContainer.style.gap = `${e.target.value}px`;
    });

    document.querySelectorAll('.flexDirection').forEach(button => {
        button.addEventListener('click', (e) => {
            flexboxContainer.style.flexDirection = e.target.dataset.direction;
        });
    });

    document.querySelectorAll('.justifyContent').forEach(button => {
        button.addEventListener('click', (e) => {
            flexboxContainer.style.justifyContent = e.target.dataset.justify;
        });
    });

    document.querySelectorAll('.alignItems').forEach(button => {
        button.addEventListener('click', (e) => {
            flexboxContainer.style.alignItems = e.target.dataset.align;
        });
    });

    document.getElementById('resetGrow').addEventListener('click', () => {
        boxes.forEach(box => {
            box.style.flexGrow = '0';
        });
    });

    document.getElementById('growAll').addEventListener('click', () => {
        boxes.forEach(box => {
            box.style.flexGrow = '1';
        });
    });

    document.querySelectorAll('.flexGrow').forEach(input => {
        input.addEventListener('input', (e) => {
            const box = document.getElementById(`box${e.target.dataset.box}`);
            box.style.flexGrow = e.target.value;
        });
    });
});
