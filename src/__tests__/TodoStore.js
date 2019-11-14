import React from "react";
import reducer from "../store/reducer";

test("adds todo", async () => {
  const state = { todos: [
    {
      checked: false,
      text: "Shortlist features for MVP"
    } 
    ] };
  const newState = reducer(state, { type: "ADD_TODO", payload: "Launch PPC campaign with new creative" }); 
  expect(newState.todos).toEqual([{"checked": false, "text": "Shortlist features for MVP"}, {"checked": false, "text": "Launch PPC campaign with new creative"}]);
}); 

test("completes todo", async () => {
  const state = { todos: [
    {
      checked: false,
      text: "Shortlist features for MVP"
    },
    {
      checked: false,
      text: "Launch PPC campaign with new creative"
    } 
    ] };
  const newState = reducer(state, { type: "COMPLETE", payload: 1 });

  expect(newState.todos).toEqual([{"checked": false, "text": "Shortlist features for MVP"}, {"checked": true, "text": "Launch PPC campaign with new creative"}]);
});

test("deletes todo", async () => {
  const state = { todos: [
    {
      checked: false,
      text: "Shortlist features for MVP"
    },
    {
      checked: false,
      text: "Launch PPC campaign with new creative"
    } 
    ] };
  const newState = reducer(state, { type: "DELETE", payload: 1 });

  expect(newState.todos).toEqual([{"checked": false, "text": "Shortlist features for MVP"}]);
});