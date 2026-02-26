<template>
  <div class="container-fluid">
    <!-- Header -->
    <div class="mb-4">
      <div class="d-flex align-items-center mb-3">
        <Link href="/supplier" class="btn btn-outline-secondary btn-sm me-3">
          <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16" class="me-1">
            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
          </svg>
          Back
        </Link>
        <div>
          <h2 class="fw-bold mb-1">Create New Supplier</h2>
          <p class="text-muted mb-0">Add a new supplier to the system</p>
        </div>
      </div>
    </div>

    <!-- Form Card -->
    <div class="row">
      <div class="col-lg-10">
        <div class="card border-0 shadow-sm">
          <div class="card-body p-4">
            <form @submit.prevent="submit">

              <!-- Supplier Name -->
              <div class="mb-3">
                <label for="suppliername" class="form-label fw-semibold">Supplier Name</label>
                <input
                  id="suppliername"
                  v-model="form.suppliername"
                  type="text"
                  class="form-control form-control-lg"
                  :class="{ 'is-invalid': form.errors.suppliername }"
                  placeholder="Enter supplier name"
                >
                <div v-if="form.errors.suppliername" class="invalid-feedback">
                  {{ form.errors.suppliername }}
                </div>
              </div>

              <!-- Email -->
              <div class="mb-3">
                <label for="email" class="form-label fw-semibold">Email</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  class="form-control form-control-lg"
                  :class="{ 'is-invalid': form.errors.email }"
                  placeholder="supplier@example.com"
                >
                <div v-if="form.errors.email" class="invalid-feedback">
                  {{ form.errors.email }}
                </div>
              </div>

              <!-- Address -->
              <div class="mb-3">
                <label for="address" class="form-label fw-semibold">Address</label>
                <textarea
                  id="address"
                  v-model="form.address"
                  class="form-control form-control-lg"
                  :class="{ 'is-invalid': form.errors.address }"
                  placeholder="Enter address"
                  rows="3"
                ></textarea>
                <div v-if="form.errors.address" class="invalid-feedback">
                  {{ form.errors.address }}
                </div>
              </div>

              <!-- Contact Info Row -->
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="telno" class="form-label fw-semibold">Tel No</label>
                  <input
                    id="telno"
                    v-model="form.telno"
                    type="number"
                    class="form-control form-control-lg"
                    :class="{ 'is-invalid': form.errors.telno }"
                    placeholder="Tel no"
                  >
                  <div v-if="form.errors.telno" class="invalid-feedback">
                    {{ form.errors.telno }}
                  </div>
                </div>
              </div>

              <!-- Cell Row -->
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="cellno" class="form-label fw-semibold">Cell No</label>
                  <input
                    id="cellno"
                    v-model="form.cellno"
                    type="number"
                    class="form-control form-control-lg"
                    :class="{ 'is-invalid': form.errors.cellno }"
                    placeholder="Cell no"
                  >
                  <div v-if="form.errors.cellno" class="invalid-feedback">
                    {{ form.errors.cellno }}
                  </div>
                </div>
              </div>

              <!-- Accreditation -->
              <div class="mb-3">
                <label for="accreditation" class="form-label fw-semibold">Accreditation</label>
                <input
                  id="accreditation"
                  v-model="form.accreditation"
                  type="text"
                  class="form-control form-control-lg"
                  :class="{ 'is-invalid': form.errors.accreditation }"
                  placeholder="Accreditation"
                >
                <div v-if="form.errors.accreditation" class="invalid-feedback">
                  {{ form.errors.accreditation }}
                </div>
              </div>

              <!-- Supplier Type, Category, Payment Terms Row -->
              <div class="row">
                <div class="col-md-4 mb-3">
                  <label for="suppliertype" class="form-label fw-semibold">Supplier Type</label>
                  <input
                    id="suppliertype"
                    v-model.number="form.suppliertype"
                    type="number"
                    class="form-control form-control-lg"
                    :class="{ 'is-invalid': form.errors.suppliertype }"
                    placeholder="Type ID"
                  >
                  <div v-if="form.errors.suppliertype" class="invalid-feedback">
                    {{ form.errors.suppliertype }}
                  </div>
                </div>
                <div class="col-md-4 mb-3">
                  <label for="comcategory" class="form-label fw-semibold">Category</label>
                  <input
                    id="comcategory"
                    v-model.number="form.comcategory"
                    type="number"
                    class="form-control form-control-lg"
                    :class="{ 'is-invalid': form.errors.comcategory }"
                    placeholder="Category ID"
                  >
                  <div v-if="form.errors.comcategory" class="invalid-feedback">
                    {{ form.errors.comcategory }}
                  </div>
                </div>
                <div class="col-md-4 mb-3">
                  <label for="payterms" class="form-label fw-semibold">Payment Terms</label>
                  <input
                    id="payterms"
                    v-model.number="form.payterms"
                    type="text"
                    class="form-control form-control-lg"
                    :class="{ 'is-invalid': form.errors.payterms }"
                    placeholder="Terms ID"
                  >
                  <div v-if="form.errors.payterms" class="invalid-feedback">
                    {{ form.errors.payterms }}
                  </div>
                </div>
              </div>

              <!-- Contact Name and Designation Row -->
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="contactname" class="form-label fw-semibold">Contact Name</label>
                  <input
                    id="contactname"
                    v-model="form.contactname"
                    type="text"
                    class="form-control form-control-lg"
                    :class="{ 'is-invalid': form.errors.contactname }"
                    placeholder="Contact name"
                  >
                  <div v-if="form.errors.contactname" class="invalid-feedback">
                    {{ form.errors.contactname }}
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="designation" class="form-label fw-semibold">Designation</label>
                  <input
                    id="designation"
                    v-model="form.designation"
                    type="text"
                    class="form-control form-control-lg"
                    :class="{ 'is-invalid': form.errors.designation }"
                    placeholder="Designation"
                  >
                  <div v-if="form.errors.designation" class="invalid-feedback">
                    {{ form.errors.designation }}
                  </div>
                </div>
              </div>

              <!-- Department -->
              <div class="mb-3">
                <label for="department" class="form-label fw-semibold">Department</label>
                <input
                  id="department"
                  v-model="form.department"
                  type="text"
                  class="form-control form-control-lg"
                  :class="{ 'is-invalid': form.errors.department }"
                  placeholder="Department"
                >
                <div v-if="form.errors.department" class="invalid-feedback">
                  {{ form.errors.department }}
                </div>
              </div>

              <!-- Remarks -->
              <div class="mb-4">
                <label for="remarks" class="form-label fw-semibold">Remarks</label>
                <textarea
                  id="remarks"
                  v-model="form.remarks"
                  class="form-control form-control-lg"
                  :class="{ 'is-invalid': form.errors.remarks }"
                  placeholder="Enter remarks"
                  rows="3"
                ></textarea>
                <div v-if="form.errors.remarks" class="invalid-feedback">
                  {{ form.errors.remarks }}
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
                  {{ form.processing ? 'Creating...' : 'Create Supplier' }}
                </button>
                <Link href="/supplier" class="btn btn-outline-secondary btn-lg">
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

const form = useForm({
  suppliername: '',
  address: '',
  telno: '',
  cellno: '',
  accreditation: '',
  suppliertype: null,
  comcategory: null,
  payterms: null,
  contactname: '',
  designation: '',
  department: '',
  email: '',
  remarks: '',
});

const submit = () => {
  form.post('/supplier');
};
</script>

<style scoped>
.form-control-lg {
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border-radius: 0.5rem;
}

.form-control:focus,
.form-control:focus-visible {
  border-color: #2563eb;
  box-shadow: 0 0 0 0.2rem rgba(37, 99, 235, 0.25);
}

.btn-lg {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 0.5rem;
}
</style>
