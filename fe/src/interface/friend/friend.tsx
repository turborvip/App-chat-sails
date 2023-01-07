export interface FindFriendPayload {
    userID:string;
    search: string;
    page?:number;
    pageSize?:number;
}