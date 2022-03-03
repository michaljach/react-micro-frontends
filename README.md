# react-micro-frontends

Zero-dependency, fast and optimized micro frontend framework for React applications.

**Features**:

- based on React hooks
- 2kb
- lazy loading React components from remote URLs
- tiny bundle sizes
- zero configuration

## Installation

### a. Create first Micro Frontend App

Simply generate new app with:

```bash
npx create-react-microfrontend app1
```

### b. In your host (main) application

Install npm package:

```bash
npm i react-micro-frontends
```

Use `useMicroFrontend` hook:

```js
const [App1] = useMicroFrontend('<url>')
```

Use your Micro Frontend:

```jsx
<App1 />
```

## Examples

See `examples` directory for more.

## License

See `LICENSE` file.
