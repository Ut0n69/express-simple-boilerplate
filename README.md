<div align="center">
  <h1>👻 express-simple-boilerplate 👻</h1>
</div>

## Feature

packages

- express
- body-parser
- eslint
- prettier
- nodemon


This code has GET, POST, PUT and DELET methods.

It has no DB.

## Model

|  NAME  |  TYPE  |  DETAIL  |  
| ---- | ---- |  ---- |
|  id  |  Number  |  Randomly granted |
|  name  |  String  |  N/A |
|  age  |  Number  | N/A |

## Usage

### Setup

```
$ git clone https://github.com/Ut0n69/express-simple-boilerplate.git
$ yarn
$ yarn serve
```

### GET

#### response

```js
{
  data: {
    friends: [
      {
        id: 123,
        name: 'Ross',
        age: 30
      },
      {
        id: 234,
        name: 'Rachel',
        age: 27
      }
    ]
  }
}
```

<br>

### POST

#### request

```js
{
  name: 'Monica',
  age: 29
}
```

#### response

```js
{
  data: {
    friends: [
      {
        id: 123,
        name: 'Ross',
        age: 30
      },
      {
        id: 234,
        name: 'Rachel',
        age: 27
      },
      {
        id: 345,
        name: 'Monica',
        age: 29
      }
    ]
  }
}
```

<br>

### PUT

#### request

```js
{
  id: 234
  name: 'Joey',
  age: 31
}
```

#### response

```js
{
  data: {
    friends: [
      {
        id: 123,
        name: 'Ross',
        age: 30
      },
      {
        id: 234,
        name: 'Joey',
        age: 31
      }
    ]
  }
}
```

<br>

### DELETE

#### request

```js
{
  id: 123
}
```
#### response

```js
{
  data: {
    friends: [
      {
        id: 345,
        name: 'Rachel',
        age: 27
      }
    ]
  }
}
```