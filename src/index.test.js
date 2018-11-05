import React from 'react';
import { mount } from 'enzyme';
import waait from 'waait';
import AuthoHide from '.';

describe('Suite of tests for the AuthoHide component', () => {
    const customComponent = <div>My Custom Component</div>;

    test(`AutoHide component should render component with defaults props, styling 
            and autohide after default amount of time [1000ms]`, async () => {
        const wrapper = mount(<AuthoHide>{customComponent}</AuthoHide>);
        expect(wrapper.instance().state.isHidden).toBe(false);
        expect(wrapper.instance().props.ms).toBe(1000);
        expect(wrapper.instance().props.children).toBe(customComponent);
        expect(wrapper.find('span.autohide')).toHaveLength(1);
        expect(wrapper.find('span.autohide.hidden')).toHaveLength(0);
        await waait(1000);
        wrapper.update();
        expect(wrapper.find('span.autohide.hidden')).toHaveLength(1);
    });
});
