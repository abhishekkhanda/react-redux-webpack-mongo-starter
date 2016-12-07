import { injectReducer } from '../../store/reducers';

export default (store) => ({
  path: 'welcome',
  getComponent (nextState, cb) {
  require.ensure([], (require) => {
      const Welcome = require('./container').default;
      const reducer = require('./module').default;

      injectReducer(store, { key: 'welcome', reducer });

      cb(null, Welcome);

    }, 'welcome');
  }
});
