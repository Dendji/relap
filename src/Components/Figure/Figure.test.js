import React from 'react';
import ReactDOM from 'react-dom';
import { Figure } from './Figure';
import { shallow } from 'enzyme';

const props = {
    src: '#',
    arWidth: 16,
    arHeight: 9
};

const createWrapper = customProps =>
    shallow(<Figure {...{ ...props, ...customProps }} />);

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Figure {...props} />, div);
});

it('matches snapshot', () => {
    const component = createWrapper();
    expect(component).toMatchSnapshot();
});
