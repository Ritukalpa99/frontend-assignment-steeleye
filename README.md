# React Component Code Review - SOLUTION

[LIVE DEMO](https://steeleye-frontend-assignment.netlify.app/)

## Question and Answer

### 1. Explain what the simple `List` component does? 
 Reviewing the original code, it is filled with errors, so it would not display any output. \
However by fixing the code, this is what I think `List` component is intented to do  
- `WrappedSingleListItem` accepts `index`,`isSelected`, `onClickHandler` and `text` as `props` and returns a `<li>` element displayig the `text` value.
- The `WrappedListComponent` returns an `<ul>` element containing `<SingleListItem>` which is just memoized `<WrappedSingleListItem>` component.
- As output, the program displays a list containt `text` in them.
- At first, all the list items are `red` in color.
- On clicking a list, it changes to `green`.
- Only the clicked list turns `green`, rest remain as `red`.


## 2. What problems / warnings are there with code? 
Now that we have an idea of what the code intends to do, let's fix the code accordingly : 

### Error 1   
In JavaScript, class methods are not bound by default. So, when we pass `onClickHander(index)` to `onClick` , `this` will be `undefined` when the function is actually called. \
There are 2 solutions.
1. We `bind` the function.
```js
return (
    <li>
     onClick = {onClickhandler.bind(index)}
    </li>
);
```
2. Use `arrow function`.
```js
return (
    <li>
     onClick = {() => onClickhandler(index)}
    </li>
);
```
In our code,we use `arrow function`.

### Error 2
Interchange `setSelectedIndex`,`selectedIndex` in `[setSelectedIndex,selectedIndex]`. \
`useState()` returns a pair of values : the current state and a function that updates the current state. \
Since, in following code, both `useEffect()` and `handleClick()` use `setSelectedIndex()`, we'll use this as our function and `selectedIndex` as our current state.
```js
    const [selectedIndex, setSelectedIndex] = useState();
```
### Error 3
In the `return` part of `WrappedListComponent`, we see that `isSelected` is given a value `selectedIndex` \
But `isSelected` is a boolean type, so it'll only accept `true` or `false`.
Here, we need to make a check that whether the index of a given element is same as the index of the element clicked.
```js
isSelected={selectedIndex === index}
```
### Error 4
2 Syntax Errors 
1. Instead of `PropTypes.array()`, it should be `PropTypes.arrayOf()`.
2. `PropTypes.shapeOf()` should be changed to `PropTypes.shape()`.

```js
WrappedListComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
  })),
};
```

## 3. Please fix, optimize, and/ or modify the component as much as you think is necessary.
[HERE](./src/List.js)