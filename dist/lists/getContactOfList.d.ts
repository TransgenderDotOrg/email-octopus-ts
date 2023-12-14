import { Contact } from "../types";
type GetContactOfListProps = {
    listId: string;
    memberId: string;
};
export declare const getContactOfList: (apiKey: string) => (props: GetContactOfListProps) => Promise<Contact>;
export {};
