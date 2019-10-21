export function keyofTest() {

    console.log(':: KeyOf Test ::');

    type AnimalColors = 'red' | 'white' | 'black';

    interface Animal {
        name: string;
        age: number;
        color: AnimalColors;
    }

    // keyof
    type AnimalKeys = keyof Animal;

    type ageType = Animal['age'];
    type nameType = Animal['name'];
    type colorType = Animal['color'];

    // T[K] accesss operator
    function getPropValue<T, K extends keyof T>(obj: T, propName: K): T[K] {
        return obj[propName];
    }

    const cat: Animal = {
        name: 'kitty',
        age: 1,
        color: 'red'
    };
    const catColor = getPropValue(cat, "color");
    console.log(`catColor is [${catColor}]`);

    function getProperties<T, K extends keyof T>(obj: T, names: K[]): T[K][] {
        return names.map(name => obj[name]);
    }

    const catAgeAndName = getProperties(cat, ['name', 'age']);
    console.log(`catAgeAndName array [${catAgeAndName}]`);

}
