# STORE, REDUCER & ACTION

* **ACTIONS:** What to do
* **REDUCERS:** How to do
* **STORE:** Keep data in single place

```md
  > **STORE:** Object that contains the application states/data

  > **REDUCER:** Function responsible for updating the object **STORE**:
    * Receives the STORE and returns the updated STORE;
    * Does not make HTTP call;
    * Does not update from the DOM;
    * Has no other effect.

  > **ACTION:** The identifier of which task/attribute to update in **STORE**:
    * Appears in the second parameter of REDUCER.
```
