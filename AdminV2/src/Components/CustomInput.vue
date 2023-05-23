<template>
  <div class="input-element w-5/6">
    <input
      class="w-6/6"
      ref="inputField"
      :pattern="pattern"
      :id="name"
      @input="$emit('update:modelValue', $event.target.value)"
      :value="modelValue"
      :placeholder="placeholder"
      :style='[cssProps]'
      :disabled="isDisabled"
      :readonly="isReadonly"
      :required="isRequired"
      :autocomplete="autoComplete"
      :list="list"
    />
    <label
      :style='[cssProps]'
      :for="name"
    >{{label}}</label>

  </div>
</template>
<script>
import {ref} from 'vue'
/*const props = defineProps({
  modelValue: {
  type: [Number, String]
  },
  name: {
    type: String
  }

})*/



export default {
  props: {
    modelValue: {
      // required: true,
      type: [Object, String, Number]
    },
    name: {
      required: true,
      type: String,
    },
    value: {
      type: [String, Number, Array]
    },
    placeholder: String,
    label: String,
    inputType: {
      type: String,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    isReadonly: {
      type: Boolean,
      default: false,
    },
    focusInputField: {
      type: Boolean,
      default: false,
    },
    isRequired: {
      type: Boolean,
      default: false,
    },

    autoComplete: {
      type: String,
      default: 'on',
    },
    pattern: {
      type: String,
    },
    list: {
      type: String,
      default: null,
    },
    btnPadding: {
      type: Boolean,
    },
    labelBgColor: {
      type: String,
      default: '#fff'
    },
    borderColor: {
      type: String,
      default: '#fff'
    },
    labelWidth: {
      type: String,
      default: '100%'
    },
    labelFont:{
      type: String,
      default: '14px'
    }
  },
  computed: {
    cssProps() {
      return {
        '--label-background': this.labelBgColor,
        '--activeborder-color': this.borderColor,
        '--label-width': this.labelWidth,
        '--label-font': this.labelFont

      };
    }
  }
}
</script>

<style lang="less">
 input:disabled,
  input[readonly] {
    // background-color: #e9ecef;
    // border-bottom: none !important;
    opacity: 0.5;
  }
  input:disabled + label,
  input[readonly] + label{
    opacity: 0.5;
  }

label{
  font-size: var(--label-font);
}
.input-element {
  position: relative;
  display: flex;
  flex-flow: column-reverse;

  label,
  input {
    transition: all 0.2s;
    touch-action: manipulation;
  }
  input {
    border-radius: 0;
    height: 35px;
    overflow-x: auto; // Test - if an input field has a loooong value
    font-size: 14px;
    //   border: 0;
    border: 1px solid #ccc; // !!With full border
    font-family: inherit;
    border-radius: 3px; // !!With full border
    padding: 10px 10px;

    //   padding: 10px ;
    cursor: text;
    color: var(--text-color);
    font-weight: 500;
    background-color: inherit;

    &::placeholder {
      opacity: 0;
    }
  }
  .switch-type {
    padding-right: 40px;
  }
  .hidden-text {
    -webkit-text-security: disc;
    -mox-text-security: disc;
  }

  // input::placeholder{
  //   opacity: 0;
  // }

  // input:focus::placeholder{
  //     opacity: 1;
  // }

  input:focus {
    outline: 0;
    margin: 0;
    border: solid 1px;
    border-color: var(--activeborder-color);
    &::placeholder {
      opacity: 1;
      color: #8f979c;
    }
  }
  label {
    margin-left: 13px;
    margin-bottom:  10px;
    color: #8f979c;
    font-weight: 500;
    width: var(--label-width);
  }
  input:placeholder-shown + label {
    cursor: text;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transform-origin: 0 0;
    transform: translate(0px, 40px) scale(1);
  }

  ::-webkit-input-placeholder {
    opacity: 0 !important; 
    transition: inherit;
  }
  input:focus::-webkit-input-placeholder {
    opacity: 1 !important;
  }
  input:not(:placeholder-shown) + label,
  input:focus + label,
  input:-webkit-autofill + label {
    transform: translate(0px, 21px) scale(.8); 
    transform-origin: 0 0;
    width: max-content;
    height: 20px;
    text-align: center;
    background-color: var(--label-background);
    color: inherit;
    color: #8f979c;
    font-weight: bold;
  }
 
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px #f8e4cc inset !important;
  }
}
</style>
