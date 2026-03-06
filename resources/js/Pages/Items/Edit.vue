<template>
  <div class="container-fluid">
    <!-- Header -->
    <div class="mb-4">
      <div class="d-flex align-items-center mb-3">
        <Link href="/item" class="btn btn-outline-secondary btn-sm me-3">
          <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16" class="me-1">
            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
          </svg>
          Back
        </Link>
        <div>
          <h2 class="fw-bold mb-1">{{ props.title }} Item</h2>
          <p class="text-muted mb-0">{{ props.title }} item details</p>
        </div>
      </div>
    </div>

    <!-- Form Card -->
    <div class="row">
      <div class="col-lg-10">
        <div class="card border-0 shadow-sm">
          <div class="card-body p-4">
            <form @submit.prevent="submit">

              <!-- Item Code -->
              <div class="mb-3">
                <label for="itemcode" class="form-label fw-semibold">Item Code</label>
                <input
                  id="itemcode"
                  v-model="form.itemcode"
                  type="text"
                  class="form-control form-control-lg"
                  :class="{ 'is-invalid': form.errors.itemcode }"
                  placeholder="Enter item code"
                >
                <div v-if="form.errors.itemcode" class="invalid-feedback">
                  {{ form.errors.itemcode }}
                </div>
              </div>

              <!-- Item Name -->
              <div class="mb-3">
                <label for="itemname" class="form-label fw-semibold">Item Name</label>
                <input
                  id="itemname"
                  v-model="form.itemname"
                  type="text"
                  class="form-control form-control-lg"
                  :class="{ 'is-invalid': form.errors.itemname }"
                  placeholder="Enter item name"
                >
                <div v-if="form.errors.itemname" class="invalid-feedback">
                  {{ form.errors.itemname }}
                </div>
              </div>

              <!-- Description -->
              <div class="mb-3">
                <label for="itemdescription" class="form-label fw-semibold">Description</label>
                <textarea
                  id="itemdescription"
                  v-model="form.itemdescription"
                  class="form-control form-control-lg"
                  :class="{ 'is-invalid': form.errors.itemdescription }"
                  placeholder="Enter description"
                  rows="3"
                ></textarea>
                <div v-if="form.errors.itemdescription" class="invalid-feedback">
                  {{ form.errors.itemdescription }}
                </div>
              </div>

              <!-- Category and Location Row -->
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="itemcategoryid" class="form-label fw-semibold">Category</label>
                  <select
                    id="itemcategoryid"
                    v-model="form.itemcategoryid"
                    class="form-select form-select-lg"
                    :class="{ 'is-invalid': form.errors.itemcategoryid }"
                  >
                    <option value="">Select Category</option>
                    <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.itemcategory }}</option>
                  </select>
                  <div v-if="form.errors.itemcategoryid" class="invalid-feedback">
                    {{ form.errors.itemcategoryid }}
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="locationid" class="form-label fw-semibold">Location</label>
                  <select
                    id="locationid"
                    v-model="form.locationid"
                    class="form-select form-select-lg"
                    :class="{ 'is-invalid': form.errors.locationid }"
                  >
                    <option value="">Select Location</option>
                    <option v-for="location in locations" :key="location.id" :value="location.id">{{ location.location }}</option>
                  </select>
                  <div v-if="form.errors.locationid" class="invalid-feedback">
                    {{ form.errors.locationid }}
                  </div>
                </div>
              </div>

              <!-- Brand Type and UOM Row -->
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="brandtype" class="form-label fw-semibold">Brand Type</label>
                  <input
                    id="brandtype"
                    v-model="form.brandtype"
                    type="text"
                    class="form-control form-control-lg"
                    :class="{ 'is-invalid': form.errors.brandtype }"
                    placeholder="Brand type"
                  >
                  <div v-if="form.errors.brandtype" class="invalid-feedback">
                    {{ form.errors.brandtype }}
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="uom" class="form-label fw-semibold">Unit of Measure (UOM)</label>
                  <input
                    id="uom"
                    v-model="form.uom"
                    type="text"
                    class="form-control form-control-lg"
                    :class="{ 'is-invalid': form.errors.uom }"
                    placeholder="UOM (e.g., pcs, box, kg)"
                  >
                  <div v-if="form.errors.uom" class="invalid-feedback">
                    {{ form.errors.uom }}
                  </div>
                </div>
              </div>

              <!-- Stock Quantity Row -->
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="stocklevelqty" class="form-label fw-semibold">Stock Level Quantity</label>
                  <input
                    id="stocklevelqty"
                    v-model.number="form.stocklevelqty"
                    type="number"
                    class="form-control form-control-lg"
                    :class="{ 'is-invalid': form.errors.stocklevelqty }"
                    placeholder="0"
                  >
                  <div v-if="form.errors.stocklevelqty" class="invalid-feedback">
                    {{ form.errors.stocklevelqty }}
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="stackoh" class="form-label fw-semibold">Stock On Hand</label>
                  <input
                    id="stackoh"
                    v-model.number="form.stackoh"
                    type="number"
                    class="form-control form-control-lg"
                    :class="{ 'is-invalid': form.errors.stackoh }"
                    placeholder="0"
                  >
                  <div v-if="form.errors.stackoh" class="invalid-feedback">
                    {{ form.errors.stackoh }}
                  </div>
                </div>
              </div>

              <!-- Pricing Row -->
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="costprice" class="form-label fw-semibold">Cost Price</label>
                  <input
                    id="costprice"
                    v-model.number="form.costprice"
                    type="number"
                    step="0.01"
                    class="form-control form-control-lg"
                    :class="{ 'is-invalid': form.errors.costprice }"
                    placeholder="0.00"
                  >
                  <div v-if="form.errors.costprice" class="invalid-feedback">
                    {{ form.errors.costprice }}
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="sellingprice" class="form-label fw-semibold">Selling Price</label>
                  <input
                    id="sellingprice"
                    v-model.number="form.sellingprice"
                    type="number"
                    step="0.01"
                    class="form-control form-control-lg"
                    :class="{ 'is-invalid': form.errors.sellingprice }"
                    placeholder="0.00"
                  >
                  <div v-if="form.errors.sellingprice" class="invalid-feedback">
                    {{ form.errors.sellingprice }}
                  </div>
                </div>
              </div>

              <!-- Active Status -->
              <div class="mb-4">
                <label for="isactive" class="form-label fw-semibold">Status</label>
                <div class="form-check form-switch">
                  <input
                    id="isactive"
                    v-model="form.isactive"
                    type="checkbox"
                    class="form-check-input"
                    :class="{ 'is-invalid': form.errors.isactive }"
                  >
                  <label for="isactive" class="form-check-label">Active</label>
                </div>
                <div v-if="form.errors.isactive" class="invalid-feedback">
                  {{ form.errors.isactive }}
                </div>
              </div>

              <!-- Buttons -->
              <div class="d-flex gap-2">
                <button
                  type="submit"
                  class="btn btn-primary btn-lg"
                  :disabled="form.processing"
                >
                  <span v-if="form.processing" class="spinner-border spinner-border-sm me-2"></span>
                  {{ form.processing ? 'Saving...' : 'Save Item' }}
                </button>
                <Link href="/item" class="btn btn-outline-secondary btn-lg">
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useForm, Link } from '@inertiajs/vue3';

const props = defineProps({
  title: String,
  item: Object,
  categories: Array,
  locations: Array,
});

const form = useForm(props.item ? {
  id: props.item.id || null,
  itemcode: props.item.itemcode || '',
  itemname: props.item.itemname || '',
  itemdescription: props.item.itemdescription || '',
  locationid: props.item.locationid || '',
  itemcategoryid: props.item.itemcategoryid || '',
  brandtype: props.item.brandtype || '',
  uom: props.item.uom || '',
  stocklevelqty: props.item.stocklevelqty || 0,
  stackoh: props.item.stackoh || 0,
  isactive: !!props.item.isactive,
  itemimg: props.item.itemimg || '',
  costprice: props.item.costprice || 0,
  sellingprice: props.item.sellingprice || 0,
} : {
  id: null,
  itemcode: '',
  itemname: '',
  itemdescription: '',
  locationid: '',
  itemcategoryid: '',
  brandtype: '',
  uom: '',
  stocklevelqty: 0,
  stackoh: 0,
  isactive: false,
  itemimg: '',
  costprice: 0,
  sellingprice: 0,
});

const submit = () => {
  form.post('/item/store');
};
</script>

<style scoped>
.form-control-lg,
.form-select-lg {
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border-radius: 0.5rem;
}

.form-control:focus,
.form-control:focus-visible,
.form-select:focus,
.form-select:focus-visible {
  border-color: #2563eb;
  box-shadow: 0 0 0 0.2rem rgba(37, 99, 235, 0.25);
}

.btn-lg {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 0.5rem;
}

.form-check-input {
  height: 1.25rem;
  width: 2.5rem;
  margin-top: 0.2rem;
}
</style>