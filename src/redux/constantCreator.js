import { defineAction } from 'redux-define';

const rootCreator = defineAction('pwa-online-hackathon');

export default rootCreator;
export const promiseStates = ['PENDING', 'RESOLVED', 'REJECTED'];
export const constantCreator = (namespace) => (action, isContainPromiseStates) =>
  (isContainPromiseStates ? rootCreator.defineAction(namespace).defineAction(action, promiseStates)
    : rootCreator.defineAction(namespace).defineAction(action).toString());
