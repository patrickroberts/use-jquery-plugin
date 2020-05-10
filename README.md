# use-jquery-plugin
React hook for using jQuery plugins in components

## About

`use-jquery-plugin` simplifies hook-based usage of jQuery plugins in React.

The hook `useJQueryPlugin()` is the same as [`useLayoutEffect()`], but it returns a reference object to be passed to an HTML element. The effect passed to `useJQueryPlugin()` is provided with the jQuery selection containing the HTML element that the reference is assigned.

## Install

### [npm] (Recommended)

```sh
npm i use-jquery-plugin
```

### [unpkg]

```html
<script src="https://unpkg.com/use-jquery-plugin"></script>
```

## Usage

```js
import React from 'react';
import useJQueryPlugin from 'use-jquery-plugin';

export default function App() {
  const elemRef = useJQueryPlugin($elem => {
    $elem.find('h1').css('font-family', 'Comic Sans');
  }, []);

  return (
    <article ref={elemRef}>
      <h1>Hello, world!</h1>
    </article>
  );
}
```

## API Documentation

Available on [Github Pages].

[`useLayoutEffect()`]: https://reactjs.org/docs/hooks-reference.html#uselayouteffect
[npm]: https://www.npmjs.com/package/use-jquery-plugin
[unpkg]: https://unpkg.com
[Github Pages]: https://patrickroberts.github.io/use-jquery-plugin/
