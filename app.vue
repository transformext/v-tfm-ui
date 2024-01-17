<template>
  <div class="w-full h-screen flex flex-col justify-center items-center gap-4">
    <p>Button</p>
    <div class="grid grid-cols-4 gap-4">
      <v-btn size="x-small">Button</v-btn>
      <v-btn size="x-small" variant="outlined">Button</v-btn>
      <v-btn size="x-small" variant="text">Button</v-btn>
      <v-btn size="x-small" disabled>Button</v-btn>

      <v-btn size="small">Button</v-btn>
      <v-btn size="small" variant="outlined">Button</v-btn>
      <v-btn size="small" variant="text">Button</v-btn>
      <v-btn size="small" disabled>Button</v-btn>

      <v-btn>Button</v-btn>
      <v-btn variant="outlined">Button</v-btn>
      <v-btn variant="text">Button</v-btn>
      <v-btn disabled>Button</v-btn>

      <v-btn size="large">Button</v-btn>
      <v-btn size="large" variant="outlined">Button</v-btn>
      <v-btn size="large" variant="text">Button</v-btn>
      <v-btn size="large" disabled>Button</v-btn>

      <v-btn size="x-large">Button</v-btn>
      <v-btn size="x-large" variant="outlined">Button</v-btn>
      <v-btn size="x-large" variant="text">Button</v-btn>
      <v-btn size="x-large" disabled>Button</v-btn>
    </div>

    <tfm-text-field :label="'label'" placeholder="test"></tfm-text-field>
  </div>
</template>
