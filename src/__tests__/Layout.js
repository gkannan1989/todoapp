import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16"; 
import Layout from "../components/organisms/Layout";

Enzyme.configure({ adapter: new Adapter() });

test("<Layout /> - snapshot of layout component", async () => {
  let props = {
    children: '<div>hello</div>', 
    user: {
      name: 'hello',
      todo: 'Todo'
    }
  }
  const wrapper = shallow(<Layout {...props} />);  
  expect(wrapper).toMatchSnapshot();
});

test("<Layout /> - check layout is rendering properly", async () => { 
  let props = {
    children: '<div>hello</div>',
    user: {
      name: 'John',
      todo: 'Todo'
    }
  }
  const wrapper = shallow(<Layout {...props}/>);  
  expect( wrapper.find('WithStyles(ForwardRef(Button))').first().html()).toContain('John')
  expect( wrapper.find('WithStyles(ForwardRef(Button))').last().html()).toContain('Todo')
});
test("<Layout /> - check dynamic children is rendering properly", async () => { 
  let props = {
    children: '<div>hello</div>',
    user: {
      name: 'John',
      todo: 'Todo'
    }
  }
  const wrapper = shallow(<Layout {...props}/>);  
  expect( wrapper.find('WithStyles(ForwardRef(Grid))').last().html()).toContain('hello')
});
 