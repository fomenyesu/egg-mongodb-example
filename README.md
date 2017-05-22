# egg-mongodb-example
a example of eggjs, mongodb, restful api and other stuff made it work...

# Examples for [egg](https://github.com/eggjs/egg/)

## Usage

make sure you nodejs version >7.0
install mongodb
start mongodb
import data.json to mongodb
  1. create Collection: "web_admin" "web_news" "web_newsType" "IdGenerator"
  2. create Documents in data.json
run npm to start server
  npm start

```bash
$ npm install
$ npm start
```

## REST API Example

Follow the naming conventions of rails:

method     | url                                                    | file path               | controller name
---        | ---                                                    | ---                     | ---
**GET**    | `/api/{objects}[?per_page={per_page}&page={page}]` | `app/controller/{objects}.js` | **index()**
**GET**    | `/api/{objects}/:id`                               | `app/controller/{objects}.js` | **show()**
**POST**   | `/api/{objects}`                                   | `app/controller/{objects}.js` | **create()**
**PUT**    | `/api/{objects}/:id`                               | `app/controller/{objects}.js` | **update()**
**DELETE** | `/api/{objects}/:id[s]`                            | `app/controller/{objects}.js` | **destroy()**


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
