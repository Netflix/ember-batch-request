# ember-batch-request

[![NetflixOSS Lifecycle](https://img.shields.io/osslifecycle/Netflix/osstracker.svg)]()

Adapter add on for making Batch Requests in Ember Applications.

  * Customizable Adapter
  * Returns Success and Failure responses
  * Ability to skip store update in bulk scenario
  * Create or Update or Delete N records in 1 XHR call

### Getting Started

As any other ember-cli add on, run:
  ```
  ember install ember-batch-request
  ```
  
### Setup

Since the [Rails middleware](https://github.com/Netflix/batch_request_api) depends on the url ```/api/v1/batch_parallel``` or ```/api/v1/batch_sequential```, please add the following config to environment.js

```
ENV.apiNamespace = 'api/v1';
ENV.apiBatchUrl = 'batch_parallel'; (or batch_sequential)
```

You can change the host

```
ENV.apiURL = 'http://example.com'
```

### Usage

  **BatchCreate**

  ```javascript
  this.store.batchCreate(arrayOfObjects).then((response) => { });
  ```

  **BatchUpdate**

  ```javascript
  this.store.batchUpdate(arrayOfObjects).then((response) => { });
  ```

  **BatchDelete**

  ```javascript
  this.store.batchDelete(arrayOfObjects).then((response) => { });
  ```

### How to skip Store Updates during Create or Update

Just pass the option { skipStoreUpdate: true } in batchCreate or batchUpdate

  ```javascript
  this.get('store').batchCreate(arrayOfObjects, { skipStoreUpdate: true })
  ```

### How to change the default HTTP method during Create or Update

Just pass the option { actionName: "PUT" } in batchCreate or batchUpdate

  ```javascript
  this.get('store').batchUpdate(arrayOfObjects, { actionName: "PUT" })
  ```

### Response

  ```javascript
  {
    completedResponses: [],
    errorResponses: []
  }
  ```

### ToDo
Update the store on creates
### Contributing

If you would like to contribute, you can fork the project, edit, and make a pull request.

### Tests

Please make sure that the test pass by running ember test. If you had a new functionality, add tests for it.

### Note

Currently works with JSON API spec
