# kewt

[![flipactual](https://img.shields.io/badge/😋-flipactual-218AC7.svg?style=flat-square)](https://www.flipactual.com/)
[![Travis](https://img.shields.io/travis/flipactual/kewt.svg?style=flat-square)](https://travis-ci.org/flipactual/kewt/)
[![Codecov](https://img.shields.io/codecov/c/github/flipactual/kewt.svg?style=flat-square)](https://codecov.io/gh/flipactual/kewt/)
[![Node](https://img.shields.io/node/v/kewt.svg?style=flat-square)](http://npmjs.com/package/kewt)
[![NPM](https://img.shields.io/npm/v/kewt.svg?style=flat-square)](http://npmjs.com/package/kewt)

interfaces for setting, fetching, persisting, and rendering text track styling

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

<a name="Kewt"></a>

## Kewt
**Kind**: global class  

* [Kewt](#Kewt)
    * [new Kewt(options, defaults)](#new_Kewt_new)
    * [.reset()](#Kewt+reset) ⇒ <code>[Kewt](#Kewt)</code>
    * [.get([property])](#Kewt+get) ⇒ <code>string</code> &#124; <code>object</code>
    * [.set(property, [value])](#Kewt+set) ⇒ <code>[Kewt](#Kewt)</code>
    * [.setProperty(property, value)](#Kewt+setProperty) ⇒ <code>[Kewt](#Kewt)</code>

<a name="new_Kewt_new"></a>

### new Kewt(options, defaults)
constructor - creates a new text track interface


| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | overrides for default options |
| defaults | <code>object</code> | overrides for detault defaults |

<a name="Kewt+reset"></a>

### kewt.reset() ⇒ <code>[Kewt](#Kewt)</code>
reset - resets all caption properties to their default values

**Kind**: instance method of <code>[Kewt](#Kewt)</code>  
<a name="Kewt+get"></a>

### kewt.get([property]) ⇒ <code>string</code> &#124; <code>object</code>
get - gets the property, if specified, or all the properties

**Kind**: instance method of <code>[Kewt](#Kewt)</code>  
**Returns**: <code>string</code> &#124; <code>object</code> - the property, if specified, or all the properties  

| Param | Type | Description |
| --- | --- | --- |
| [property] | <code>string</code> | the property to get |

<a name="Kewt+set"></a>

### kewt.set(property, [value]) ⇒ <code>[Kewt](#Kewt)</code>
set - sets a property or properties

**Kind**: instance method of <code>[Kewt](#Kewt)</code>  

| Param | Type | Description |
| --- | --- | --- |
| property | <code>string</code> &#124; <code>object</code> | the property to set |
| [value] | <code>string</code> | the value for the property if property is a string |

<a name="Kewt+setProperty"></a>

### kewt.setProperty(property, value) ⇒ <code>[Kewt](#Kewt)</code>
setProperty - sets a property

**Kind**: instance method of <code>[Kewt](#Kewt)</code>  

| Param | Type | Description |
| --- | --- | --- |
| property | <code>string</code> | the property to set |
| value | <code>string</code> | the value for the property |



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

### `readme` – generate the README

```sh
npm run readme
```

### `compile` – compile the code

```sh
npm run compile
```

## License

MIT @ [Flip](https://github.com/flipactual)
