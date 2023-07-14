export const myMiddleware = store => next => action => {
  console.log('============================')

  next(action)
}
