import React from 'react'
import { ItemCard } from '../components/item-card'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import { shallow, mount, render } from 'enzyme';

test('Grid renders as container', () => {
    const shallowComponent = shallow(<ItemCard item={{origin: ''}} handleDetailsClick={() =>{}} />);
    const mountComponent = mount(<ItemCard item={{origin: ''}} handleDetailsClick={() =>{}} />);
    expect(shallowComponent).toBeDefined();
    expect(shallowComponent.debug()).toMatchSnapshot()
});