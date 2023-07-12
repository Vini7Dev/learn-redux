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

# Steps for implementing Redux

* 1) Desing the **structure** of the **STORE**;

* 2) List the **ACTIONS** (What to do);

* 3) Create **REDUCER** function (How to do), to define how to perform that actions;

* 4) Create Redux **STORE**.

## 1) Design the structure of the STORE

> **Example** of task array:

```jsx
  [
    {
      id: 1,
      task: 'Design store',
      completed: false,
    }
  ]
```

> On **STORE**, it will look like this (example with 2 slices: tasks and employees):

```jsx
  {
    tasks: [
      {
        id: 1,
        task: 'Design store',
        completed: false,
      },
      { ... }, ...
    ]
    employees: [ { ... }, { ... }, ... ]
  }
```
