// import { at } from "es-toolkit";

{
    const atNew = <T>(array: T[], indexes: number[]): T[] => {
        return indexes.map((index) => array[index]);
    }
    
    const numbers = [10, 20, 30, 40, 50];
    const result = atNew(numbers, [1, 2, 3]);
    
    console.log(result); // [20, 30, 40]
}

