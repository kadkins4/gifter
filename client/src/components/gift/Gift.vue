<template>
<!-- TODO on invalid validation, make sure we are hilighting the input in red -->
<!-- TODO need to mark required fields with a red asterisk -->
  <form>
    <div class="t-border">
      <h3>Add A New Item</h3>
      <!-- TODO need to create a template for forms, including required text,
          error messaging and help text -->

      <!-- name -->
      <div>
        <label for="">Name<span class="required"></span></label>
        <input type="text" v-model="item.name" required>
        <p class="help-text" v-if="validationErrors.name">{{validationErrors.name}}</p>
      </div>

      <!-- url -->
      <div>
        <label for="">URL<span class="required"></span></label>
        <input type="text" v-model="item.url" required>
        <p class="help-text" v-if="validationErrors.url">{{validationErrors.url}}</p>
      </div>

      <div>
        <label for="">Quantity<span class="required"></span></label>
        <!-- TODO the quantity radio is confusing -->
        <!-- <input type="radio" name="quantityType" id="totalUnits">
        <input type="radio" name="quantityType" id="totalPackages"> -->
        <input type="text" v-model="item.quantity" required>
        <p class="help-text" v-if="validationErrors.quantity">{{validationErrors.quantity}}</p>
      </div>

      <div>
        <label for="">Add To List(s):<span class="required"></span></label>
        <!-- Add to at least one list -->
        <multi-select 
          v-model="selectedLists"
          :options="availableLists"
          track-by="value"
          label="name"
          :allow-empty="false"
          :multiple="true"
          :preselect-first="true"
        ></multi-select>
        <p class="help-text" v-if="validationErrors.selectedLists">{{validationErrors.selectedLists}}</p>
      </div>
      <div>
        <button type="button" v-on:click="trySubmitItem">Add Item</button>
      </div>
    </div>
  </form>
</template>

<script>
import { validateGiftName, validateUrl, validateQuantity, mustSelectOneOrMore } from '../../validation';
import MultiSelect from 'vue-multiselect';

export default {
  name: 'Gift',
  components: {
    MultiSelect
  },
  data () {
    return {
      item: {
        name: 'BB Gun',
        id: null,
        url: 'www.amazon.com',
        quantity: 34,
      },
      valid: true,
      validationErrors: {
        name: null,
        url: null,
        quantity: null,
        selectedLists: null
      },
      selectedLists: [],
      availableLists: [
        // TODO user id will be added to the value so that a list can be found
        { name: 'Wishlist', value: '[@userId]_default', isPublic: false },
        { name: 'Christmas', value: '[@userId]_christmas', isPublic: true },
        { name: 'Bday List', value: '[@userId]_bday_list', isPublic: true }
      ]
    }
  },
  methods: {
    trySubmitItem() {
      // validate item
      this.validateItem();
      if (!this.valid) return;

      // TODO push to appropriate lists
    },
    validateItem() {
      for (const validationItem in this.validationErrors) {
        this.validationErrors[validationItem] = null;
      }
      this.valid = true;

      // name
      const isNameValid = validateGiftName(this.item.name);
      if (isNameValid) { this.invalidateForm('name', isNameValid); }

      // url
      const isUrlValid = validateUrl(this.item.url);
      if (isUrlValid) { this.invalidateForm('url', isUrlValid); }
      
      // quantity
      const isQuantityValid = validateQuantity(this.item.quantity);
      if (isQuantityValid) { this.invalidateForm('quantity', isQuantityValid); }

      // list
      if (this.selectedLists.length === 0) this.invalidateForm('selectedLists', mustSelectOneOrMore);  
    },
    invalidateForm(item, error) {
      this.validationErrors[item] = error;
      this.valid = false;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  h3 {
    margin-top: 10px;
  }

  .t-border {
    margin-top: 10px;
    border: 1px solid red;
    padding: 20px 0px;
  }

  .required:after {
    color: red;
    content: " *";
  }

  .multiselect {
    width: 400px !important;
  }
</style>