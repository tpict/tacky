# Tacky

A library for building safe, consistent styles in TypeScript.

```tsx
import { tacky } from "tacky-css/macro";

const fontSize = 5;
const display = "inline-block" as const;

const styles = tacky(_ => [
  _.color(_.rgb(255, 0, 0)),
  _.backgroundColor(_.rgb(0, 0, 128)),
  _.fontSize(_.rem(fontSize)),
  _.fontFamily("Times New Roman", "serif"),
  _.display(display),
  _.boxShadow(_.rem(2), _.rem(2), _.rem(2), _.rem(2), _.rgba(0, 0, 0, 0.5)),
  _.media([_.media.screen(_.media.minWidth(_.rem(30)))],
    _.color(_.rgb(0, 255, 0)),
  ),
]);

// ↓↓↓ Is compiled to... ↓↓↓

const fontSize = 5;
const display = "inline-block";

const styles = {
  color: "rgb(255, 0, 0)",
  backgroundColor: "rgb(0, 0, 128)",
  fontSize: `${fontSize}rem`,
  fontFamily: '"Times New Roman", serif',
  display,
  boxShadow: "2rem 2rem 2rem 2rem rgba(0, 0, 0, 0.5)",
  ["@media screen and (min-width: 30rem)"]: {
    color: "rgb(0, 255, 0)",
  },
};
```

## Installation

Tacky isn't production-ready yet, but if you'd like to alpha test, install the
`tacky-css` package:

```
yarn add tacky-css
```

I strongly suggest installing and configuring
[babel-plugin-macros](https://github.com/kentcdodds/babel-plugin-macros) too.

## Why?

_Because No One Else Would™_

If you use [object styles](https://emotion.sh/docs/object-styles) or [style
objects](https://styled-components.com/docs/advanced#style-objects) (or
something else) to represent CSS in your styling library of choice, you may
have found the type definitions of various CSS properties to be looser than you
were expecting.  If you're writing a [library of CSS type definitions
_only_](https://github.com/frenic/csstype), you have to use the `string` type
liberally in order to capture all possible values of properties that can be
represented with complex [CSS data
types](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Types) (read:
scalar values like 5rem, 10px, or values with unique syntax like `box-shadow`,
`linear-gradient`).

Tacky is a library inspired by
[bs-css](https://github.com/reasonml-labs/bs-css) and
[elm-css](https://github.com/rtfeldman/elm-css) that takes a functional
approach in order to provide safety that can't be guaranteed by a `Record`
interface alone.

### Why are values specified unit-first?

Standard object styles allow any string where scalar CSS values e.g. `"2rem"`,
`"5px"` are expected. It's not feasible to enumerate every possibility
of those values, and TypeScript's type system has no ability to interpolate
strings.

By expressing these as a "unit function" that receives magnitude as a
number, we can be much more strict about what values are allowed for a given
property.

### Why write styles as a list of function calls?

Representing complex CSS values safely in TypeScript warrants the use of a
helper function due to the limitations mentioned above. Using object styles,
you wind up with something like:

```tsx
const styles = {
  flex: flex(1, 0, "auto")
  padding: padding(rem(1), rem(2)),
};
```
By having these helper functions produce both the CSS property _and_ value, we
can avoid this redundancy.

### Why all the underscores?

TypeScript has no directive for "import a module into the current namespace".
By specifying styles as a function that receives Tacky's utilities as an
object, you can use any identifier without introducing it into the rest of your
module. I like `_` because it's terse, but you can use whatever you like:

```tsx
const styles = tacky(css => [css.color("red")]);
```


## TODOs

- [ ] Support all (relevant) CSS properties
- [x] Support media queries
- [ ] Support selectors (?)
- [ ] Companion React library
- [ ] Auto builds (?)
