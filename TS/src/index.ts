let namaSaya: string = "Araechpaet";
let userName: number = 123;
let isDead: boolean = false;

// array biasa
let pacarSaya: string[];
pacarSaya = ["Pertama", "Kedua"];

// tuple array
let selingkuhanSaya: [string, number, boolean];
selingkuhanSaya = ["Pertama", 123, false];

console.log(namaSaya);
console.log({userName});
console.log({isDead});
console.log({pacarSaya});
console.log({selingkuhanSaya});

// ==========================================================================================================

// type data custom

type TemanType = {
    nama: string;
    isKampret: boolean;
    hutang: number;
}

let temanKita: TemanType;

temanKita = {
    nama: "Kiki",
    isKampret: false,
    hutang: 0
}

console.log({temanKita})

// ==========================================================================================================

//function

function add(x: number, y: number): string {
    return `${x} ditambah dengan ${y} adalah ${x + y}`;
}

console.log(add (20, 30));

const bounder = "===========================================================================================================================";
console.log(bounder);

type Wanita = string;
type Pria = string;
type Gender = Wanita | Pria;

let sayaManusia: Gender;

sayaMansuia: "Araechpaet";

let agness: Wanita;

agness = "Agness mo";

console.log(agness);

console.log(bounder);

type coreCount = 2 | 4 | 6 | 8 | 8 | 12;
type coreName = "DualCore" | "QuadCore" | "OctaCore" | "SuperCore";
type Core = coreCount | coreName;

interface iProsessor {
    brand: string;
    baseModel: string;
    modelName: string;
    coreTotal: Core;
    clockSpeed: number;
}

interface intel extends iProsessor {
    turboBoost: boolean;
}

interface AMD extends iProsessor {
    precisionBoost?: string;
}

function createIntel(processor: intel): void {
    console.log(`
        terimakasih ${processor.brand}, anda telahberhasil membuat prossesor dengan detail berikut:

        nama base model: ${processor.baseModel}
        nama model: ${processor.modelName}
        total core: ${processor.coreTotal}
        ukuran clock: ${processor.clockSpeed}
        turbo boost: ${processor.turboBoost}
        `)
}

function createAMD(processor: AMD): void {
    console.log(`
        terimakasih ${processor.brand}, anda telahberhasil membuat prossesor dengan detail berikut:

        nama base model: ${processor.baseModel}
        nama model: ${processor.modelName}
        total core: ${processor.coreTotal}
        ukuran clock: ${processor.clockSpeed}
        precision boost enable: ${processor.precisionBoost? processor.precisionBoost : "tidak ada"}
        `)
}

const corei5: intel = {
    brand: "intel",
    baseModel: "core i5", 
    modelName: "i5-11350f",
    clockSpeed: 6,
    coreTotal: 2, 
    turboBoost: true,
};

const ryzen1: AMD = {
    brand: "AMD",
    baseModel: "ryzen 1", 
    modelName: "r-111x",
    clockSpeed: 4,
    coreTotal: "QuadCore",
};

const ryzen3: AMD = {
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