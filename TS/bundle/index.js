"use strict";
let namaSaya = "Araechpaet";
let userName = 123;
let isDead = false;
// array biasa
let pacarSaya;
pacarSaya = ["Pertama", "Kedua"];
// tuple array
let selingkuhanSaya;
selingkuhanSaya = ["Pertama", 123, false];
console.log(namaSaya);
console.log({ userName });
console.log({ isDead });
console.log({ pacarSaya });
console.log({ selingkuhanSaya });
let temanKita;
temanKita = {
    nama: "Kiki",
    isKampret: false,
    hutang: 0
};
console.log({ temanKita });
// ==========================================================================================================
//function
function add(x, y) {
    return `${x} ditambah dengan ${y} adalah ${x + y}`;
}
console.log(add(20, 30));
const bounder = "===========================================================================================================================";
console.log(bounder);
let sayaManusia;
sayaMansuia: "Araechpaet";
let agness;
agness = "Agness mo";
console.log(agness);
console.log(bounder);
function createIntel(processor) {
    console.log(`
        terimakasih ${processor.brand}, anda telahberhasil membuat prossesor dengan detail berikut:

        nama base model: ${processor.baseModel}
        nama model: ${processor.modelName}
        total core: ${processor.coreTotal}
        ukuran clock: ${processor.clockSpeed}
        turbo boost: ${processor.turboBoost}
        `);
}
function createAMD(processor) {
    console.log(`
        terimakasih ${processor.brand}, anda telahberhasil membuat prossesor dengan detail berikut:

        nama base model: ${processor.baseModel}
        nama model: ${processor.modelName}
        total core: ${processor.coreTotal}
        ukuran clock: ${processor.clockSpeed}
        precision boost enable: ${processor.precisionBoost ? processor.precisionBoost : "tidak ada"}
        `);
}
const corei5 = {
    brand: "intel",
    baseModel: "core i5",
    modelName: "i5-11350f",
    clockSpeed: 6,
    coreTotal: 2,
    turboBoost: true,
};
const ryzen1 = {
    brand: "AMD",
    baseModel: "ryzen 1",
    modelName: "r-111x",
    clockSpeed: 4,
    coreTotal: "QuadCore",
};
const ryzen3 = {
    brand: "AMD",
    baseModel: "ryzen 1",
    modelName: "r-111x",
    clockSpeed: 4,
    coreTotal: "QuadCore",
    precisionBoost: "yes, ready to overclock",
};
createIntel(corei5);
createAMD(ryzen1);
createAMD(ryzen3);
