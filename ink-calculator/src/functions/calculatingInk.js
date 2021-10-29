import InkCanCalculation from "./inkCanCalcutation";

const doors = .8 * 1.9;
const windows = 2 * 1.2;

const answerNumberCans = (quantityOfCans, totalArea) => {
    const answer = document.querySelector('.answer');
    const liters = quantityOfCans[quantityOfCans.length - 1];
    const measure = document.querySelectorAll('h2');
    if (measure) { 
        measure.forEach((item) => item.remove());
    }
    const wallArea = document.createElement('h2');
    wallArea.innerText = `A área total a ser pintada é de ${ totalArea.toFixed(2) }m²
    e serão necessários ${ (liters).toFixed(2) } litros de tinta para pintar. 
    Equivalendo a ${quantityOfCans[0]} latas de 18L, ${quantityOfCans[1]} 
    latas de 3,6L, ${quantityOfCans[2]} latas de 2,5L e ${quantityOfCans[3]} latas de 0,5L,`;
    answer.appendChild(wallArea);
}

const CalculationInk = () => {
    
    const wallWidth = document.querySelectorAll('#width');
    const wallHeight = document.querySelectorAll('#height');
    const numberWindows = document.querySelectorAll('#windows');
    const numberDoors = document.querySelectorAll('#doors');
    let subTotalArea = 0;
    let totalAreaDoors = 0;
    let totalAreaWindows = 0;
    for( let index = 0; index < 4; index += 1) {
        subTotalArea += parseFloat(wallHeight[index].value) * parseFloat(wallWidth[index].value);
    }
    for( let index = 0; index < numberWindows.length; index += 1) {
        totalAreaWindows += parseFloat(numberWindows[index].value ? numberWindows[index].value : 0) * parseFloat(windows);
    }
    for( let index = 0; index < numberDoors.length; index += 1) {
        totalAreaDoors += parseFloat(numberDoors[index].value ? numberDoors[index].value : 0) * parseFloat(doors);
    }
    console.log('totalArea, totalArea', subTotalArea);
    console.log('totalAreaWindows, totalAreaWindows', totalAreaWindows);
    console.log('totalAreaDoors, totalAreaDoors', totalAreaDoors);
    let totalArea = parseFloat(subTotalArea) - parseFloat(totalAreaDoors) - parseFloat(totalAreaWindows);
    console.log('totalArea, totalArea', totalArea);
    const quantityOfCans = InkCanCalculation(totalArea);
    console.log('quantityOfCans, quantityOfCans', quantityOfCans);

    answerNumberCans(quantityOfCans, totalArea);
}

export default CalculationInk;