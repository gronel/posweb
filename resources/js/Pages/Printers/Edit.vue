<template>
  <div class="container-fluid">
    <!-- Header -->
    <div class="mb-4">
      <div class="d-flex align-items-center mb-3">
        <Link href="/printer" class="btn btn-outline-secondary btn-sm me-3">
          <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16" class="me-1">
            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
          </svg>
          Back
        </Link>
        <div>
          <h2 class="fw-bold mb-1">{{ props.title }} Printer</h2>
          <p class="text-muted mb-0">{{ props.title }} printer details</p>
        </div>
      </div>
    </div>

    <!-- Form Card -->
    <div class="row">
      <div class="col-lg-10">
        <div class="card border-0 shadow-sm">
          <div class="card-body p-4">
            <form @submit.prevent="submit">
                        <div class="row">
                <!-- left column -->
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label for="printerName" class="form-label fw-semibold">Name <span class="text-danger">*</span></label>
                    <input
                      id="printerName"
                      v-model="form.printerName"
                      type="text"
                      class="form-control form-control-sm"
                      :class="{ 'is-invalid': form.errors.printerName }"
                    >
                    <div v-if="form.errors.printerName" class="invalid-feedback">
                      {{ form.errors.printerName }}
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="printerOrder" class="form-label fw-semibold">Order <span class="text-danger">*</span></label>
                    <input
                      id="printerOrder"
                      v-model="form.printerOrder"
                      type="number"
                      class="form-control form-control-sm"
                      :class="{ 'is-invalid': form.errors.printerOrder }"
                    >
                    <div v-if="form.errors.printerOrder" class="invalid-feedback">
                      {{ form.errors.printerOrder }}
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="printerPrintServer" class="form-label fw-semibold">IP Address</label>
                    <input
                      id="printerPrintServer"
                      v-model="form.printerPrintServer"
                      type="text"
                      class="form-control form-control-sm"
                      :class="{ 'is-invalid': form.errors.printerPrintServer }"
                    >
                    <div v-if="form.errors.printerPrintServer" class="invalid-feedback">
                      {{ form.errors.printerPrintServer }}
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="printerPrintPort" class="form-label fw-semibold">Printer Port</label>
                    <input
                      id="printerPrintPort"
                      v-model="form.printerPrintPort"
                      type="text"
                      class="form-control form-control-sm"
                      :class="{ 'is-invalid': form.errors.printerPrintPort }"
                    >
                    <div v-if="form.errors.printerPrintPort" class="invalid-feedback">
                      {{ form.errors.printerPrintPort }}
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="printerAccessType" class="form-label fw-semibold">Type of access to printer</label>
                    <select
                      id="printerAccessType"
                      v-model="form.printerAccessType"
                      class="form-select form-select-sm"
                      :class="{ 'is-invalid': form.errors.printerAccessType }"
                    >
                      <option value="">-- select --</option>
                      <option>Windows Share / SMB</option>
                      <option>JetDirect / Port 9100</option>
                      <option>Zebra</option>
                    </select>
                    <div v-if="form.errors.printerAccessType" class="invalid-feedback">
                      {{ form.errors.printerAccessType }}
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="printerDensity" class="form-label fw-semibold">Darkness</label>
                    <select
                      id="printerDensity"
                      v-model="form.printerDensity"
                      class="form-select form-select-sm"
                      :class="{ 'is-invalid': form.errors.printerDensity }"
                    >
                      <option value="">-- select --</option>
                      <option>Low</option>
                      <option>Medium</option>
                      <option>High</option>
                    </select>
                    <div v-if="form.errors.printerDensity" class="invalid-feedback">
                      {{ form.errors.printerDensity }}
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="printerDpi" class="form-label fw-semibold">DPI</label>
                    <select
                      id="printerDpi"
                      v-model="form.printerDpi"
                      class="form-select form-select-sm"
                      :class="{ 'is-invalid': form.errors.printerDpi }"
                    >
                      <option value="">-- select --</option>
                      <option>203</option>
                      <option>300</option>
                      <option>600</option>
                    </select>
                    <div v-if="form.errors.printerDpi" class="invalid-feedback">
                      {{ form.errors.printerDpi }}
                    </div>
                  </div>
                </div>
                <!-- right column -->
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label for="printerUsername" class="form-label fw-semibold">Username</label>
                    <input
                      id="printerUsername"
                      v-model="form.printerUsername"
                      type="text"
                      class="form-control form-control-sm"
                      :class="{ 'is-invalid': form.errors.printerUsername }"
                    >
                    <div v-if="form.errors.printerUsername" class="invalid-feedback">
                      {{ form.errors.printerUsername }}
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="printerPassword" class="form-label fw-semibold">Password</label>
                    <input
                      id="printerPassword"
                      v-model="form.printerPassword"
                      type="password"
                      class="form-control form-control-sm"
                      :class="{ 'is-invalid': form.errors.printerPassword }"
                    >
                    <div v-if="form.errors.printerPassword" class="invalid-feedback">
                      {{ form.errors.printerPassword }}
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="printerShellExec" class="form-label fw-semibold">Custom Shell Command</label>
                    <textarea
                      id="printerShellExec"
                      v-model="form.printerShellExec"
                      rows="4"
                      class="form-control form-control-sm"
                      :class="{ 'is-invalid': form.errors.printerShellExec }"
                    ></textarea>
                    <div v-if="form.errors.printerShellExec" class="invalid-feedback">
                      {{ form.errors.printerShellExec }}
                    </div>
                  </div>
                  <div class="mb-3">
                    <small class="text-muted">
                      Available variables: {SERVER}, {ESC_SERVER}, {PORT}, {ESC_PORT}, {USERNAME}, {ESC_USERNAME}, {PASSWORD}, {ESC_PASSWORD}, {LABEL_FILE_PATH}, {ESC_LABEL_FILE_PATH}.
                    </small>
                  </div>
                  <div class="form-check">
                    <input
                      id="printerActive"
                      v-model="form.printerActive"
                      type="checkbox"
                      class="form-check-input"
                    >
                    <label for="printerActive" class="form-check-label">Active?</label>
                  </div>
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
                  {{ form.processing ? (props.title === 'Edit' ? 'Updating...' : 'Creating...') : (props.title === 'Edit' ? 'Update Printer' : 'Create Printer') }}
                </button>
                <Link href="/printer" class="btn btn-outline-secondary btn-lg">
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
  printer: Object,
});

const form = useForm(props.printer ? {
  id: props.printer.id || null,
  printerName: props.printer.printerName || '',
  printerType: props.printer.printerType || '',
  printerOrder: props.printer.printerOrder || '',
  printerPrintServer: props.printer.printerPrintServer || '',
  printerPrintPort: props.printer.printerPrintPort || '',
  printerAccessType: props.printer.printerAccessType || '',
  printerUsername: props.printer.printerUsername || '',
  printerPassword: props.printer.printerPassword || '',
  printerShellExec: props.printer.printerShellExec || '',
  printerActive: props.printer.printerActive ? true : false,
  printerUnit: props.printer.printerUnit || '',
  printerLabels: props.printer.printerLabels || '',
  printerDensity: props.printer.printerDensity || '',
  printerDpi: props.printer.printerDpi || '',
} : {
  id: null,
  printerName: '',
  printerType: '',
  printerOrder: '',
  printerPrintServer: '',
  printerPrintPort: '',
  printerAccessType: '',
  printerUsername: '',
  printerPassword: '',
  printerShellExec: '',
  printerActive: false,
  printerUnit: '',
  printerLabels: '',
  printerDensity: '',
  printerDpi: '',
});

const submit = () => {
  // convert boolean active to string/appropriate value
  form.printerActive = form.printerActive ? 'Active' : 'Inactive';
  form.post('/printer/store');
};
</script>
