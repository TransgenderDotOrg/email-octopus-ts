import { List } from "./types";
type GetListProps = {
    listId: string;
};
export declare const getList: (apiKey: string) => (props: GetListProps) => Promise<List>;
export {};
