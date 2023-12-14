import { Contact } from "../types";
export type CreateContactProps = {
    listId: string;
    emailAddress: string;
    fields?: Record<string, unknown>;
    tags?: Array<string>;
    status?: "SUBSCRIBED" | "UNSUBSCRIBED" | "PENDING";
};
export declare const createContact: (apiKey: string) => (props: CreateContactProps) => Promise<Contact>;
