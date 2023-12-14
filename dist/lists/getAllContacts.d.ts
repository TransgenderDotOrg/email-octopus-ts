import { Contact } from "../types";
type GetAllContactsProps = {
    listId: string;
    limit?: number;
    page?: number;
};
type GetAllContactsOptions = {
    autoPaginate?: boolean;
};
export declare const getAllContacts: (apiKey: string) => (props: GetAllContactsProps, options?: GetAllContactsOptions) => Promise<Array<Contact>>;
export {};
