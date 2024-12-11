// import { compact } from "es-toolkit";

// Exclude<T, U> is a built-in conditional type that removes types from T that are assignable to U.
{
    const compact = <T>(arr: T[]): Array<Exclude<T, false | null | 0 | 0n | '' | undefined>> => {
        return arr.filter(Boolean) as Array<Exclude<T, false | null | 0 | 0n | '' | undefined>>;
    }

    const result = compact([0, 1, false, 2, '', 3, undefined, null, 0n]); // [1, 2, 3]
    console.log(result);
}
