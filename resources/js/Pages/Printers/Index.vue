<template>
  <div class="container-fluid">
    <!-- Header -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div class="d-flex align-items-center">
        <!-- action dropdown + view toggle -->
        <div class="btn-group me-3">
          <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Action
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Export</a></li>
            <li><a class="dropdown-item" href="#">Print</a></li>
          </ul>
        </div>
        <button class="btn btn-secondary" title="Toggle view">
          <!-- simple list icon -->
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </button>
      </div>
      <Link href="/printer/create" class="btn btn-primary">
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16" class="me-2">
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        </svg>
        Add New Printer
      </Link>
    </div>

    <!-- Success Message -->
    <div v-if="$page.props?.flash?.success" class="alert alert-success alert-dismissible fade show" role="alert">
      {{ $page.props?.flash?.success }}
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    </div>

    <!-- Printers Table Card -->
    <div class="card border-0 shadow-sm">
      <div class="card-body p-0">
        <div class="table-responsive">
          <table class="table table-hover mb-0">
            <thead class="bg-light">
              <tr>
                <th class="py-3 text-end pe-4">Action</th>
                <th class="py-3">Printer Name</th>
                <th class="py-3">Printer Order</th>
                <th class="py-3">Printer IP</th>
                <th class="py-3">Printer Port</th>
                <th class="py-3">Access Type</th>
                <th class="py-3">Status</th>
              </tr>
              <!-- filter inputs row -->
              <tr>
                <th class="px-4 py-2">
                  <button @click="resetFilters" class="btn btn-sm btn-outline-secondary">Reset</button>
                </th>
                <th class="py-2">
                  <input v-model="filters.printerName" @keyup.enter="applyFilters" type="text" class="form-control form-control-sm" placeholder="Press enter to search" />
                </th>
                <th class="py-2">
                  <input v-model="filters.printerOrder" @keyup.enter="applyFilters" type="text" class="form-control form-control-sm" placeholder="Press enter to search" />
                </th>
                <th class="py-2">
                  <input v-model="filters.printerPrintServer" @keyup.enter="applyFilters" type="text" class="form-control form-control-sm" placeholder="Press enter to search" />
                </th>
                <th class="py-2">
                  <input v-model="filters.printerPrintPort" @keyup.enter="applyFilters" type="text" class="form-control form-control-sm" placeholder="Press enter to search" />
                </th>
                <th class="py-2">
                  <input v-model="filters.printerAccessType" @keyup.enter="applyFilters" type="text" class="form-control form-control-sm" placeholder="Press enter to search" />
                </th>
                <th class="py-2">
                  <select v-model="filters.printerActive" @change="applyFilters" class="form-select form-select-sm">
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="printer in printers.data" :key="printer.id">
                <td class="px-4 py-3 fw-semibold">{{ printer.id }}</td>
                <td class="py-3">{{ printer.printerName }}</td>
                <td class="py-3">{{ printer.printerOrder }}</td>
                <td class="py-3">{{ printer.printerPrintServer }}</td>
                <td class="py-3">{{ printer.printerPrintPort }}</td>
                <td class="py-3">{{ printer.printerAccessType }}</td>
                <td class="py-3">{{ printer.printerActive }}</td>
                <td class="py-3 text-end pe-4">
                  <div class="btn-group">
                    <Link :href="`/printer/${printer.id}/edit`" class="btn btn-sm btn-outline-primary">
                      <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                      </svg>
                      Edit
                    </Link>
                    <button @click="deletePrinter(printer.id)" class="btn btn-sm btn-outline-danger">
                      <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                      </svg>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
              <tr v-if="!printers.data.length">
                <td colspan="8" class="px-4 py-4 text-center text-muted">No printers found.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div v-if="printers.links && printers.links.length > 3" class="mt-4 d-flex justify-content-center">
      <nav>
        <ul class="pagination">
          <li v-for="(link, index) in printers.links" :key="index" class="page-item" :class="{ 'active': link.active, 'disabled': !link.url }">
            <Link v-if="link.url" :href="link.url" class="page-link" v-html="link.label"></Link>
            <span v-else class="page-link" v-html="link.label"></span>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { Link, router } from '@inertiajs/vue3';
import LayoutAuthenticated from '@/Layouts/LayoutAuthenticated.vue';
import { reactive } from 'vue';

const props = defineProps({
  printers: Object,
  filters: Object,
});

const filters = reactive({
  printerName: props.filters?.printerName || '',
  printerOrder: props.filters?.printerOrder || '',
  printerPrintServer: props.filters?.printerPrintServer || '',
  printerPrintPort: props.filters?.printerPrintPort || '',
  printerAccessType: props.filters?.printerAccessType || '',
  printerActive: props.filters?.printerActive || '',
});

const applyFilters = () => {
  router.get('/printer', filters, { preserveState: true, replace: true });
};

const resetFilters = () => {
  for (const key in filters) {
    filters[key] = '';
  }
  router.get('/printer', {}, { preserveState: true, replace: true });
};

const deletePrinter = (id) => {
  if (confirm('Are you sure you want to delete this printer?')) {
    router.delete(`/printer/${id}`);
  }
};
</script>

<style scoped>
.table th {
  font-weight: 600;
  color: #64748b;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.btn-group .btn {
  border-radius: 0.375rem;
  margin-right: 0.5rem;
}

.btn-group .btn:last-child {
  margin-right: 0;
}

.pagination {
  margin-bottom: 0;
}

.page-link {
  color: #2563eb;
}

.page-item.active .page-link {
  background-color: #2563eb;
  border-color: #2563eb;
}
</style>
