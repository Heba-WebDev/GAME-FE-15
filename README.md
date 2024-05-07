# Welcome to iCallon's Frontend codebase

**iCallon** is a word-based multiplayer gaming app designed to provide an engaging and entertaining experience for players of all ages.

# Introduction

This repo hosts the Frontend of iCallon

## Getting started

#### First clone the repo

```bash

git  clone  https://github.com/learnable-2023/GAME-FE-15.git

```

#### Install all dependencies

```bash

npm  install

```

#### Run the development server:

```bash

npm  run  dev

```

## Branches

- **dev** -> pull request in this branch for everything from features to bugs

- **main** -> **shouldn't be touched**, this is what will run in production.

## Contribution Guidelines

1. Clone the repo `https://github.com/learnable-2023/GAME-FE-15.git`.

2. Create a new branch for the task you were assigned to, eg `(Feat/Bug/Fix/Chore)/Ticket-title` : `git checkout -b feat/Sign-up-ui`

3. After making changes, do `git add .`

4. Commit your changes with a descriptive commit message : `git commit -m "your commit message"`.

5. To make sure there are no conflicts, run `git pull origin dev`.

6. Push changes to your new branch, run `git push -u origin feat/Sign-up-ui`.

7. Create a pull request to the `develop` branch.

8. Ensure to describe your pull request.

9. > If you've added code that should be tested, add some test examples.

## Technologies used

* Next.js - JavaScript
* Tailwind CSS

### _Commit CheatSheet_

| Type     |                          | Description                                                                                                 |
| -------- | ------------------------ | ----------------------------------------------------------------------------------------------------------- |
| feat     | Features                 | A new feature                                                                                               |
| fix      | Bug Fixes                | A bug fix                                                                                                   |
| docs     | Documentation            | Documentation only changes                                                                                  |
| refactor | Code Refactoring         | A code change that neither fixes a bug nor adds a feature                                                   |
| perf     | Performance Improvements | A code change that improves performance                                                                     |
| test     | Tests                    | Adding missing tests or correcting existing tests                                                           |
| build    | Builds                   | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         |
| ci       | Continuous Integrations  | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |
| chore    | Chores                   | Other changes that don't modify , frontend or test files                                                     |
| revert   | Reverts                  | Reverts a previous commit                                                                                   |

> _Sample Commit Messages_

- `chore: Updated README file` := `chore` is used because the commit didn't make any changes to the , frontend or test folders in any way.
- `feat: Added plugin info endpoints` := `feat` is used here because the feature was non-existent before the commit.

## License

MIT
