// default promiseTypeSuffixes of redux-promise-middleware:
// ['PENDING', 'FULFILLED', 'REJECTED']
export const pendingOf = actionType => `${actionType}_PENDING`;
export const fulfilledOf = actionType => `${actionType}_FULFILLED`;
export const rejectedOf = actionType => `${actionType}_REJECTED`;
