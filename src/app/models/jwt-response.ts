export interface JwtResponseI {
    dataUser:{
        id: number,
        user: string,
        accessToken: string,
        expiresIn: string
    }
}
