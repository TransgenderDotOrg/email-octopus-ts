export type DeleteContactProps = {
    listId: string;
    memberId: string;
};
export declare const deleteContact: (apiKey: string) => (props: DeleteContactProps) => Promise<void>;
