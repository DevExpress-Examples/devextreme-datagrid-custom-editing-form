<template>
  <div>
    <i :class="iconClass"/>{{ props.data.text }}
  </div>
</template>
<script lang="ts" setup>
import { computed, defineProps } from 'vue';
import type { DxFormTypes } from 'devextreme-vue/form';

const props = defineProps<{
  data: DxFormTypes.SimpleItemLabelTemplateData,
  icon?: string
}>();

const iconClass = computed(() => `dx-icon dx-icon-${props.icon ?? 'info'}`);
</script>
