<template>
        <div class="container-fluid">
            <!-- Header -->
            <div class="d-flex justify-content-between align-items-center mb-4">
              
                <Link href="/companies/create" class="btn btn-primary">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16" class="me-2">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                    Add New Company
                </Link>
            </div>

            <!-- Success Message -->
            <div v-if="$page.props?.flash?.success" class="alert alert-success alert-dismissible fade show" role="alert">
                {{ $page.props?.flash?.success }}
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>

           
            <!-- Pagination -->
            <div v-if="companies.links.length > 3" class="mt-4 d-flex justify-content-center">
                <nav>
                    <ul class="pagination">
                        <li v-for="(link, index) in companies.links" :key="index" class="page-item" :class="{ 'active': link.active, 'disabled': !link.url }">
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

defineProps({
    companies: Object,
});

const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

const deleteCompany = (id) => {
    if (confirm('Are you sure you want to delete this company?')) {
        router.delete(`/companies/${id}`);
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
