---

## About

express cli helper is a command-line interface tool that helps you to generates an express project
structure pre-configured with the most commonly used packages to speed up your development workflow.
Instead of wasting time setting up your project structure, express-cli-helper does the heavy lifting
FOR YOU with best-practice architectural patterns to encourage well-structured apps.

## Installation

**npm install -g express-cli-helper**

## Features

- Preconfigured database driver (Mongoose and Sequelize)
- Typescript support
- Generate Models, Controllers, Routes, Services and Test files directly from the command
- Easy exception handling
- Beautiful clear code structure
- Integrated Testing tool
- Eslint and Prettier Formatting
- Integrated Basic Security e.t.c

## Quick Start

1.  Install the package globally **npm install -g express-cli-helper**
2.  Open your command line tool and type the following command to create a new project **exp-cli
    create project-name** _Subsitute "project-name" with the name of your project._

3.  Select your preferred language (Javascript or Typescript) and Database Driver (Mongoose or
    Sequelize)
4.  Once project is installed, configure your environment variables

## Commands

| Commands                |                                      Description                                      |                     Example |
| ----------------------- | :-----------------------------------------------------------------------------------: | --------------------------: |
| create                  |                                 Creates a new project                                 | exp-cli create project-name |
| -m or --model           |                       Create a new model in the model directory                       |             exp-cli -m post |
| -c or --controller      |                  Create a new controller in the controller directory                  |             exp-cli -c post |
| -s or --service         |                     Create a new service in the service directory                     |             exp-cli -s post |
| -r or --route           |                       Create a new route in the route directory                       |             exp-cli -r post |
| -R or --resource        |   Create a new route, model, controller and service in their respective directories   |             exp-cli -R post |
| -u or --utility         |                   Create a new utility file in the utils directory                    |    exp-cli -u random-string |
| -M or --middleware      |                  Create a new middleware in the middleware directory                  |             exp-cli -M auth |
| -V or --validator       |                Create a new validator file in the validator directory                 |   exp-cli -v user-validator |
| -v or --version         |                            Get express-cli-helper version                             |                  exp-cli -v |
| -i or --interface       | Create a new interface file in the interface directory (Available only on Typescript) |             exp-cli -i post |
| -U or --unittest        |                   Create a new unit test file in the test directory                   |             exp-cli -U post |
| -I or --integrationtest |               Create a new integration test file in the test directory                |             exp-cli -I post |
| -T or --test            |                         Create new unit and integration test                          |             exp-cli -U post |
| -C or --config          |                   Create a new config file in the config directory                    |             exp-cli -C mail |
