Feature: login functionality
@validLogin 
Scenario: Successfull login


Given The user is on the login page
When The user enters valid username and valid password
And The user clicks the login button
Then The user should navigate to the inventory page

#Cucumber (Gherkin) Full Support (color change of keywords)
#Define in step-defenitions file

Scenario: Invalid Login

Given The user is on the login page
When The user enters invalid username and invalid password
And The user clicks the login button
Then An error message should be displayed

#Any no.of scenarios can be added...tagname smoke-assign tag-run specific tests..(smoke,sanity,regression etc...custom tags)
