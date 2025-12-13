# gasconsumer-ui-components

[![npm](https://img.shields.io/npm/v/gasconsumer-ui-components1?color=4f46e5)](https://www.npmjs.com/package/gasconsumer-ui-components)
[![npm](https://img.shields.io/npm/dw/gasconsumer-ui-components1?color=4f46e5)](https://www.npmjs.com/package/gasconsumer-ui-components)
[![Vue](https://img.shields.io/badge/Vue-3.x-brightgreen)](https://vuejs.org)
[![Vite](https://img.shields.io/badge/Vite-5.x-orange)](https://vitejs.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.x-teal)](https://tailwindcss.com)

> gasconsumer-ui-components is a library of responsive UI components for Vue.js.

## Documentation

The documentation is in the docs directory, it serves as the demo as well.

Browse [online documentation here](https://gasconsumer-ui.ru).

## Quick start

You need [Vue.js](https://vuejs.org/) **version 3.0+**. (Vue 2 is not supported)

### 1 Install via npm

```sh
npm i gasconsumer-ui-components
```

### 2 Import and use library

Install a plugin:

```javascript
import { createApp } from 'vue';
import 'gasconsumer-ui-components/style.css';
import uiComponents from 'gasconsumer-ui-components/reg';

const app = createApp();

app.use(uiComponents);
```

### 3 Use components

Buttons:

```jsx
<template>
  <TextButton
    text="text"
  />
</template>

<script setup lang="ts">
import { TextButton } from 'gasconsumer-ui-components/buttons';
</script>
```

Calendars:

```jsx
<template>
  <CalendarSelect
    v-model="modelValue"
    calendarType="CalendarType.month"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { CalendarSelect } from 'gasconsumer-ui-components/selects';
import { CalendarType } from 'gasconsumer-ui-components/calendars-enums';

const modelValue = ref(new Date());
</script>
```

## Browser support

Recent versions of Firefox, Chrome, Edge, Opera and Safari.

## Versioning

Follow [Semantic Versioning](https://semver.org/):

- **Major** (1.0.0 → 2.0.0): Breaking changes
- **Minor** (1.0.0 → 1.1.0): New features, backward compatible
- **Patch** (1.0.0 → 1.0.1): Bug fixes, backward compatible

## License <a href="https://github.com/buefy/buefy/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/buefy.svg?logo=github" /></a>

Code released under [MIT](https://opensource.org/license/mit/) license.
