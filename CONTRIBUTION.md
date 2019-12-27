## How to contribute

We are a completely remote team spread across various continents and to ensure a great work culture, and to promote the feeling of responsibility, we have put in the following standards

### Where to find your next task?

You can find your tasks [here](https://github.com/sparrow-marketing/sparrow-frontend/projects/1).

## Prerequisites and accesses

Please install the following softwares before starting to work on this project

1. Git - We use this for version management
2. You would also need all the required dependencies for the Create React App.

We rely on the following tools for working
| Tools | Point of contact |
| ------------- |:----------------:|
| Zeplin | Braden |
| Github | Braden |
| Slack | Braden |

### How to prioritize the tasks

To simplify this, we have already tagged the tasks according to their priorities.

1. `hotfix` - Tickets with the highest priority and has to be addressed immediately as it affects our users
2. `high-priority` - Tickets with the highest priority and has to be addressed immediately.
3. `medium-priority` - Tickets which needs a fair amount of attention but always is prioritized second to hotfix and high-priority tickets
4. `low-priority` - Tickets that can be worked on later and neednt be addressed immediately
5. `good first issue` - Tickets that can be worked by developers who needs to get onboarded to the project. This would be a good and easy pick for them
6. `bugfix`, `feature` - Marks the scope of a ticket as a butfix or a feature.
7. `design` - Categorize a ticket which is more intensive on design implementation
8. `Backlog` - These are tickets that had been identified already but is not yet ready for development
9. `Discussion` - These are tickets which would be for product decision making. Once done, the notes from the meeting are logged and necessary tickets are created
10. `Documentation` - Tickets related to documentation

Product/project managers have to make sure that the issues are added [here](https://github.com/sparrow-marketing/sparrow-frontend/issues) and once they are ready for development, it is moved to the respective board. The developers have to see to only the respective project board for working.

## How to start working

At Sparrow Marketing, the developers are free to pick their tickets. We use Github projects to manage our work.

Please ensure that once you have selected a ticket to work on, it is assigned to your name as shown [here](https://drive.google.com/file/d/1NHNpZEnyQFIf-o5Lq4x--ozf3_IBFPWI/view?usp=sharing) in the video. Also dont forget to move the ticket to respective columns in the project based on its progress.

1. `To do` - Developers can pick their tickets from here. Everything here should be unassigned prior to moving it to `In progress` unless under special circumstances.
2. `In progress` - Ticket should be moved here when the developer starts working on it. Also when there is a code review change, please move the ticket back to this.
3. `In review` - Move the ticket here once the ticket is ready for a peer code review. The developer can assign the PR to any other developer to do the code review. This is to ensure code quality and prevent bugs.
4. `Done` - The definition of done is when everything in the acceptance criteria is accomplished. Once the code review passes, and all the tests go green, the developer can merge the ticket to `develop` branch and then mark the ticket as done and then close the ticket.

### Branch naming guidelines

We rely on `develop` branch in git as the base branch. Hence every new branch has to be checked out from the develop branch. The branches should be named as `<issue_no>/<ticket_type>/<ticket_description>`.

`issue_no` - the issue number associated with the ticket
`ticket_type` - Can be `hotfix`, `bugfix`, `feature`. This is to make sure that if the ticket needs an immediate attention for the code reivew. This can be deterimined based on the label on the issue whether its a bugfix or a feature and if none is provided, you can make a choice of your own.
`ticket_description` - A short description of the ticket

```
git checkout develop
git checkout -b <issue_no>/<ticket_type>/<ticket_description>.
```

### Pull requests and Code reviews

Once the ticket is worked on, raise a pull request against the `develop` branch. Do not merge it immediately but you have to make sure another developer reviews a PR before it gets merged.
On merging, you can use https://gitmoji.carloscuesta.me/ to make it more intutive, and also make sure it has the format `<issue_no>/<ticket_type>/<ticket_description>`.

**Please make sure you your PR meets the acceptance criteria. Also make sure that you dont work on multiple issues in the same ticket**

Eg: `✨💄 41/reusable form section (#42)`

The developer is also responsible for squashing and merging and is also responsible for moving the ticket to "Done" in Github Project and also closing the issue.
