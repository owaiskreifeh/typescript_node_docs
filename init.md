# Initialize project

## GIT and NPM

`$ git init && npm init`

## NPM Modules and types

### NPM global modules

`$ npm i -g typescript tslint mocha nodemon`

### NPM dev modules

`$ npm i -D typescript dotenv ts-node`

     typescript  again for local settings

### NPM @types

`npm i @types/node @types/mocha @types/chai`

## Project configurations and linting

1. Run init on typescript in project root

    `$ typescript --init`

2. Edit the created __tsconfig__ file with those options

    ```json
    { // tsconfig.json
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "outDir": "./dist",
        "rootDir": "./src",
        "strict": true,
        "noImplicitAny": true,
        "baseUrl": "./src",
        "paths": {
        "@App": ["src"],
        "@Modules": ["src/Modules"]
        },
        "esModuleInterop": true
    }
    }
    ```

3. Create __mocharc.json__ file in the project root
4. Add the following to __mocharc.json__

    ```json
    { // mocharc.json
        "require":[
            "./node_modules/ts-node/register"
        ],
        "spec": "test/**/*.ts",
        "full-trace": "false"
    }
    ```

5. Initialize _tslint_ module for the project

    `$ ./node_modules/tslint/bin/tslint --init`

## VSCode extensions and configuring

1. Install _Mocha sidebar_ extension from vscode store
    1. press <kbd>ctrl+⇧+p to</kbd> launch VSCode quick open
    2. type the following command

        `ext install  maty.vscode-mocha-sidebar`
    3. Or from the extensions tab search for _Mocha sidebar_

2. Open VSCode json settings
    1. press <kbd>ctrl+⇧+p to</kbd> launch VSCode quick open
    2. click on -Open settings (JSON)
3. Add the following to the settings file

    ```JSON
    { // settings.json
        //... settings and options

        "mocha.requires": [
            "ts-node/register"
        ],

        //... the rest of the settings
    }

## Folder structure

```bash
project_root/
 ├──dist/
 ├──node_modules/
 ├──src/
 |  ├──App.ts
 |  └──Modules/
 |    └──SomeModule.ts
 └──test/
   └──src/
      ├──App.test.ts
      └──Modules/
        └──SomeModule.test.ts
 ├──.gitignore
 ├──package.json
 ├──tsconfig.json
 ├──mocharc.json
 └──tslint.json
```

## Compiling and testing

### Compile TypeScript to JavaScript

Running >> `$ tsc` command from the terminal will compile the .ts files with the options specified in __tsconfig.json__ file. Or you can pass options with the command see [tsc Compiler Options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

## Running Mocha tests

Running >> `$ mocha` command from the terminal will run all test files in ___test___ directory  with the options specified in __mocharc.json__ file. Or you can pass options with the command see [Command Line Usage](https://mochajs.org/#command-line-usage)

## Custom npm scripts

```json
"scripts": {
"test": "mocha",
"build": "tsc",
"tslint": "./node_modules/tslint/bin/tslint",
"watch": "./node_modules/nodemon/bin/nodemon.js`"
},
```

## TO TEST

[x] `$ mkdir -p src && touch src/App.ts`

Should create src directory and App.ts inside of it

[x] `$ tsc`

* expected to create _dist/_ directory in project root
* _dist/_ should have App.js

[x] `$ mkdir -p test/src && touch test/src/App.test.ts`

Should create test/src directories and App.test.ts inside of src

[x] `$ mocha`

Expected to print:
> Error: No test files found

[x] Edit src/App.ts with the following:

```typescript
    export default true;
```

[x] Edit __test/src/App.test.ts__ with the following:

```typescript
import {expect} from 'chai';
import App from '../../src/App';

describe("App", () => {
  it("App should return true", ()=>{
      expect(App).to.equal(true)
  })
})

```

Expected to print:

```bash

  App
    ✓ App should return true


  1 passing (5ms)
```

[x] `$ tsc`

* Expected to create __dist/src/App.js__ which contain the following:

    ```javascript
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = true;
    ```

* Expected to create __dist/test/src/App.js__ which contain the following:

    ```javascript
    "use strict";
    var __importDefault = (this && this.__importDefault) || function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var chai_1 = require("chai");
    var App_1 = __importDefault(require("../../src/App"));
    describe("App", function () {
        it("App should return true", function () {
            chai_1.expect(App_1.default).to.equal(true);
        });
    });

    ```