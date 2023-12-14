import { List, Paging } from "./types";
type GetAllListProps = {
    limit?: number;
    page?: number;
};
type AllLists = {
    data: Array<List>;
    paging: Paging;
};
export declare const getAllLists: (apiKey: string) => (props: GetAllListProps) => Promise<AllLists>;
export {};
