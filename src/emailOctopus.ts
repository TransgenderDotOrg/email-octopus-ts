import { ApiKeyInvalidError } from "./errors/ApiKeyInvalidError";
import { EmailOctopusError } from "./errors/EmailOctopusError";
import { InvalidParametersError } from "./errors/InvalidParametersError";
import { MemberExistsWithEmailAddressError } from "./errors/MemberExistsWithEmailAddressError";
import { NotFoundError } from "./errors/NotFoundError";
import { UnauthorisedError } from "./errors/UnauthorisedError";
import { createContact } from "./lists/createContact";
import { createList } from "./lists/createList";
import { getAllContacts } from "./lists/getAllContacts";
import { getAllLists } from "./lists/getAllLists";
import { getList } from "./lists/getList";
import { deleteContact } from "./lists/deleteContact";
import { getContactOfList } from "./lists/getContactOfList";
import { updateContactOfList } from "./lists/updateContactOfList";

export {
  ApiKeyInvalidError,
  EmailOctopusError,
  InvalidParametersError,
  MemberExistsWithEmailAddressError,
  NotFoundError,
  UnauthorisedError,
};

export const emailOctopus = (apiKey: string) => {
  return {
    lists: {
      getList: getList(apiKey),
      getAllLists: getAllLists(apiKey),
      createList: createList(apiKey),
      getAllContacts: getAllContacts(apiKey),
      getContactOfList: getContactOfList(apiKey),
      createContact: createContact(apiKey),
      deleteContact: deleteContact(apiKey),
      updateContactOfList: updateContactOfList(apiKey),
    },
  };
};
