import axios from "axios";
import { EmailOctopusError } from "../errors/EmailOctopusError";
import { Paging } from "./types";
import { handleApiGlobalAxiosErrors } from "../handlers/apiGlobalAxiosErrorHandler";
import { Contact, ApiWideErrorResponses } from "../types";

type GetContactOfListProps = {
  listId: string;
  memberId: string;
};

export const getContactOfList =
  (apiKey: string) =>
  async (
    props: GetContactOfListProps,
  ): Promise<Contact> => {
    try {
        const response = await axios.get<Contact>(
          `https://emailoctopus.com/api/1.6/lists/${props.listId}/contacts/${props.memberId}`,
          {
            params: {
              api_key: apiKey,
            },
          },
        );

        return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const errorData = error.response?.data as ApiWideErrorResponses;
        handleApiGlobalAxiosErrors(error, errorData);
      }
      throw new EmailOctopusError();
    }
  };
