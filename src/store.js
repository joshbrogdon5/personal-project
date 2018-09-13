import {createStore, compose} from 'redux';
import reducer from './ducks/reducer';

const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
)

export default createStore(reducer, enhancers);