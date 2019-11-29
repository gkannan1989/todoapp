import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16"; 
import AddTodo from "../components/molecules/AddTodo";

Enzyme.configure({ adapter: new Adapter() });
 
test("<AddTodo /> - snapshot with add todo textbox DOM", async () => {
  let props = {
    isOpen: true,
    inputValue: "hello",
    onInputChange: jest.fn(),
    onButtonClick: jest.fn(),
    openTodo: jest.fn(),
    onInputKeyPress: jest.fn()
  }
  const wrapper = shallow(<AddTodo {...props} />);  
  expect(wrapper).toMatchSnapshot();
});

test("<AddTodo /> - snapshot without add todo textbox DOM", async () => {
  let props = {
    isOpen: false,
    inputValue: "hello",
    onInputChange: jest.fn(),
    onButtonClick: jest.fn(),
    openTodo: jest.fn(),
    onInputKeyPress: jest.fn()
  }
  const wrapper = shallow(<AddTodo {...props} />);  
  expect(wrapper).toMatchSnapshot();
});
 

test("<AddTodo /> - identify whether add todo textbox rendered", async () => {
  let props = {
    isOpen: true,
    inputValue: "hello",
    onInputChange: jest.fn(),
    onButtonClick: jest.fn(),
    openTodo: jest.fn(),
    onInputKeyPress: jest.fn()
  }
  const wrapper = shallow(<AddTodo {...props} />);  
  expect(wrapper.find('WithStyles(ForwardRef(Button))')).toHaveLength(1)
});
 
test("<AddTodo /> - identify whether add todo button rendered", async () => {
  let props = {
    isOpen: false,
    inputValue: "hello",
    onInputChange: jest.fn(),
    onButtonClick: jest.fn(),
    openTodo: jest.fn(),
    onInputKeyPress: jest.fn()
  }
  const wrapper = shallow(<AddTodo {...props} />);  
  expect(wrapper.find('WithStyles(ForwardRef(Button))')).toHaveLength(1)
});

test("<AddTodo /> - simulate add todo event", async () => {
  let props = {
    isOpen: true,
    inputValue: "hello",
    onInputChange: jest.fn(),
    onButtonClick: jest.fn(),
    openTodo: jest.fn(),
    onInputKeyPress: jest.fn()
  }
  const wrapper = shallow(<AddTodo {...props} />); 
  wrapper.find('WithStyles(ForwardRef(Button))').simulate('click');
  wrapper.update(); 
  expect(wrapper).toHaveLength(1);
});
