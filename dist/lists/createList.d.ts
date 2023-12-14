import { List } from "./types";
type CreateListProps = {
    name: string;
};
export declare const createList: (apiKey: string) => (props: CreateListProps) => Promise<List>;
export {};
