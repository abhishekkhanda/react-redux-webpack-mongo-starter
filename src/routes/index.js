import CoreLayout from '../CoreLayout';
import Welcome from './Welcome';
export const createRoutes = (store) => ({
    path: '/',
    indexRoute: { onEnter: (nextState, replace) => replace('/welcome') },
    component: CoreLayout,
    childRoutes: [
        Welcome(store)
    ]
});

export default createRoutes;