import React from "react";

// Store Context is the global context that is managed by reducers.

const Store = React.createContext({
  todos: [
    {
      checked: false,
      text: "Shortlist features for MVP"
    },
    {
      checked: false,
      text: "Launch PPC campaign with new creative"
    },
    {
      checked: false,
      text: "Define audience breakdown with new data"
    },
    {
      checked: false,
      text: "Launch demo page for SEO analysis"
    } 
    ]
});

export default Store;
