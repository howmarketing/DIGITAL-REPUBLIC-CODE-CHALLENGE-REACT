const doors = .8 * 1.9;
const windows = 2 * 1.2;

// document.addEventListener("DOMContentLoaded", function(event) {
//     const calculateButton = document.querySelector('#calculateButton');
    
//     calculateButton.addEventListener('mouseout', function () {
//         calculateButton.setAttribute('disabled', 'false');
//     });
//     calculateButton.addEventListener('mouseover', function () {
//         const wallMeasures = document.querySelectorAll('#width, #height');
//         console.log(wallMeasures);
    
//         let wallSizes = [];
    
//         for (let index = 0; index < wallMeasures.length; index += 1) {
//             if ((wallMeasures[index]).value) {
//                 const valueToSum = (wallMeasures[index]).value;
//                 console.log(valueToSum);
//                 wallSizes.push(valueToSum);
//                 // calculateButton.setAttribute('disabled', 'false');
//             } else {
//                 calculateButton.setAttribute('disabled', 'true');
//                 window.alert('É necessário preencher a largura e altura de todas as paredes.')
//                 break;
//             }
//         }
        // console.log(wallSizes);
        // if ((wallMeasures.value).every === Number) {
        // } else {
        //     window.alert('É necessário preencher a largura e altura de todas as paredes.')
        //     return;
        // };
    //     wallMeasures.forEach((measure) => {
    //         if ((measure.value).every === 'number') {
    //             calculateButton.setAttribute('disabled', 'false');
    //         } else {
    //             calculateButton.setAttribute('disabled', 'true');
    //             // window.alert('É necessário preencher a largura e altura de todas as paredes.')
    //             return;
    //         };
    // })
//   });
// });

const ShowingWallSize = (invalidMeasure, target) => {
    
    const fatherElement = target.parentNode;
    let wallWidth = fatherElement.querySelector('#width').value;
    if (!wallWidth) wallWidth = 0;
    console.log(wallWidth);
    let wallHeight = fatherElement.querySelector('#height').value;
    if (!wallHeight) wallHeight = 0;
    console.log(wallHeight);
    let numberWindows = fatherElement.querySelector('#windows').value;
    if (!numberWindows) numberWindows = 0;
    console.log(numberWindows);
    let numberDoors = fatherElement.querySelector('#doors').value;
    if (!numberDoors) numberDoors = 0;
    console.log(numberDoors);
    let uselessArea = parseFloat(numberDoors.value) * parseFloat(doors) + parseFloat(windows) * parseFloat(numberWindows.value);
    const totalArea = parseFloat(wallHeight.value) * parseFloat(wallWidth.value);
    if (uselessArea / totalArea >= 1/2) {
        window.alert('A área de portas e janelas não pode ser maior que 50% do total da parede');
        const measure = fatherElement.querySelector('h2');
        if (measure) measure.remove();
        return;
    }
    if (!(uselessArea > 0)) {
        uselessArea = 0;
    }
    const utilArea = parseFloat(totalArea) - parseFloat(uselessArea);
    const measure = fatherElement.querySelector('h2');
    if (measure) measure.remove();
    if (wallHeight.value > 0 && wallWidth.value > 0 && invalidMeasure === false) {
        const wallArea = document.createElement('h2');
        wallArea.innerText = '';
        wallArea.innerText = 'A área útil desta parede é de ' + (utilArea.toFixed(2)) + ' m²';
        fatherElement.appendChild(wallArea);
    }
}

const CheckingDoors = (e) => {
    const target = e.target;
    const targetValue = parseFloat(target.value);
    if (targetValue > 0 && targetValue.id === 'doors') {
        const fatherElement = target.parentNode;
        const wallHeight = fatherElement.querySelector('#height');
        if (wallHeight.value < 2.2) {
            window.alert('Nenhuma parede com porta pode ter menos que 2,20m de altura');
        }
    }
    CheckingWallSize (e);
}

const CheckingWallSize = (e) => {
    console.log('teste checkingWallSize')
    const target = e.target;
    const targetValue = parseFloat(target.value);
    let invalidMeasure = false;
    if ((targetValue < 1 || targetValue > 15) && target.id === 'height') {
        invalidMeasure = true;
        window.alert('Nenhuma parede pode ter menos de 1 metro nem mais de 15 metros');
    }
    ShowingWallSize(invalidMeasure, target);
};

export { CheckingWallSize, CheckingDoors, ShowingWallSize };