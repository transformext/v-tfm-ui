<script setup lang="ts">
const dialog1 = ref(false)
const dialog2 = ref(false)
const dialog3 = ref(false)
const dialog4 = ref(false)
const dialog5 = ref(false)

const valueDefault = ref('')

const desserts = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    iron: '1',
  },
  {
    name: 'Jelly bean',
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    iron: '0',
  },
  {
    name: 'KitKat',
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    iron: '6',
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    iron: '7',
  },
  {
    name: 'Gingerbread',
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    iron: '16',
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    iron: '1',
  },
  {
    name: 'Lollipop',
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    iron: '2',
  },
  {
    name: 'Cupcake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    iron: '8',
  },
  {
    name: 'Honeycomb',
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    iron: '45',
  },
  {
    name: 'Donut',
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    iron: '22',
  },
]
</script>

<template>
  <div
    class="w-full h-full flex flex-col justify-center items-center gap-4 p-8 overflow-auto"
  >
    <p>Table</p>
    <div class="w-full px-6">
      <v-data-table :items="desserts"></v-data-table>
    </div>
    <p>Modal</p>
    <div class="flex flex-row gap-2">
      <v-btn @click="() => (dialog1 = true)">Modal Default</v-btn>
      <v-btn @click="() => (dialog2 = true)">Modal default 1 btn</v-btn>
      <v-btn @click="() => (dialog3 = true)">Modal default 2 btn</v-btn>
      <v-btn @click="() => (dialog4 = true)">Modal Copy</v-btn>
      <v-btn @click="() => (dialog5 = true)">Modal Input</v-btn>
    </div>
    <tfm-modal
      title="Default เข้าสู่ระบบ"
      :model-value="dialog1"
      close-on-back
      closed
      text-btn-left="ยกเลิก"
      text-btn-right="เข้าสู่ระบบ"
      @update:model-value="(e) => (dialog1 = e)"
    />
    <tfm-modal
      title="default 1 btn"
      :model-value="dialog2"
      text-btn-left="ยกเลิก"
      @update:model-value="(e) => (dialog2 = e)"
    />
    <tfm-modal
      title="default 2 btn"
      :model-value="dialog3"
      text-btn-left="ยกเลิก"
      text-btn-right="เข้าสู่ระบบ"
      @update:model-value="(e) => (dialog3 = e)"
    />
    <tfm-modal
      title="กรุณาใช้งานบนคอมพิวเตอร์"
      type="copy"
      :model-value="dialog4"
      text-btn-right="ปิด"
      input-placeholder="text copy"
      value="biz.teenaii.com"
      @update:model-value="(e) => (dialog4 = e)"
      @on-copy="(e) => console.log('copy', e)"
    />
    <tfm-modal
      title="คุณต้องการลบข้อมูลใช่หรือไม่"
      type="input"
      :model-value="dialog5"
      text-btn-left="ยกเลิก"
      text-btn-right="ยืนยัน"
      input-placeholder="กรุณาพิมพ์คำว่า “ยืนยัน” เพื่อลบ"
      :value="valueDefault"
      closed
      @update:model-value="(e) => (dialog5 = e)"
      @on-submit="(e) => console.log('onSubmit', e)"
    />

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
