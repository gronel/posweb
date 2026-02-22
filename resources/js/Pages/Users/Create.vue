<template>
        <div class="container-fluid">
            <!-- Header -->
            <div class="mb-4">
                <div class="d-flex align-items-center mb-3">
                    <Link href="/users" class="btn btn-outline-secondary btn-sm me-3">
                        <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16" class="me-1">
                            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                        </svg>
                        Back
                    </Link>
                    <div>
                        <h2 class="fw-bold mb-1">Create New User</h2>
                        <p class="text-muted mb-0">Add a new user to the system</p>
                    </div>
                </div>
            </div>

            <!-- Form Card -->
            <div class="row">
                <div class="col-lg-8">
                    <div class="card border-0 shadow-sm">
                        <div class="card-body p-4">
                            <form @submit.prevent="submit">
                                <!-- Name -->
                                <div class="mb-3">
                                    <label for="name" class="form-label fw-semibold">Name</label>
                                    <input
                                        id="name"
                                        v-model="form.name"
                                        type="text"
                                        class="form-control form-control-lg"
                                        :class="{ 'is-invalid': form.errors.name }"
                                        placeholder="Enter user name"
                                        required
                                    >
                                    <div v-if="form.errors.name" class="invalid-feedback">
                                        {{ form.errors.name }}
                                    </div>
                                </div>

                                <!-- Email -->
                                <div class="mb-3">
                                    <label for="email" class="form-label fw-semibold">Email Address</label>
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

                                <!-- Password -->
                                <div class="mb-3">
                                    <label for="password" class="form-label fw-semibold">Password</label>
                                    <input
                                        id="password"
                                        v-model="form.password"
                                        type="password"
                                        class="form-control form-control-lg"
                                        :class="{ 'is-invalid': form.errors.password }"
                                        placeholder="••••••••"
                                        required
                                    >
                                    <div v-if="form.errors.password" class="invalid-feedback">
                                        {{ form.errors.password }}
                                    </div>
                                </div>

                                <!-- Confirm Password -->
                                <div class="mb-4">
                                    <label for="password_confirmation" class="form-label fw-semibold">Confirm Password</label>
                                    <input
                                        id="password_confirmation"
                                        v-model="form.password_confirmation"
                                        type="password"
                                        class="form-control form-control-lg"
                                        placeholder="••••••••"
                                        required
                                    >
                                </div>

                                <!-- Buttons -->
                                <div class="d-flex gap-2">
                                    <button
                                        type="submit"
                                        class="btn btn-primary btn-lg"
                                        :disabled="form.processing"
                                    >
                                        <span v-if="form.processing" class="spinner-border spinner-border-sm me-2"></span>
                                        {{ form.processing ? 'Creating...' : 'Create User' }}
                                    </button>
                                    <Link href="/users" class="btn btn-outline-secondary btn-lg">
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

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.post('/users');
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
