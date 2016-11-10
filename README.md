# kewt

[![flipactual](https://img.shields.io/badge/😋-flipactual-218AC7.svg?style=flat-square)](https://www.flipactual.com/)
[![Travis](https://img.shields.io/travis/flipactual/kewt.svg?style=flat-square)](https://travis-ci.org/flipactual/kewt/)
[![Codecov](https://img.shields.io/codecov/c/github/flipactual/kewt.svg?style=flat-square)](https://codecov.io/gh/flipactual/kewt/)
[![Node](https://img.shields.io/node/v/kewt.svg?style=flat-square)](http://npmjs.com/package/kewt)
[![NPM](https://img.shields.io/npm/v/kewt.svg?style=flat-square)](http://npmjs.com/package/kewt)

`kewt` provides interfaces for setting, fetching, persisting, and rendering text track styling.

## Example

The following code loads a DOM ready interface that checks for existing settings on localstorage, sets new values for a variety of options, persists the changes to localstorage, and renders a style tag to the document head.

```js
import { KewtDOM } from 'kewt';

KewtDOM
  .set('font', 'sans-serif')
  .set('fontSize', '4')
  .set('fontEdge', 'shadow')
  .set('edgeHighlight', 'yellow')
  .set('edgeOpacity', 50)
  .set('textColor', 'teal')
  .set('textOpacity', 25)
  .set('backgroundColor', 'purple')
  .set('backgroundOpacity', '100')
  .persist()
  .render();
```

## Settings

| Setting | Default | Options |
|---|---|---|
| `font` | `'monospace'` | `'monospace'`, `'sans-serif'`, `'serif'` |
| `fontSize` | `'3'` | `'1'`-`'6'` |
| `fontEdge` | `none` | `'none'`, `'uniform'`, `'raised'`, `'shadow'`|
| `edgeHighlight` | `'black'` | `'black'`, `'blue'`, `'green'`, `'teal'`, `'red'`, `'purple'`, `'yellow'`, `'white'` |
| `edgeOpacity` | `'0'` | `'0'`-`'100'` |
| `textColor` | `'white'` | `'black'`, `'blue'`, `'green'`, `'teal'`, `'red'`, `'purple'`, `'yellow'`, `'white'` |
| `textOpacity` | `'100'` | `'0'`-`'100'` |
| `backgroundColor` | `'black'` | `'black'`, `'blue'`, `'green'`, `'teal'`, `'red'`, `'purple'`, `'yellow'`, `'white'` |
| `backgroundOpacity` | `'100'` | `'0'`-`'100'` |

## Scripts

### `test` – run the tests

```sh
npm run test
```

### `coverage` – generate and view code coverage as HTML

```sh
npm run coverage
```

### `lint` – lint the codebase

```sh
npm run lint
```

## License

MIT @ [Flip](https://github.com/flipactual)
