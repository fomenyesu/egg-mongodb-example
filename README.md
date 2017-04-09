# egg-mongodb-example
a example of eggjs, mongodb, restful api and other stuff made it work...

# Examples for [egg](https://github.com/eggjs/egg/)

## Usage

install mongodb
start mongodb
import data.json to mongodb
run npm to start server

```bash
$ npm install
$ npm run dev
```

## REST API Example

api/users GET List

```javascript
{
"meta":{"total":3},
"data":[
{"_id":"58d8a899f5f2486f1f6d4236","uid":1,"name":"admin","pass":"123","status":1,"time":"1325472736"},
{"_id":"58db7828a14b14815447cf33","name":"sdf","pass":"123","status":1,"time":"1325472736","uid":3,"__v":0},
{"_id":"58db7d3bcee4d48df6f5bdfd","name":"sdddf","pass":"123","status":1,"time":"1325472736","uid":4,"__v":0}
]
}
```

api/users/1 GET Single Data

```javascript
{
"meta":{"total":1},
"data":[
{"_id":"58d8a899f5f2486f1f6d4236","uid":1,"name":"admin","pass":"123","status":1,"time":"1325472736"}
]
}
```

api/users/2 PUT Update data with uid

```javascript
{"name":"admin123","pass":"123","status":1,"time":"1325472736"}
```

api/users POST insert data

```javascript
{"name":"admin123","pass":"123","status":1,"time":"1325472736"}
```

same with news and news_type for rest api data.
