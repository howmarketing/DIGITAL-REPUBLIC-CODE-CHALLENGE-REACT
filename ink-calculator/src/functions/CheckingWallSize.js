
const ShowingWallSize = (invalidMeasure, target) => {
    const fatherElement = target.parentNode;
    const wallWidth = fatherElement.querySelector('#width');
    const wallHeight = fatherElement.querySelector('#height');
    const measure = fatherElement.querySelector('h2');
    if (measure) measure.remove();
    if (wallHeight.value > 0 && wallWidth.value > 0 && invalidMeasure === false) {
        const wallArea = document.createElement('h2');
        wallArea.innerText = '';
        wallArea.innerText = 'A área desta parede é de ' + (wallHeight.value * wallWidth.value) + ' m2';
        fatherElement.appendChild(wallArea);
    }
}

const CheckingWallSize = (e) => {
    const target = e.target;
    const targetValue = parseFloat(target.value);
    let invalidMeasure = false;
    if (targetValue < 1 || targetValue > 15) {
        invalidMeasure = true;
        window.alert('Nenhuma parede pode ter menos de 1 metro nem mais de 15 metros');
    }
    ShowingWallSize(invalidMeasure, target);
    // const fatherElement = target.parentNode;
    // const wallWidth = fatherElement.querySelector('#width');
    // const wallHeight = fatherElement.querySelector('#height');
    // const measure = fatherElement.querySelector('h2');
    // if (measure) measure.remove();
    // if (wallHeight.value > 0 && wallWidth.value > 0 && invalidMeasure === false) {
    //     const wallArea = document.createElement('h2');
    //     wallArea.innerText = '';
    //     wallArea.innerText = 'A área desta parede é de ' + (wallHeight.value * wallWidth.value) + ' m2';
    //     fatherElement.appendChild(wallArea);
    // }
};

export default CheckingWallSize;