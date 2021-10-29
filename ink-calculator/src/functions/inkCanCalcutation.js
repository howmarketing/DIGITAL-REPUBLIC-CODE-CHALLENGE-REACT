const gallon = 18;
const bigCan = 3.6;
const mediumCan = 2.5;
const smallCan = 0.5;

let gallons = 0;
let bigCans = 0;
let mediumCans = 0;
let smallCans = 0;
let rest;

const measureInkMeters = 5;

const InkCanCalculation = (totalArea) => {
    const litersNeeded = totalArea / measureInkMeters;
    if (litersNeeded >= gallon) {
        gallons = parseInt( litersNeeded / gallon );
        rest = litersNeeded % gallon;
        bigCans = parseInt( rest / bigCan );
        rest = rest % bigCan;
        mediumCans = parseInt( rest / mediumCan );
        rest = rest % mediumCan;
        smallCans = Math.ceil(parseInt( rest / smallCan ));
        console.log(gallons, bigCans, mediumCans, smallCans);
        return [gallons, bigCans, mediumCans, smallCans, litersNeeded];

    } else if (litersNeeded >= bigCan) {
        bigCans = parseInt( litersNeeded / bigCan );
        rest = rest % bigCan;
        mediumCans = parseInt( rest / mediumCan );
        rest = rest % mediumCan;
        smallCans = Math.ceil(parseInt( rest / smallCan ));
        console.log(bigCans, mediumCans, smallCans);
        return [bigCans, mediumCans, smallCans, litersNeeded];

    } else if (litersNeeded >= mediumCan) {
        mediumCans = parseInt( litersNeeded / mediumCan );
        rest = rest % mediumCan;
        smallCans = Math.ceil(parseInt( rest / smallCan ));
        console.log(mediumCans, smallCans);
        return [mediumCans, smallCans, litersNeeded];

    } else {
        smallCans = Math.ceil( litersNeeded / smallCan );
        console.log(smallCans);
        return [smallCans, litersNeeded];
    }
}

export default InkCanCalculation;