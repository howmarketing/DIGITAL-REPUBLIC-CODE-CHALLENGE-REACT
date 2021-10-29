const doors = .8 * 1.9;
const windows = 2 * 1.2;

const ShowingWallSize = (invalidMeasure, target) => {
    
    const fatherElement = target.parentNode;
    const wallWidth = fatherElement.querySelector('#width');
    const wallHeight = fatherElement.querySelector('#height');
    const numberWindows = fatherElement.querySelector('#windows');
    const numberDoors = fatherElement.querySelector('#doors');
    const uselessArea = numberDoors.value * doors + windows * numberWindows.value;
    const totalArea = wallHeight.value + wallWidth.value;
    if (uselessArea / totalArea >= 1/2) {
        window.alert('A área de portas e janelas não pode ser maior que 50% do total da parede');
        const measure = fatherElement.querySelector('h2');
        if (measure) measure.remove();
        return;
    }
    const utilArea = parseFloat(totalArea) - parseFloat(uselessArea);
    const measure = fatherElement.querySelector('h2');
    if (measure) measure.remove();
    if (wallHeight.value > 0 && wallWidth.value > 0 && invalidMeasure === false) {
        const wallArea = document.createElement('h2');
        wallArea.innerText = '';
        wallArea.innerText = 'A área útil desta parede é de ' + (utilArea.toFixed(2)) + ' m2';
        fatherElement.appendChild(wallArea);
    }
}

const CheckingDoors = (e) => {
    const target = e.target;
    const targetValue = parseFloat(target.value);
    if (targetValue > 0) {
        const fatherElement = target.parentNode;
        const wallHeight = fatherElement.querySelector('#height');
        if (wallHeight.value < 2.2) {
            window.alert('Nenhuma parede com porta pode ter menos que 2,20m de altura');
        }
    }
    CheckingWallSize (e);
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

export { CheckingWallSize, CheckingDoors };