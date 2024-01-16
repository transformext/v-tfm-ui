<script setup lang="ts">
type Props = {
  label: string
  labelStrong?: boolean
}

withDefaults(defineProps<Props>(), {
  labelStrong: false,
})
</script>

<template>
  <div>
    <div
      :class="{
        'text-sm': true,
        'font-bold': labelStrong,
      }"
    >
      {{ label }}
    </div>
    <v-text-field variant="outlined" v-bind="$attrs"></v-text-field>
  </div>
</template>
