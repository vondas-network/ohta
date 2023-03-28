# ohta
A microservice logging library inspired by Ohta and Fukuisan banter from Iron Chef Japan

<h3 align="center">
  <img height="20%" width="20%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx6X5yxYXVVBSfe9Y2M1BzPz6JJ9rtNih1L9MCHhnq0JX1FKAA"/>
</h3>

# Install
``` bash
npm i ohta
```

# Use-case
I want to log actions within microservice that is hosted in a Docker container that can export individual files for info and error levels

# How to Use
## Examples 

### Info Level
``` javascript
const fukuisan = require("ohta");
fukuisan.askOhtaAbout('info', 'API', 'test', 'hello');
```

### Info Response
``` json
{
  "level": "info",
  "message": "hello",
  "operation": "test",
  "requestId": "3de0c9f06cf61470b22bd6eedcb2a6105e64144c",
  "service": "API",
  "timestamp": "2023-03-27T23:37:25.488Z"
}
```

### Error Level
``` javascript
const fukuisan = require("ohta");
fukuisan.askOhtaAbout('error', 'API', 'test', 'hello');
```

### Error Response
``` json
{
  "level": "error",
  "message": "hello",
  "stack": "Error: hello\n    at Object.askQuestion (/MY_DIRECTORY/vondas-network/ohta/lib/askQuestion.js:14:23)\n    at Object.askOhtaAbout (/MY_DIRECTORY/vondas-network/ohta/index.js:11:10)\n    at Object.<anonymous> (/MY_DIRECTORY/vondas-network/ohta/example/example.js:7:10)\n    at Module._compile (internal/modules/cjs/loader.js:1068:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1097:10)\n    at Module.load (internal/modules/cjs/loader.js:933:32)\n    at Function.Module._load (internal/modules/cjs/loader.js:774:14)\n    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)\n    at internal/main/run_main_module.js:17:47",
  "timestamp": "2023-03-27T23:37:25.490Z"
}
```
