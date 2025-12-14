<template>
  <SimpleSelect
    :model-value="iconRightShowMode"
    :options="iconRightShowModeOptions"
    :size="Size.XS"
    :label="iconRightShowModePropName"
    @update:model-value="
      (newValue) => {
        iconRightShowMode = newValue;
      }
    "
  />
</template>

<script lang="ts">
export default {
  name: 'IconRightShowModeSelect',
};
</script>

<script setup lang="ts">
import { computed } from 'vue';
import { Size } from 'gasconsumer-ui-components/enums';
import type { ISelectItem } from 'gasconsumer-ui-components/selects-types';
import { SimpleSelect } from 'gasconsumer-ui-components/selects';
import type { IBaseInputProps } from 'gasconsumer-ui-components/inputs-types';

const modelValue = defineModel<IBaseInputProps['iconRightShowMode']>();

type IconRightShowModeProp = Exclude<IBaseInputProps['iconRightShowMode'], undefined>;
const iconRightShowModePropName: keyof Pick<IBaseInputProps, 'iconRightShowMode'> = 'iconRightShowMode';

const iconRightShowModes: { [P in IconRightShowModeProp]: P } = {
  AllTime: 'AllTime',
  OnFocus: 'OnFocus',
};

const iconRightShowModeOptions: ISelectItem<IconRightShowModeProp>[] = Object.values(iconRightShowModes).map(
  (size) => ({
    title: size.toString(),
    value: size,
  }),
);

const iconRightShowMode = computed<ISelectItem<IconRightShowModeProp> | undefined>({
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
</script>
