<template>
  <div class="containerForm" id="contactForm">
    <h4 class="title">STAY INFORMED ABOUT THE LINE</h4>
    <v-form @submit="onSubmit" v-model="form" class="form" ref="formRef">
      <div class="containerInputs">
        <v-text-field
          v-model="formData.firstName.value"
          :rules="FirstNameRules"
          label="First name"
          variant="outlined"
          required
        ></v-text-field>
        <v-text-field
          v-model="formData.lastName.value"
          :rules="LastNameRules"
          label="Last name"
          variant="outlined"
          required
        ></v-text-field>
        <v-text-field
          v-model="formData.email.value"
          :rules="EmailRules"
          label="Email address"
          variant="outlined"
          required
          type="email"
        ></v-text-field>
        <v-select
          v-model="formData.select.value"
          :items="ItemSelect"
          :rules="SelectRules"
          label="Area of interest:"
          variant="outlined"
          required
        ></v-select>
      </div>
      <div class="containerCheckbox">
        <v-checkbox
          v-model="formData.checkbox.value"
          :rules="CheckboxRules"
          label="Contact permissions"
          variant="outlined"
          required
        ></v-checkbox>
      </div>
      <div>
        <button
          :disabled="!form"
          size="large"
          class="btnSubmit"
          :class="{ inactive: !form }"
        >
          SUBMIT
        </button>
      </div>
    </v-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  FirstNameRules,
  LastNameRules,
  EmailRules,
  SelectRules,
  CheckboxRules,
} from "@/RulesForm/RulesForm";
import { Ref } from "vue";
import { SubmitEventPromise } from "vuetify/lib/framework.mjs";

let form = ref(false);
let formRef: Ref = ref(null);
let formData = {
  firstName: ref(""),
  lastName: ref(""),
  email: ref(""),
  select: ref(null),
  checkbox: ref(false),
};
const ItemSelect = ["Business", "Travel", "Live"];
const onSubmit = async (event: SubmitEventPromise) => {
  event.preventDefault();
  const isValid = await formRef.value.validate();
  if (isValid) {
    formData.firstName.value = "";
    formData.lastName.value = "";
    formData.email.value = "";
    formData.select.value = null;
    formData.checkbox.value = false;
    await formRef.value.reset();
  }
};
</script>

<style scoped>
.containerForm {
  padding: 50px 3em;
  background-color: #f9f7f2;
}
.title {
  font-size: clamp(28px, calc(23.5px + 0.9375vw), 37px);
  letter-spacing: clamp(0.09em, calc(0.09em + 0.00313vw - 0.015px), 0.12em);
  font-weight: 400;
  padding-bottom: 50px;
}

.containerInputs {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-row-gap: 40px;
  grid-column-gap: 40px;
}
.containerCheckbox {
  max-width: 400px;
}
.btnSubmit {
  border: 1px solid #e2e0da;
  background-color: #ebc03f;
  color: #fff;
  padding: 10px 30px;
  border-radius: 30px;
}
.inactive {
  cursor: not-allowed;
}
@media screen and (max-width: 750px) {
  .containerInputs {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .containerForm {
    padding: 50px 1em;
  }
}
</style>
