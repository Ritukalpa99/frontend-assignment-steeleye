# React Component Code Review - SOLUTION


## Question and Answer

1. Explain what the simple `List` component does? \
 Reviewing the original code, it is filled with erros, so it would not display any output. \
However by fixing the code, this is what I think `List` component is intented to do : 
    - `WrappedSingleListItem` accetps `index`,`isSelected`, `onClickHandler` and `text` as `props` and returns a `<li>` element displayig the `text` value.
    - The `WrappedListComponent` returns an `<ul>` element containing `<SingleListItem>` which is just memoized `<WrappedSingleListItem>` component.
    - As output, the program displays a list containt `text` in them.
    - At first, all the list items are `red` in color.
    - On clicking a list, it changes to `green`.
    - Only the clicked list turns `green`, rest remain as `red`.


2. What problems / warnings are there with code? \
Now that we have an idea of what the code intends to do, let's fix the code accordingly : 
    
    -


