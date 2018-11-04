import React from 'react';
import { mount } from 'enzyme';
import AuthoHide from '.';

describe('Suite of tests for the AuthoHide component', () => {
    const customComponent = <div>My Custom Component</div>;

    test(`AutoHide component should render component with defaults props, styling 
            and autohide after default amount of time [1000ms]`, () => {
        const wrapper = mount(<AuthoHide>{customComponent}</AuthoHide>);
        expect(wrapper.instance().state.isHidden).toBe(false);
        expect(wrapper.instance().props.ms).toBe(1000);
        expect(wrapper.instance().props.children).toBe(customComponent);
        expect(wrapper.find('div.autohide')).toBeDefined();
        expect(wrapper.find('div.autohide')).toHaveLength(1);
    });

    test('AutoHide component should autohide after passed as a propd amount of time', () => {
        const wrapper = mount(<AuthoHide>{customComponent}</AuthoHide>);
    });
});
