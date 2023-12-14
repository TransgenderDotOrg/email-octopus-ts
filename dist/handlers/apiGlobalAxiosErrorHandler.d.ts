import { AxiosError } from "axios";
import { ApiWideErrorResponses } from "../types";
export declare const handleApiGlobalAxiosErrors: (error: AxiosError, errorData: ApiWideErrorResponses) => void;
