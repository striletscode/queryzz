import { Dispatch, SetStateAction } from 'react';
import { V as Value } from '../shared/queryzz.c9af6ff2.js';

interface Options {
    parse?: boolean;
    array?: boolean;
}
declare function useQuery<T extends Value>(key: string): [T | undefined, Dispatch<SetStateAction<T | undefined>>];
declare function useQuery(key: string, options: Options & {
    parse: false;
}): [string | undefined, Dispatch<SetStateAction<string | undefined>>];
declare function useQuery<T extends Value>(key: string, options: Options & {
    array: true;
}): [T[] | undefined, Dispatch<SetStateAction<T[] | undefined>>];
declare function useQuery(key: string, options: Options & {
    array: true;
    parse: false;
}): [string[] | undefined, Dispatch<SetStateAction<string[] | undefined>>];

export { useQuery };
