import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16"; 
import TodoListItem from "../components/molecules/TodoListItem";

Enzyme.configure({ adapter: new Adapter() });

test("<TodoListItem /> - snapshot of TodoListItem component", async () => {
  let props = {
    checked: true
  }
  const wrapper = shallow(<TodoListItem {...props} />);  
  expect(wrapper).toMatchSnapshot();
});

test("<TodoListItem /> - check TodoListItem layout rendering properly", async () => { 
  let props = {
    checked: false
  }
  const wrapper = shallow(<TodoListItem {...props}/>);  
  expect( wrapper.find('WithStyles(ForwardRef(FormControlLabel))').html()).toContain('MuiSvgIcon-root') 
});
test("<TodoListItem /> - check TodoListItem strikethrough rendering properly", async () => { 
  let props = {
    checked: true
  }
  const wrapper = shallow(<TodoListItem {...props}/>);  
  expect( wrapper.find('WithStyles(ForwardRef(FormControlLabel))').html()).toContain('checked')
});
 