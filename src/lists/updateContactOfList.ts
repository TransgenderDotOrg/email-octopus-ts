import axios from "axios";
import { EmailOctopusError } from "../emailOctopus";
import { handleApiGlobalAxiosErrors } from "../handlers/apiGlobalAxiosErrorHandler";
import { Contact, ApiWideErrorResponses } from "../types";
import { MemberNotFoundError } from "../errors/MemberNotFoundError";

export type UpdateContactOfListProps = {
  listId: string;
  memberId: string;
  emailAddress?: string;
  fields?: Record<string, unknown>;
  tags?: { [key: string]: boolean };
  status?: "SUBSCRIBED" | "UNSUBSCRIBED" | "PENDING";
};

type UpdateContactOfListErrorResponse = {
  code: "MEMBER_NOT_FOUND";
  message: string;
};

export const updateContactOfList =
  (apiKey: string) =>
  async (props: UpdateContactOfListProps): Promise<Contact> => {
    try {
      const response = await axios.put<Contact>(
        `https://emailoctopus.com/api/1.6/lists/${props.listId}/contacts/${props.memberId}`,
        {
          api_key: apiKey,
          ...(props.emailAddress && { email_address: props.emailAddress }),
          ...(props.fields && { fields: props.fields }),
          ...(props.tags && { tags: props.tags }),
          ...(props.status && { status: props.status }),
        },
      );
      return response.data;
    } catch (error) {
      const isAxiosError = axios.isAxiosError(error);
      if (isAxiosError && error.response) {
        const errorData = error.response?.data as
          | ApiWideErrorResponses
          | UpdateContactOfListErrorResponse;
        if (errorData.code === "MEMBER_NOT_FOUND") {
          throw new MemberNotFoundError();
        }
        handleApiGlobalAxiosErrors(error, errorData);
      }
      throw new EmailOctopusError();
    }
  };
