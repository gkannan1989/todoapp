import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16"; 
import TodoList from "../components/molecules/TodoList"; 

Enzyme.configure({ adapter: new Adapter() });

test("<TodoList /> - snapshot of TodoList component", async () => {
  let props = {
    items:  [
      {
        checked: false,
        text: "Shortlist features for MVP"
      },
      {
        checked: false,
        text: "Launch PPC campaign with new creative"
      }
    ],
    onItemMark: jest.fn(),
    onItemRemove: jest.fn(),
    banner: {}
  }
  const wrapper = shallow(<TodoList {...props} />);  
  expect(wrapper).toMatchSnapshot();
});

test("<TodoList /> - check TodoList layout rendering properly", async () => { 
  let props = {
    items:  [
      {
        checked: false,
        text: "Shortlist features for MVP"
      },
      {
        checked: false,
        text: "Launch PPC campaign with new creative"
      } 
      
    ], 
    onItemMark: jest.fn(),
    onItemRemove: jest.fn(), 
    banner: {title: 'Team To-Do List', subTitle: 'Tue 12 December'}
  }
  const wrapper = shallow(<TodoList {...props}/>);  
  expect( wrapper.find('WithStyles(ForwardRef(List))').html()).toContain('Shortlist features for MVP') 
});
test("<TodoList /> - check TodoList banner rendering properly", async () => { 
  let props = {
    items:  [
      {
        checked: false,
        text: "Shortlist features for MVP"
      },
      {
        checked: false,
        text: "Launch PPC campaign with new creative"
      }
    ], 
    onItemMark: jest.fn(),
    onItemRemove: jest.fn(), 
    banner: {title: 'Team To-Do List', subTitle: 'Tue 12 December'}
  }
  const wrapper = shallow(<TodoList {...props}/>);  
  expect( wrapper.find('WithStyles(ForwardRef(GridListTileBar))').html()).toContain('Tue 12 December')
});
 