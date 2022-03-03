
export interface JwtToken {
    authorities: string[];
    client_id: string;
    cuid: string;
    exp: number;
    jti: string;
    meid: number;
    name: string;
    organization: string;
    passwordModifiedDate: string;
    scope: string[];
    user_name: string;
    token: string;
}