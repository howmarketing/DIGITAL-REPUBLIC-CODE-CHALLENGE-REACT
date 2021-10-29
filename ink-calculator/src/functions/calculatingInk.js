const doors = .8 * 1.9;
const windows = 2 * 1.2;
const liter = parseInt(5);

const CalculationInk = () => {
    
    const wallWidth = document.querySelectorAll('#width');
    const wallHeight = document.querySelectorAll('#height');
    const numberWindows = document.querySelectorAll('#windows');
    const numberDoors = document.querySelectorAll('#doors');
    const App = document.querySelector('.App');
    let subTotalArea = 0;
    let totalAreaDoors = 0;
    let totalAreaWindows = 0;
    for( let index = 0; index < 4; index += 1) {
        subTotalArea += parseFloat(wallHeight[index].value) * parseFloat(wallWidth[index].value);
    }
    for( let index = 0; index < numberWindows.length; index += 1) {
        totalAreaWindows += parseFloat(numberWindows[index].value) * parseFloat(windows);
    }
    for( let index = 0; index < numberDoors.length; index += 1) {
        totalAreaDoors += parseFloat(numberDoors[index].value) * parseFloat(doors);
    }
    let totalArea = parseFloat(subTotalArea) - parseFloat(totalAreaDoors) - parseFloat(totalAreaWindows);
    const measure = document.querySelectorAll('h2');
    if (measure) { 
        measure.forEach((item) => item.remove());
    }    
        const wallArea = document.createElement('h2');
        wallArea.innerText = `A área total a ser pintada é de ${ totalArea.toFixed(2) } m2 \n
        e será necessário ${ (totalArea / liter).toFixed(2) } litros de tinta para pintar`;
        App.appendChild(wallArea);
}

export default CalculationInk;