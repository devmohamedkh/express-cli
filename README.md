---

**npm install -g express-cli**

> speed up your application development with express-cli

## About

express-cli is a command line tool that generates an express project structure preconfigured with
most commonly used packages that can speed up your development workflow. Rather than wasting time
setting up your project structure, express-cli does the heavy lifting so that you can concentrate on
building that awesome application

## Features

- [x] Preconfigured database driver (Mongoose and Sequelize)
- [x] Typescript support
- [x] Generate Models, Controllers, Routes, Services and Test files directly from the command
- [x] Easy exception handling
- [x] Beautiful clear code structure
- [x] Integrated Testing tool
- [x] Eslint and Prettier Formatting
- [x] Integrated Basic Security e.t.c

## Getting Started

1.  Ensure [Node.js and NPM](https://nodejs.org/en/download/) is installed on your computer
2.  Install the package globally **npm install -g express-cli**
3.  Open your command line tool and type the following command to create a new project **exp-cli
    create awesome-project**

    _Subsitute "awesome-project" with the name of your project._

4.  Select your preferred language (Javascript or Typescript) and Database Driver (Mongoose or
    Sequelize)
5.  Once project is installed, configure your environment variables

Voila!!! you are set to start creating an awesome application 🚀🚀🚀

## Commands

| Commands                |                                      Description                                      |                        Example |
| ----------------------- | :-----------------------------------------------------------------------------------: | -----------------------------: |
| create                  |                                 Creates a new project                                 | exp-cli create awesome-project |
| -m or --model           |                       Create a new model in the model directory                       |                exp-cli -m post |
| -c or --controller      |                  Create a new controller in the controller directory                  |                exp-cli -c post |
| -s or --service         |                     Create a new service in the service directory                     |                exp-cli -s post |
| -r or --route           |                       Create a new route in the route directory                       |                exp-cli -r post |
| -R or --resource        |   Create a new route, model, controller and service in their respective directories   |                exp-cli -R post |
| -u or --utility         |                   Create a new utility file in the utils directory                    |       exp-cli -u random-string |
| -M or --middleware      |                  Create a new middleware in the middleware directory                  |                exp-cli -M auth |
| -V or --validator       |                Create a new validator file in the validator directory                 |      exp-cli -v user-validator |
| -v or --version         |                                Get express-cli version                                |                     exp-cli -v |
| -i or --interface       | Create a new interface file in the interface directory (Available only on Typescript) |                exp-cli -i post |
| -U or --unittest        |                   Create a new unit test file in the test directory                   |                exp-cli -U post |
| -I or --integrationtest |               Create a new integration test file in the test directory                |                exp-cli -I post |
| -T or --test            |                         Create new unit and integration test                          |                exp-cli -U post |
| -C or --config          |                   Create a new config file in the config directory                    |                exp-cli -C mail |
