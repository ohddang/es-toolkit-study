import { countBy } from "es-toolkit";

// PropertyKey is a built-in type in TypeScript that represents string | number | symbol.
// K extends PropertyKey means that K can be a string, number, or symbol.
// mapper: (item: T) => K means that the mapper function should return a value of type K.
// Record<K, number> is a built-in type in TypeScript that represents an object with keys of type K and values of type number.
{
    const countBy = <T, K extends PropertyKey>(arr: T[], mapper: (item: T) => K): Record<K, number> => {
        return arr.reduce((acc, item) => {
            const key = mapper(item);
            acc[key] = (acc[key] || 0) + 1;
            return acc;
        }, {} as Record<K, number>);
    }

    const array = [1, 2, 3, 4, 5, 6];
    const result = countBy(array, x => (x % 2 === 0) ? "even" : "odd");

    console.log(result); // { odd: 3, even: 3 }
}