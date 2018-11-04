# @ygpedroso/react-autohide

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)   [![code linting: eslint](https://img.shields.io/badge/lint-eslint-blue.svg)](https://github.com/eslint/eslint)  [![code quality: jest](https://img.shields.io/badge/test-jest-ff69b4.svg)](https://facebook.github.io/jest/) [![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

> React component that autohides itself after the specified amount of milliseconds

## Install

```bash
npm install --save @ygpedroso/react-autohide
```

or

```bash
yarn add @ygpedroso/react-autohide
```

## Usage

```jsx
import React, { Component } from 'react'

import CookiesConsent from '@cuban-engineer/react-cookies-consent'

class Example extends Component {
  render () {
    return (
      <Authide>
        My Content
      </Autohide>
    )
  }
}
```

## Available props

* `ms` Amount of milliseconds to wait before hiding the component: (Type: `Number`, Default value: `1000`)
* `children` Content to be displayed and autohide: (Type `Element`)

## Styling
 
 By default the children component will be displayed inside a `div` element, with `.autohide` class and none styling what so ever:
 
 But the styles can be modified by overriding this `css` class:
 1. `.autohide`: Entire Component container.

## License

@ygpedroso/react-autohide is [MIT-licensed](https://github.com/ygpedroso/react-autohide/blob/master/LICENSE).
