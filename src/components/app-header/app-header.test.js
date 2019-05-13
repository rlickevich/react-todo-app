import React from "react";
import { shallow } from "enzyme";
import AppHeader from './app-header';


const intialProps = {
    toDo: 0,
    done: 0
}

const wrapper = shallow(<AppHeader {...intialProps} />)

const nextProps = {
    toDo: 1,
    done: 3
  };

describe("Render a appheader component", () => {

    afterAll(() => wrapper.unmount());
    
    it("Shouldn't render a appheader without the required props", () => {
        expect(wrapper.type()).toBeNull();
    })

    it("Should render a Appheader if the required props are present", () => {
        wrapper.setProps({ ...nextProps }); // we update the component with "nextProps"
    
        expect(wrapper.find("div.app-header")).toHaveLength(1); // expect "app-header" to be present
        expect(wrapper.find("h2.todo-done").text()).toContain(nextProps.toDo); // expect the h2 element to contain 1
        expect(wrapper.find("h2.todo-done").text()).toContain(nextProps.done); // expect the h2 element to contain 3
    });
})