export type User = { name: string, email: string}
export type UserList = Array<User & {password: string}>
import usersJson from '@/users.json'

//Fake endpoints
export async function loginEnd(email: string, password: string){
    return usersJson.find(u => u.password === password && u.email === email)
}

export async function getUserEnd() {
    const request = await fetch('/current.json')
    const user: User = await request.json()
    return user
}