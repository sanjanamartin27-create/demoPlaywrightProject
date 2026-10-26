#parameterized bdd+hooks
Feature: Inventory page validation
Scenario: Validating itemc ount for different users

Given The user is on Application login page
When The user enters username "<usernameval>" and password "<passwordval>"
Then The user should see result "<result>"
And Inventory item count should be "<itemcount>"


Examples:
| usernameval     | passwordval  | result            | itemcount |
| standard_user   | secret_sauce | Inventory Page    |         6 |
| locked_out_user | secret_sauce | Error message     |         0 |
| problem_user    | secret_sauce | Inventory Page    |         6 |

