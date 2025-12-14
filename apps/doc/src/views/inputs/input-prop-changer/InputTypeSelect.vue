<template>
  <SimpleSelect
    v-model="selectedInputTypeOption"
    :options="inputTypeOptions"
    :size="Size.XS"
    :label="inputTypePropName"
  />
</template>

<script lang="ts">
export default {
  name: 'InputTypeSelect',
};
</script>

<script setup lang="ts">
import { computed } from 'vue';
import { Size } from 'gasconsumer-ui-components/enums';
import type { ISelectItem } from 'gasconsumer-ui-components/selects-types';
import { SimpleSelect } from 'gasconsumer-ui-components/selects';
import type { IBaseInputProps } from 'gasconsumer-ui-components/inputs-types';
import { InputType } from 'gasconsumer-ui-components/inputs-enums';

const modelValue = defineModel<InputType>();

const inputTypePropName: keyof Pick<IBaseInputProps, 'type'> = 'type';

const selectedInputTypeOption = computed<ISelectItem<InputType> | undefined>({
  get() {
    return modelValue.value
      ? {
          title: modelValue.value.toString(),
          value: modelValue.value,
        }
      : undefined;
  },
  set(newValue) {
    modelValue.value = newValue?.value;
  },
});

const inputTypeOptions: ISelectItem<InputType>[] = Object.values(InputType)
  .sort()
  .map((inputType) => ({
    title: inputType,
    value: inputType as InputType,
  }));
</script>
