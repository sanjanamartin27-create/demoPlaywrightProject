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



//git config --global user.name "Sanjana"
//git config --global user.email "sanjanamartin27@gmail.com"
//git init  Initialized
//git status : check file
//git add . :add files
//git commit -m "Initial Commit"
//git remote add origin https://github.com/sanjanamartin27-create/demoPlaywrightProject.git
//git branch (master)====>>> git branch -M main (main)
//git push -u origin main  (to push)


//In future if any changes in files use these (already pushed)
//git add . :add files
//git commit -m "Initial Commit"
//git push



//19th mon in canada extended class
//DONE:
//WORKERS: Parallel execution eg 3 test 3 workers //run mult tests in parallel
//retry mech: flaky testcases : except mistakes in scripts,...eg:internet stability,system related->re execute:pass=>retry mechanism eg give 2
//codegen: record and generate script (cant find uniq locator,use: to understand)
//copilot: //limit, paid 
// excel read: call data from excel-> json   (excel need to convert to json structure)
//faker predefined class: generate random data eg: name,email,ph,city,zip,company,credit card,random number,random string npm install @faker-js/faker

// bdd: Behavior Driven Development: plain english text -Gherkin syntax,framework cucumber 
//install cucumber: npm install @cucumber/cucumber (1.feature file(Gherkin syntax),step defenition file)()

//BDD keywords: 1.Feature: functionality being tested, 2.Scenario: describes test case
//3.Given: precondition(initial condition/setup), 4.When: action performed by user, 5.Then: expected result, 6.And: additional step/action

//allure report: Reporting tool , install packages: npm install -D allure-playwright, npm install -D allure-commandline,html report generation:npx allure generate allure-results --clean
//to open allure report: npx allure open allure-report // open/serve 

//Hooks: block of code executed at specific points during the test execution 
// Types:
// 1. Beforeall: once before all scenarios 
// 2.Afterall:once after all scenarios
//3.before:before every scenario
//4.after:after every scenario
//5.before step (steps given when then)
//6.After step

//Pending topics:,,Interview qa,,file upload,jenkins continue

//BDD Tags: label

//Assignment:
// push code to github>>>>, download jenkins, git vs gihub-install git locally, java 
//jenkins:CI/CD tool - 
//custom fixture: eg page.. 
