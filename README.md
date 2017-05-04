# ember-batch-request

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
