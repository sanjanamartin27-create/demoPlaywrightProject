// API Testing (one of the adv of pw)Requests: get, post, delete, put, patch 
// Response code: 200 OK, 201 Created, 202 Accepted, 204 No Content, 400 Bad Request, 401 Unauthorized,
//  403: Forbidden, 404: Not Found,500: Internal ServerError, 503: Service Unavailable 

//Get request: to fetch users
import{test,expect} from '@playwright/test'
test('Get Request in API Testing',async({request})=>{
    const response=await request.get('https://jsonplaceholder.typicode.com/users/1')     //get
    expect(response.status()).toBe(200)
    const responseBody=await response.json() // to print response (convert to json then only print)
    console.log(responseBody)

})

//Post Request: Create a user 
test('Post in API',async({request})=>{
    const response=await request.post('https://jsonplaceholder.typicode.com/users',{    //post
    //to create a user
    data:{
        name:'Sanjana',
        email:'sanjana@gmail.com',
        id:'11'
    }})
    expect(response.status()).toBe(201)
    const responseBody=await response.json()
    console.log(responseBody)
})

//put patch delete then demo proj

//Patch Request: Partial update (eg: email or ph)
test('Patch Request in API Testing',async({request})=>{
    const response=await request.patch('https://jsonplaceholder.typicode.com/users/1',
    {
        data:{
            email:'updatedemail@gmail.com'
        }
    }    
    )
    expect(response.status()).toBe(200)

})

//Put Request: Entire data updation

test('Put Request in API Testing',async({request})=>{
    const response=await request.put('https://jsonplaceholder.typicode.com/users/1',
    {
        data:{
             "id": 11,
  "name": "Leanne Grahamm",
  "username": "Brett",
  "email": "Sincere@aprilt.biz",
  "address": {
    "street": "Kulas Lightt",
    "suite": "Apt. 5564",
    "city": "Gwenborought",
    "zipcode": "92998-3875",
    "geo": {
      "lat": "-37.3150",
      "lng": "81.1499"
    }
  },
  "phone": "1-770-036-8031 x56442",
  "website": "hildegardd.org",
  "company": {
    "name": "Romaguera-Cronaa",
    "catchPhrase": "Multi-layered client-server neural-neta",
    "bs": "harness real-time e-marketsa"
  }
        }
    })
    expect(response.status()).toBe(200)
})

//Delete:to delete a user
test.only('Delete Request in API Testing',async({request})=>{
    const response= await request.delete('https://jsonplaceholder.typicode.com/users/1')  //return 200 or 204 status code
    expect(response.status()).toBe(200)

})


//Sreenshot: capture screenshot when fails (realtime eg) 
//Reveal in file explorer to play the recorded video     //await loginButton.click() in e2e testing 


//Assignment
// Create login.spec.js create 4 testcases: username pass valid and invalid combo
//11 next: excel , retry mech,workers,bdd,jenkins,gitpush,codegen,copilot,allure report,Interview qa,
// faker,file upload download,custom fixture


//git config --global user.name "Sanjana"
//git config --global user.email "sanjanamartin27@gmail.com"
//git init  Initialized
//git status : check file