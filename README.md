# Treehouse-Learn_React
Online course, [Treehouse](https://teamtreehouse.com), following the [Learn React track](https://teamtreehouse.com/tracks/learn-react). The track contains the topics: React Basics, React Components, Create React App, Context API, React Router, React v16 and Data Fetching in React.
The README.md contains an overview of the courses in the track, as well as some of my own notes and takeaways from each part.

*Note that the code contains a lot of comments for self-learning, written during the course.*

## React Basics
### *About this course:*
>React is a JavaScript library for building user interfaces. React makes building and maintaining the user interface of your application faster and easier by breaking it up into smaller, reusable components. It also helps eliminate the complexity that comes with updating your DOM elements when the user interacts with your application.
### *What you will learn:*
- JSX
- Props
- State
- Components
- Events
#### First Steps in React
- React is a JavaScript libary for building user interfaces. React differs from other front end libraries and frameworks in that it focuses on building components and structure in JavaScript, and not in HTML pages or templates. React elements are the smallest building blocks of React apps. 
- React DOM is the libary that lets React connect to and update the DOM. The 'react-dom' libary provides DOM-specific methods. ReactDOM.render() renders React elements to the DOM(Document Object Model). React does not create actual DOM nodes, it creates objects that describe DOM nodes. React only manages what gets rendered to the DOM via ReactDOM.render. It is the job if render() to interpret the element object and create DOM nodes out of them. 
- JSX is a special syntax React uses to create elements and use componets, but using JSX is optional. The curly braces in JSX are used to evaluate JavaScript expressions. We can use Babel as a tool to translate JSX into standard JavaScript. 

#### Thinking in Components
- A component is a piece of UI that you can reuse. Just like you're able to reuse code in JavaScript with functions, a component lets you reuse code that renders a part of your UI. Being able to split your UI code into independent, reusable pieces, and think about each piece in isolation is one the most embraced features of React. React components are written in plain JavaScript, with the help of JSX, and they contain the logic required to display a small part of your UI.
- JSX lets you define your own tags. A JSX tag can not only represent an HTML element, it can also represent a user-defined component.
- Components can be written as Arrow Functions. There is no real benefit to writing a component in this way, but it provides a more concise syntax. 
- When a component contains another component, it is called composition. Composing components is a core principle in React. You will usually have parent components with one or many child components. This gives the parent component the ability to control how its child components are rendered.
- We usually pass the top-level component to ReactDOM.render().
- It is necessary to use a capital letter in the components name to differentiate custom components from native DOM elements.

#### Introducing Props
- Every React component and element can receive a list of attributes called properties. Properties ,or props, are a core concept in React. Components receive data through props, allowing them to be dynamic, customizable and reusable.
- An important detail to remember about props is that they are "read only", which means that a component can only read the props given to it, never change them. The parent component owns and controls the property values.
- You pass props to a component via the component's JSX tag at the place where it is used.
- When you define a component using a function, the function gets one default argument from React - a props object, containg a list of props given to the component. 
- You can think of props as what React components use to talk to eachother and share information. Props pass data from a header component, down to a child component.
- Transforming array items with map(): You can use map() to transform each item in an array into something else. Map returns a new array, leaving the original unchanged, with the same number of elements. Written on the form: orgArray.map(orgArray => newArray.someCommand()).
- React manages what gets rendered to the DOM. In order for this process to be fast and efficient, React needs a way to quickly know which items were changed, added, or removed. For this, React gives elements a special built-in prop named key. A key is a unique identifier that gives React a way to quickly and reliably identify an element in a list. Not all elements need a key prop. Pass a key prop anytime you are creating elements by iterating over an array of items that will be rearranged, added or deleted in your UI.

#### Understanding State

## React Components
### *About this course:*
>Components are the core building blocks of a React application. This course will level-up your React skills by providing a better understanding of class vs. functional components, state and lifecycle methods, and how to split your UI into reusable and composable components.
#### Build Modular Interfaces with Components
#### Managing State and Data Flow
#### Stateful Components and Lifecycle Methods
#### React Component Patterns

## Using Create React App
### *About this workshop:*
>Learn to quickly set up React projects using Create React App.
#### What is Create React App?
#### Installing and Using Create React App
#### Customizing Your Project
#### Next steps with Create React App

## React Context API
### *About this workshop*
>In the typical React data flow, components communicate with each other via props. A parent passes props down to child components. Sometimes the intermediary components get props passed to them with the sole purpose of passing that data down one (or several) more levels deep. This cascade of props is often referred to as "prop drilling". The React Context API provides a way to pass data to components without having to pass props manually at every single level.
#### What is the Context API?
#### How the Context Works
#### Create Context
#### Provide and Consume State
#### The Provider and Consumer Solution
#### Provide and Consume Actions
#### Provide Remaining Actions to Child Components
#### Refactor the Provider
#### Refactor the Consumers

## React Router 4 Basics
### *About this course:*
>Learn to use React Router v4, a declarative routing solution for React, to manage navigation and rendering of components in your applications.
### *What you will learn:*
- Declaring routes
- Navigating between routes
- Nesting routes
- URL parameters
- 404 error routes
- Changing routes programmatically
#### Getting Started with React Router
#### Navigating, Nesting and Redirecting Routes
#### Going Further with Routing

## What's new in React 16
### *About this workshop*
>Get up to speed with new features in React 16, a complete rewrite of the React library.
#### Introducing React 16
#### Take Control of Errors with componentDidCatch()
#### Catching Errors with Error Boundaries
#### New Return Types
#### Render Children into other Dom Nodes with Portals
#### Returning null from setState

## Data Fetching in React
### *About this workshop*
>Learn different methods for fetching external data in React, and how to display the data in your app.
#### Fetching Data with the Fetch API
#### Fetching Data with Axios
#### Displaying the Data
#### Building a Search Feauture
#### Displaying the Search Results
