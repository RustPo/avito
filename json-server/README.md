# JSON Server

https://www.digitalocean.com/community/tutorials/json-server

## Installing JSON Server

```shell
npm i -g json-server
```

## Run JSON Server

Sample file with my employees json data, `db.json`

```JSON
{
  "employees": [
    {
      "id": 1,
      "name": "Pankaj",
      "salary": "10000"
    },
    {
      "name": "David",
      "salary": "5000",
      "id": 2
    }
  ]
}
```

Start json-server

```shell
npx json-server --watch db.json
```

## Custom routes

`routes.json`

```JSON
{
  "/employees/list": "/employees",
  "/employees/get/:id": "/employees/:id",
  "/employees/create": "/employees",
  "/employees/update/:id": "/employees/:id",
  "/employees/delete/:id": "/employees/:id"
}
```

```shell
npx json-server --port 7000 --routes routes.json --watch db.json
```
