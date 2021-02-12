import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import createStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import ItemsList from '../components/items-list'

describe('ItemsList', () => {
    it('test render empty component', () => {
        const mockStore = createStore([thunk]);
        const initialState = {
            data: []
        };
        const store = mockStore(initialState);
        const container = renderer
            .create(
                <Provider store={store}>
                    <Router>
                        <Route component={ItemsList}/>
                    </Router>
                </Provider>,
                { createNodeMock: ({ type }) => document.createElement(type) }
            );
        expect(container.toJSON()).toMatchSnapshot()
    })
});

