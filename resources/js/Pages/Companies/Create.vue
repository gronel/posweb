<template>
        <div class="container-fluid">
            <!-- Header -->
            <div class="mb-4">
                <div class="d-flex align-items-center mb-3">
                    <div>
                        <h2 class="fw-bold mb-1">Create/Update Company</h2>
                        <p class="text-muted mb-0">Add a new company to the system</p>
                    </div>
                </div>
            </div>

            <!-- Form Card -->
            <div class="row">
                <div class="col-lg-8">
                    <div class="card border-0 shadow-sm">
                        <div class="card-body p-4">
                            <form @submit.prevent="submit">
                                <!-- Company Name -->
                                <div class="mb-3">
                                    <label for="companyname" class="form-label fw-semibold">Company Name <span class="text-danger ms-1">*</span></label>
                                    <input
                                        id="companyname"
                                        v-model="form.companyname"
                                        type="text"
                                        class="form-control form-control-lg"
                                        :class="{ 'is-invalid': form.errors.companyname }"
                                        placeholder="Enter company name"
                                        required
                                    >
                                    <div v-if="form.errors.companyname" class="invalid-feedback">
                                        {{ form.errors.companyname }}
                                    </div>
                                </div>

                                    <!-- Address -->
                                <div class="mb-3">
                                    <label for="address" class="form-label fw-semibold">Address<span class="text-danger ms-1">*</span></label>
                                    <input
                                        id="address"
                                        v-model="form.address"
                                        type="text"
                                        class="form-control form-control-lg"
                                        :class="{ 'is-invalid': form.errors.address }"
                                        placeholder="Enter company address"
                                    >
                                    <div v-if="form.errors.address" class="invalid-feedback">
                                        {{ form.errors.address }}
                                    </div>
                                </div>

                                    <!-- Phone -->
                                <div class="mb-3">
                                    <label for="phone" class="form-label fw-semibold">Phone<span class="text-danger ms-1">*</span></label>
                                    <input
                                        id="phone"
                                        v-model="form.phone"
                                        type="tel"
                                        class="form-control form-control-lg"
                                        :class="{ 'is-invalid': form.errors.phone }"
                                        placeholder="Enter company phone number"
                                    >
                                    <div v-if="form.errors.phone" class="invalid-feedback">
                                        {{ form.errors.phone }}
                                    </div>
                                </div>

                                <!-- Email -->
                                <div class="mb-3">
                                    <label for="email" class="form-label fw-semibold">Email Address <span class="text-danger ms-1">*</span></label>
                                    <input
                                        id="email"
                                        v-model="form.email"
                                        type="email"
                                        class="form-control form-control-lg"
                                        :class="{ 'is-invalid': form.errors.email }"
                                        placeholder="user@example.com"
                                        required
                                    >
                                    <div v-if="form.errors.email" class="invalid-feedback">
                                        {{ form.errors.email }}
                                    </div>
                                </div>

                                <!-- Website -->
                                <div class="mb-3">
                                    <label for="website" class="form-label fw-semibold">Website<span class="text-muted ms-1">optional</span></label>
                                    <input  
                                        id="website"
                                        v-model="form.website"
                                        type="text"
                                        class="form-control form-control-lg"
                                        :class="{ 'is-invalid': form.errors.website }"
                                        placeholder="https://www.example.com"
                                    >
                                    <div v-if="form.errors.website" class="invalid-feedback">
                                        {{ form.errors.website }}
                                    </div>
                                </div>

                                <!-- Logo -->
                                <div class="mb-3">
                                    <label for="logo" class="form-label fw-semibold">Logo URL</label>
                                    <input
                                        id="logo"
                                        v-model="form.logo"
                                        type="text"
                                        class="form-control form-control-lg"
                                        :class="{ 'is-invalid': form.errors.logo }"
                                        placeholder="https://www.example.com/logo.png"
                                    >
                                    <div v-if="form.errors.logo" class="invalid-feedback">
                                        {{ form.errors.logo }}
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
                                        {{ form.processing ? 'Creating...' : 'Create Company' }}
                                    </button>
                                    <Link href="/companies" class="btn btn-outline-secondary btn-lg">
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
import LayoutAuthenticated from '@/Layouts/LayoutAuthenticated.vue';

const props = defineProps({
    company: Object,
});

const form = useForm({
    id: props.company?.id || null,
    companyname: props.company?.companyname || '',
    email: props.company?.email || '',
    address: props.company?.address || '',
    phone: props.company?.phone || '',
    fax: props.company?.fax || '',
    website: props.company?.website || '',
    logo: props.company?.logo || '',
   
});

const submit = () => {
    form.post('/company/store', {
        onSuccess: () => {
            form.reset();
        },
    });
};
</script>

<style scoped>
.form-control-lg {
    padding: 0.75rem 1rem;
    font-size: 1rem;
    border-radius: 0.5rem;
}

.form-control:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 0.2rem rgba(37, 99, 235, 0.25);
}

.btn-lg {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    border-radius: 0.5rem;
}
</style>
