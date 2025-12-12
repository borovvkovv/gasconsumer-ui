<template>
  <SimpleSelect
    v-model="modelValue"
    :options
    :size="Size.XS"
    :label
  />
</template>

<script lang="ts">
export default {
  name: 'ISelectItemSelect',
};
</script>

<script setup lang="ts">
import { Size } from 'gasconsumer-ui-components/enums';
import type { ISelectItem } from 'gasconsumer-ui-components/selects-types';
import { SimpleSelect } from 'gasconsumer-ui-components/selects';

const modelValue = defineModel<ISelectItem>();

defineProps<{
  options: Array<ISelectItem>;
  label: string;
}>();
</script>
