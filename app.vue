<template>
  <div
    class="w-full h-screen flex flex-col justify-center items-center gap-4 p-8"
  >
    <p>Alert</p>
    <div class="grid grid-cols-3 gap-2">
      <v-alert type="info" title="Alert title" closable border variant="tonal">
        Praesent congue erat at massa. Nullam vel sem. Aliquam lorem ante
      </v-alert>
      <v-alert type="success" title="Alert title" border variant="tonal">
        Praesent congue erat at massa. Nullam vel sem. Aliquam lorem ante
      </v-alert>
      <v-alert type="warning" title="Alert title" border variant="tonal">
        Praesent congue erat at massa. Nullam vel sem. Aliquam lorem ante
      </v-alert>
      <v-alert type="error" title="Alert title" closable border variant="tonal">
        Praesent congue erat at massa. Nullam vel sem. Aliquam lorem ante
      </v-alert>
    </div>
    <p>Button</p>
    <div class="flex flex-row gap-4">
      <v-btn size="x-small">Button</v-btn>
      <v-btn size="x-small" variant="outlined">Button</v-btn>
      <v-btn size="x-small" variant="text">Button</v-btn>
      <v-btn size="x-small" disabled>Button</v-btn>
    </div>
    <div class="flex flex-row gap-4">
      <v-btn size="small">Button</v-btn>
      <v-btn size="small" variant="outlined">Button</v-btn>
      <v-btn size="small" variant="text">Button</v-btn>
      <v-btn size="small" disabled>Button</v-btn>
    </div>
    <div class="flex flex-row gap-4">
      <v-btn>Button</v-btn>
      <v-btn variant="outlined">Button</v-btn>
      <v-btn variant="text">Button</v-btn>
      <v-btn disabled>Button</v-btn>
    </div>
    <div class="flex flex-row gap-4">
      <v-btn size="large">Button</v-btn>
      <v-btn size="large" variant="outlined">Button</v-btn>
      <v-btn size="large" variant="text">Button</v-btn>
      <v-btn size="large" disabled>Button</v-btn>
    </div>
    <div class="flex flex-row gap-4">
      <v-btn size="x-large">Button</v-btn>
      <v-btn size="x-large" variant="outlined">Button</v-btn>
      <v-btn size="x-large" variant="text">Button</v-btn>
      <v-btn size="x-large" disabled>Button</v-btn>
    </div>
    <div class="flex flex-row gap-4">
      <v-btn prepend-icon="mdi-emoticon-happy-outline">Button</v-btn>
      <v-btn append-icon="mdi-emoticon-happy-outline">Button</v-btn>
      <v-btn
        append-icon="mdi-emoticon-happy-outline"
        prepend-icon="mdi-emoticon-happy-outline"
        >Button</v-btn
      >
      <v-btn icon="mdi-emoticon-happy-outline"></v-btn>
    </div>
    <p>Text Field</p>
    <div class="grid grid-cols-4 w-full gap-4 px-12">
      <v-text-field label="Label" placeholder="placeholder"></v-text-field>
      <v-text-field
        label="Label"
        placeholder="placeholder"
        error
      ></v-text-field>
      <v-text-field
        label="Label"
        placeholder="placeholder"
        focused
      ></v-text-field>
      <v-text-field
        label="Label"
        placeholder="placeholder"
        color="success"
        base-color="success"
      ></v-text-field>
      <v-text-field
        density="compact"
        label="Label"
        placeholder="placeholder"
      ></v-text-field>
      <v-text-field
        density="compact"
        label="label"
        placeholder="test"
        disabled
      ></v-text-field>
    </div>
  </div>
</template>
