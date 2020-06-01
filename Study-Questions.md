
**What problem does the context API help solve?**

Context API provides a way to pass data through the component tree without having to "prop drill". In other words, it prevents having to pass props through every component into a child component.


**In your own words, describe 'actions', 'reducers', and the 'store' and their roles in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?**

Actions: Actions are events that send data from the application triggered by a user's interaction, API calls, form submissions, and etc to the store. Actions are not "called" but "dispatched". 

Reducers: A reducer is a pure function that takes the previous state and an action, and returns a copy of the new state.

Store: Everything that changes within an application is represented by a single JavaScript object known as the store. The store is called the "source of truth" because it is the only place that represents the state of the application.


**What is the difference between Application state and Component state? When would be a good time to use one over the other?**

Applicatio state is global and component state is local or specific to that component. I would use application state for API calls whereas I would use component state to handle events in a form. 


**Describe 'redux-thunk', what does it allow us to do? How does it change our 'action-creators'?**

redux-thunk is a middleware that allows you to write action creators that return another function instead of an action. Action creators return or dispatch actions vs a redux-thunk that returns a function.

**What is your favorite state management system you've learned in this sprint? Please explain why!**

REDUX! I was told that Redux was the toughest part of the entire Lambda School curriculum so I studied it inside-and-out. I invested too much of my time into it to not like it.