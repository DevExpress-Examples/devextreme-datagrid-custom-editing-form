<template>
  <div id="template-content">
    <i
      id="help-info"
      class="dx-icon dx-icon-info"
    />
    Additional <br> {{ props.data.text }}
    <DxTooltip
      target="#help-info"
      show-event="mouseenter"
      hide-event="mouseleave"
    >
      <template #content>
        <div id="tooltip-content">This field must not exceed 200 characters</div>
      </template>
    </DxTooltip>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { DxTooltip } from 'devextreme-vue/tooltip';
import type { DxFormTypes } from 'devextreme-vue/form';

const props = defineProps<{
  data: DxFormTypes.SimpleItemLabelTemplateData
}>();
</script>

<style scoped>
#help-info {
    color: #42a5f5;
}

#tooltip-content {
    font-size: 14px;
    font-weight: bold;
}

#template-content {
    display: inline-flex;
}
</style>
