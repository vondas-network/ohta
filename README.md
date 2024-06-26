<h3 align="center">
  <img height="30%" width="30%" src="https://github.com/vondas-network/ohta/assets/7625379/dc6c7228-aab9-4f82-a1bb-21ad43fd8d77"/>
</h3>
<p align="center"><em>A microservice logging library inspired by Ohta and Fukuisan banter from Iron Chef Japan.</em></p> 


# Install
``` bash
npm i ohta
```

# What does it do?
_Ohta_ logs events within Javascript programs, creates individual _.log_ files for _info_ and _error_ logs

# Potential Use Cases
- I want to log events within Docker microservice and export log levels into individual files. 
- I have an API and I want to track response times.
- I want to track events across my Docker architecture and follow logs in real-time remotely.

# Log Specification
```
fukuisan.askOhtaAbout(LOG_LEVEL, 'SERVICE', 'OPERATION', 'MESSAGE');
```
- **LOG_LEVEL:** Log level (info or error)
- **SERVICE:** The name of your microservice or application
- **OPERATION:** Name of action happening within the application (i.e. function call, API request, server start, etc.)
- **MESSAGE:** Message defining what the OPERATION is doing

# How does this work?
1) Fukuisan summons Ohta
``` javascript
const fukuisan = require("ohta");
```

2) Fukuisan asks Ohta to describe what the chefs are cooking in Kitchen Stadium
``` javascript
fukuisan.askOhtaAbout('info', 'API', 'pullMapData', 'REQUEST');
```

3) Ohta describes what the chefs are cooking in Kitchen Stadium
``` json
{
  "level": "info",
  "message": "The chef is whisking thick cream with shallots, purreed mangoes and a lobster prawn sauce",
  "operation": "whiskingCream",
  "requestId": "3de0c9f06cf61470b22bd6eedcb2a6105e64144c",
  "service": "chefBattle",
  "timestamp": "2023-03-27T23:37:25.488Z"
}
```

# How to Use
## Examples 

### Info Level
``` javascript
const fukuisan = require("ohta");
fukuisan.askOhtaAbout('info', 'API', 'pullMapData', 'REQUEST');
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
