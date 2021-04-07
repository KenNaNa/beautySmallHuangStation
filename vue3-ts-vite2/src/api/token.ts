import jwt from 'jsonwebtoken'
const jwtScrect: string = "accessToken"
const genToken = (username: string, password: string): string => {
    const token: string = jwt.sign({ username, password }, jwtScrect, { expiresIn: '24h' })

    return token
}

export default {
    genToken
}
