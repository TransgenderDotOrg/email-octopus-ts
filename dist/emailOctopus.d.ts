import { ApiKeyInvalidError } from "./errors/ApiKeyInvalidError";
import { EmailOctopusError } from "./errors/EmailOctopusError";
import { InvalidParametersError } from "./errors/InvalidParametersError";
import { MemberExistsWithEmailAddressError } from "./errors/MemberExistsWithEmailAddressError";
import { NotFoundError } from "./errors/NotFoundError";
import { UnauthorisedError } from "./errors/UnauthorisedError";
export { ApiKeyInvalidError, EmailOctopusError, InvalidParametersError, MemberExistsWithEmailAddressError, NotFoundError, UnauthorisedError, };
export declare const emailOctopus: (apiKey: string) => {
    lists: {
        getList: (props: {
            listId: string;
        }) => Promise<import("./lists/types").List>;
        getAllLists: (props: {
            limit?: number | undefined;
            page?: number | undefined;
        }) => Promise<{
            data: import("./lists/types").List[];
            paging: import("./lists/types").Paging;
        }>;
        createList: (props: {
            name: string;
        }) => Promise<import("./lists/types").List>;
        getAllContacts: (props: {
            listId: string;
            limit?: number | undefined;
            page?: number | undefined;
        }, options?: {
            autoPaginate?: boolean | undefined;
        } | undefined) => Promise<import("./types").Contact[]>;
        getContactOfList: (props: {
            listId: string;
            memberId: string;
        }) => Promise<import("./types").Contact>;
        createContact: (props: import("./lists/createContact").CreateContactProps) => Promise<import("./types").Contact>;
        deleteContact: (props: import("./lists/deleteContact").DeleteContactProps) => Promise<void>;
        updateContactOfList: (props: import("./lists/updateContactOfList").UpdateContactOfListProps) => Promise<import("./types").Contact>;
    };
};
