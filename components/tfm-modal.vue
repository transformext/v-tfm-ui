<script setup lang="ts">
const dialog = ref(false)
const valueInput = ref('')

type Props = {
  modelValue: boolean
  title?: string
  text?: string
  textBtnLef?: string
  textBtnRight?: string
  type?: string
  actionRow?: boolean
  closed?: boolean
  inputPlaceholder?: string
  value?: string
}
const props = withDefaults(defineProps<Props>(), {
  title: '',
  text: '',
  textBtnLef: '',
  textBtnRight: '',
  type: '',
  inputPlaceholder: '',
  value: '',
  actionRow: false,
  closed: false,
})
const showCopied = ref(false)

onMounted(() => {
  if (props.modelValue) dialog.value = props.modelValue
  if (props.value) valueInput.value = props.value
})
watch(
  [() => props.modelValue, () => props.value],
  ([newModelValue, newValue]) => {
    dialog.value = newModelValue
    if (newValue) {
      valueInput.value = newValue
    }
  },
)

watch(dialog, (newValue) => {
  emit('update:modelValue', newValue)
})

const copyText = (value: any) => {
  navigator.clipboard.writeText(value)
  showCopied.value = true
  setTimeout(() => {
    showCopied.value = false
  }, 1000)
}
const emit = defineEmits(['update:modelValue', 'onSubmit', 'onCopy'])
</script>
<template>
  <v-dialog v-bind="$attrs" v-model="dialog" width="500">
    <v-card width="358">
      <div
        class="flex flex-row justify-start items-center text-center mt-4 mx-4"
      >
        <div
          :class="`${closed ? 'w-[90%] ml-8' : 'w-full'} text-lg font-semibold`"
        >
          {{ title }}
        </div>
        <v-btn
          v-if="closed"
          size="small"
          class="text-black"
          variant="text"
          icon="mdi-close"
          @click="
            () => {
              emit('update:modelValue', false)
            }
          "
        >
        </v-btn>
      </div>
      <v-card-text class="text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
        <v-text-field
          v-if="type === 'copy'"
          :value="value"
          :placeholder="inputPlaceholder"
          readonly
          hide-details
        >
          <template #append-inner>
            <v-tooltip v-model="showCopied" location="top">
              <template #activator="{ props }">
                <v-btn
                  size="small"
                  v-bind="props"
                  variant="text"
                  icon="mdi-content-copy"
                  @click="
                    () => {
                      copyText(value)
                      emit('onCopy', value)
                    }
                  "
                ></v-btn>
              </template>

              Copied!
            </v-tooltip>
          </template>
        </v-text-field>
        <v-text-field
          v-if="type === 'input'"
          v-model="valueInput"
          :placeholder="inputPlaceholder"
          hide-details
        >
        </v-text-field>
        <div
          :class="` ${actionRow ? 'flex  flex-col-reverse' : textBtnLeft && textBtnRight ? 'grid grid-cols-2' : 'grid grid-flow-col'} mt-4 gap-2`"
        >
          <v-btn
            v-if="textBtnLeft"
            variant="outlined"
            size="large"
            block
            @click="
              () => {
                emit('update:modelValue', false)
              }
            "
          >
            {{ textBtnLeft }}
          </v-btn>
          <v-btn
            v-if="textBtnRight"
            variant="flat"
            size="large"
            block
            @click="
              () => {
                emit('update:modelValue', false)
                emit('onSubmit', valueInput)
              }
            "
          >
            {{ textBtnRight }}
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style scoped></style>
