'use strict';

class Animal {
    constructor(name, species, habitat) {
        this.name = name;
        this.species = species;
        this.habitat = habitat;
    }

    describe() {
        return `${this.name} — це ${this.species}, яке живе у ${this.habitat}.`;
    }

    eat() {
        return `${this.name} зараз їсть свою їжу.`;
    }

    rest() {
        return `${this.name} зараз відпочиває.`;
    }
}

class FlyingAnimal extends Animal {
    constructor(name, species, habitat, wingSpan) {
        super(name, species, habitat);
        this.wingSpan = wingSpan;
    }

    fly() {
        return `${this.name} летить, розмахуючи крилами довжиною ${this.wingSpan} метрів.`;
    }
}

class Eagle extends FlyingAnimal {
    #visionRange;

    constructor(name, habitat, wingSpan, flightSpeed) {
        super(name, "Орел", habitat, wingSpan);
        this.flightSpeed = flightSpeed;
        this.#visionRange = 3;
    }

    hunt() {
        return `${this.name} полює з висоти, використовуючи швидкість ${this.flightSpeed} км/год.`;
    }

    revealVisionRange() {
        return `${this.name} може бачити на відстань до ${this.#visionRange} км.`;
    }
}

class Bat extends FlyingAnimal {
    #energyLevel;
    #echolocationFrequency;

    constructor(name, habitat, wingSpan) {
        super(name, "Кажан", habitat, wingSpan);
        this.#energyLevel = 100;
        this.#echolocationFrequency = 120;
    }

    useEcholocation() {
        return `${this.name} використовує ехолокацію з частотою ${this.#echolocationFrequency} кГц для навігації.`;
    }

    adjustEnergyLevel(timeOfDay) {
        if (timeOfDay === 'ніч') {
            this.#energyLevel = 100;
            return `${this.name} активний і готовий до полювання. Рівень енергії: ${this.#energyLevel}.`;
        } else {
            this.#energyLevel = 50;
            return `${this.name} відпочиває вдень. Рівень енергії: ${this.#energyLevel}.`;
        }
    }

    revealEcholocationFrequency() {
        return `${this.name} має частоту ехолокації ${this.#echolocationFrequency} кГц.`;
    }
}

class Lion extends Animal {
    #prideSize;

    constructor(name, habitat, roarVolume, huntingSkill) {
        super(name, "Лев", habitat);
        this.roarVolume = roarVolume;
        this.huntingSkill = huntingSkill;
        this.#prideSize = 15;
    }

    hunt() {
        return `${this.name} полює, використовуючи свої навички полювання рівня ${this.huntingSkill}.`;
    }

    roar() {
        return `${this.name} ричить на гучності ${this.roarVolume} децибел.`;
    }

    revealPrideSize() {
        return `${this.name} належить до прайду з ${this.#prideSize} левів.`;
    }
}

class Dolphin extends Animal {
    #podSize;

    constructor(name, habitat, swimSpeed, intelligenceLevel) {
        super(name, "Дельфін", habitat);
        this.swimSpeed = swimSpeed;
        this.intelligenceLevel = intelligenceLevel;
        this.#podSize = 20;
    }

    swim() {
        return `${this.name} пливе зі швидкістю ${this.swimSpeed} км/год.`;
    }

    play() {
        return `${this.name} грається зі своєю зграєю, демонструючи ${this.intelligenceLevel} рівень інтелекту.`;
    }

    revealPodSize() {
        return `${this.name} живе у зграї, яка налічує ${this.#podSize} дельфінів.`;
    }
}

const eagle = new Eagle("Гаррі", "горах", 2.5, 160);
const bat = new Bat("Нічник", "печері", 1.2, "нічний");
const lion = new Lion("Сімба", "саванні", 110, "експерт");
const dolphin = new Dolphin("Фліппер", "океані", 60, "високий");

// Орел
console.log(eagle.describe());
console.log(eagle.eat());
console.log(eagle.fly());
console.log(eagle.hunt());
console.log(eagle.revealVisionRange());

// Кажан
console.log(bat.describe());
console.log(bat.rest());
console.log(bat.fly());
console.log(bat.useEcholocation());
console.log(bat.revealEcholocationFrequency());
console.log(bat.adjustEnergyLevel('ніч'));
console.log(bat.adjustEnergyLevel('день'));

// Лев
console.log(lion.describe());
console.log(lion.eat());
console.log(lion.hunt());
console.log(lion.roar());
console.log(lion.revealPrideSize());

// Дельфін
console.log(dolphin.describe());
console.log(dolphin.rest());
console.log(dolphin.swim());
console.log(dolphin.play());
console.log(dolphin.revealPodSize());
