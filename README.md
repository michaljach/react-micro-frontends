# 🧩 react-micro-frontends

Zero-dependency, fast and optimized micro frontend framework for React applications.

**Features**:

- based on React hooks
- 2kb
- lazy loading React components from remote URLs
- tiny bundle sizes
- zero configuration

# Usage

### a. Create first Micro Frontend App

Simply generate new app with:

```bash
npx create-react-microfrontend app1
```

Serve locally using:

```bash
npm run serve
```

### b. In your host (main) application

Install npm package:

```bash
npm i react-micro-frontends
```

Use `useMicroFrontend` hook anywhere:

```js
import React from 'react'
import useMicroFrontend from 'react-micro-frontends'

function App() {
  const [App1] = useMicroFrontend('http://localhost:3000/build/index.js')

  return (
    <div>
      Host App
      <App1 />
    </div>
  )
}
```

# Examples

See `examples` directory for more.

# License

See `LICENSE` file.
