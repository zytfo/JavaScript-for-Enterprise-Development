import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import createStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ItemDetails from '../components/item-details'

describe('ItemDetails', () => {
    it('test render empty component', () => {
        const initialState = {
            item: void 0
        };

        const container = renderer
            .create(
                <Router>
                    <Route component={ItemDetails}/>
                </Router>
            );

        expect(container.toJSON()).toMatchSnapshot()
    })

});