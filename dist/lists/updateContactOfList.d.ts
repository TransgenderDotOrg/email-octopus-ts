import { Contact } from "../types";
export type UpdateContactOfListProps = {
    listId: string;
    memberId: string;
    emailAddress?: string;
    fields?: Record<string, unknown>;
    tags?: Array<string>;
    status?: "SUBSCRIBED" | "UNSUBSCRIBED" | "PENDING";
};
export declare const updateContactOfList: (apiKey: string) => (props: UpdateContactOfListProps) => Promise<Contact>;
