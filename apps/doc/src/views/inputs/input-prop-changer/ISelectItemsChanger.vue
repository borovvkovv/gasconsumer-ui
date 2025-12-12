<template>
  <div>
    <div class="mb-2 flex justify-between">
      <p class="text-size-5 text-grey-1">{{ label }}</p>
      <AppLink
        @click="
          () => {
            selectItems.push({ title: '', value: '' });
          }
        "
      >
        <AppIcon :icon="IconName.IconPlus" />
      </AppLink>
    </div>
    <div class="flex flex-col gap-5">
      <div
        v-for="(selectItem, selectItemIndex) in selectItems"
        :key="selectItemIndex"
        class="flex"
      >
        <div class="grow">
          <BaseInput
            :model-value="selectItem.title"
            :size="Size.XS"
            class="mb-0.5"
            @update:model-value="
              (newValue) => (selectItems![selectItemIndex] = { ...selectItems![selectItemIndex], title: newValue })
            "
          />
          <BaseInput
            :model-value="selectItem.value"
            :size="Size.XS"
            @update:model-value="
              (newValue) => (selectItems![selectItemIndex] = { ...selectItems![selectItemIndex], value: newValue })
            "
          />
        </div>
        <div class="pl-5">
          <AppLink
            @click="
              () => {
                selectItems = [
                  ...(selectItems ?? []).slice(0, selectItemIndex),
                  ...(selectItems ?? []).slice(selectItemIndex + 1),
                ];
              }
            "
          >
            <AppIcon :icon="IconName.IconWasteBin" />
          </AppLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ISelectItemsChanger',
};
</script>

<script setup lang="ts">
import { Size } from 'gasconsumer-ui-components/enums';
import { IconName } from 'gasconsumer-ui-components/icons-enums';
import { BaseInput } from 'gasconsumer-ui-components/inputs';
import { AppLink } from 'gasconsumer-ui-components/app-link';
import { AppIcon } from 'gasconsumer-ui-components';
import type { ISelectItem } from 'gasconsumer-ui-components/selects-types';

const selectItems = defineModel<Array<ISelectItem>>({ required: true, default: [] });

defineProps<{ label: string }>();
</script>
