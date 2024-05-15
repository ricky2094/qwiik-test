import {test, expect} from '@playwright/test'
import { request } from 'http'
import {faker} from '@faker-js/faker'

const randomEmail = faker.internet.email();
const randomName = faker.person.fullName();

test.describe.parallel("API Testing", () => {
    const baseUrl = 'https://gorest.co.in'
    const baseUrlReqres = 'https://reqres.in'

    test(" Get user details - assert response", async({request}) =>{
        const response = await request.get(`${baseUrl}/public/v2/users/2934527`)
        const responseBody = JSON.parse(await response.text())
        expect(response.status()).toBe(200)
        expect(responseBody.id).toBe(2934527)
        expect(responseBody.gender).toBe('female')
    })

    test(" Create new users - assert response", async({request}) =>{
        const response = await request.post(`${baseUrl}/public/v2/users`,{
            data:{
                email: randomEmail,
                name: randomName,
                gender: 'male',
                status: 'active'
            },
        })
        const responseBody = JSON.parse(await response.text())
        console.log(responseBody)
        expect(response.status()).toBe(201)
        expect(response.status()).toBeTruthy()
        expect(responseBody.gender).toBe('male')
        expect(responseBody.status).toBe('active')
    })

    test.only(" Update user details - assert response", async({request}) =>{
        
        const response = await request.put(`${baseUrlReqres}/api/users/2`,{
            data:{
                name: randomName,
            },
        })
        const responseBody = JSON.parse(await response.text())
        console.log(responseBody)
        expect(response.status()).toBe(200)
        expect(responseBody.name).toBe(randomName)
        expect(responseBody.updatedAt).toBeTruthy()
    })

})