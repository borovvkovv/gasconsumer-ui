<template>
  <div class="flex flex-wrap items-center gap-y-2">
    <template
      v-for="(route, index) in routes"
      :key="index"
    >
      <AppLink
        :to="route.to"
        :link-style="LinksStyles.Style6"
      >
        {{ route.title }}
      </AppLink>
      <IconMarker
        v-if="index + 1 !== routes.length"
        class="text-blueGrey-2 mx-4"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { AppLink } from 'gasconsumer-ui-components/app-link';
import { LinksStyles } from 'gasconsumer-ui-components/app-link-enums';
import { IconMarker } from 'gasconsumer-ui-components/icons';
import type { LinkBase } from './utils/models';

defineProps<{
  routes: LinkBase[];
}>();
</script>
