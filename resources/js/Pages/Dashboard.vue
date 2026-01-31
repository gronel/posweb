<template>
    <div class="dashboard">
        <!-- Navigation -->
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid px-4">
                <a class="navbar-brand d-flex align-items-center" href="/">
                    <div class="logo-circle me-2"></div>
                    <span class="fw-bold">Quip</span>
                </a>
                
                <div class="d-flex align-items-center gap-3">
                    <span class="text-white">{{ $page.props.auth.user.name }}</span>
                    <button @click="logout" class="btn btn-outline-light btn-sm">
                        Logout
                    </button>
                </div>
            </div>
        </nav>

        <!-- Main Content -->
        <div class="container-fluid p-4">
            <!-- Welcome Section -->
            <div class="row mb-4">
                <div class="col-12">
                    <h1 class="h3 mb-2">Welcome back, {{ $page.props.auth.user.name }}! 👋</h1>
                    <p class="text-muted">Here's what's happening with your business today.</p>
                </div>
            </div>

            <!-- Stats Cards -->
            <div class="row g-4 mb-4">
                <div class="col-md-6 col-xl-3">
                    <div class="card border-0 shadow-sm h-100">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-start">
                                <div>
                                    <p class="text-muted small mb-1">Today's Sales</p>
                                    <h3 class="fw-bold mb-0">$2,456</h3>
                                    <small class="text-success">
                                        <span class="me-1">↑</span> 12.5%
                                    </small>
                                </div>
                                <div class="icon-box bg-primary bg-opacity-10 text-primary p-3 rounded">
                                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5V3zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a1.99 1.99 0 0 1-1-.268z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-xl-3">
                    <div class="card border-0 shadow-sm h-100">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-start">
                                <div>
                                    <p class="text-muted small mb-1">Orders</p>
                                    <h3 class="fw-bold mb-0">156</h3>
                                    <small class="text-success">
                                        <span class="me-1">↑</span> 8.3%
                                    </small>
                                </div>
                                <div class="icon-box bg-success bg-opacity-10 text-success p-3 rounded">
                                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-xl-3">
                    <div class="card border-0 shadow-sm h-100">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-start">
                                <div>
                                    <p class="text-muted small mb-1">Customers</p>
                                    <h3 class="fw-bold mb-0">89</h3>
                                    <small class="text-info">
                                        <span class="me-1">→</span> 0%
                                    </small>
                                </div>
                                <div class="icon-box bg-warning bg-opacity-10 text-warning p-3 rounded">
                                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-xl-3">
                    <div class="card border-0 shadow-sm h-100">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-start">
                                <div>
                                    <p class="text-muted small mb-1">Low Stock Items</p>
                                    <h3 class="fw-bold mb-0">12</h3>
                                    <small class="text-danger">
                                        <span class="me-1">⚠</span> Action needed
                                    </small>
                                </div>
                                <div class="icon-box bg-danger bg-opacity-10 text-danger p-3 rounded">
                                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Recent Activity & Quick Actions -->
            <div class="row g-4">
                <div class="col-lg-8">
                    <div class="card border-0 shadow-sm">
                        <div class="card-header bg-white border-0 py-3">
                            <h5 class="mb-0 fw-semibold">Recent Orders</h5>
                        </div>
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table table-hover mb-0">
                                    <thead class="table-light">
                                        <tr>
                                            <th>Order ID</th>
                                            <th>Customer</th>
                                            <th>Amount</th>
                                            <th>Status</th>
                                            <th>Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><span class="fw-semibold">#10234</span></td>
                                            <td>John Smith</td>
                                            <td>$125.50</td>
                                            <td><span class="badge bg-success">Completed</span></td>
                                            <td>2 mins ago</td>
                                        </tr>
                                        <tr>
                                            <td><span class="fw-semibold">#10233</span></td>
                                            <td>Sarah Johnson</td>
                                            <td>$89.99</td>
                                            <td><span class="badge bg-warning">Processing</span></td>
                                            <td>15 mins ago</td>
                                        </tr>
                                        <tr>
                                            <td><span class="fw-semibold">#10232</span></td>
                                            <td>Mike Wilson</td>
                                            <td>$256.00</td>
                                            <td><span class="badge bg-success">Completed</span></td>
                                            <td>32 mins ago</td>
                                        </tr>
                                        <tr>
                                            <td><span class="fw-semibold">#10231</span></td>
                                            <td>Emma Davis</td>
                                            <td>$45.25</td>
                                            <td><span class="badge bg-success">Completed</span></td>
                                            <td>1 hour ago</td>
                                        </tr>
                                        <tr>
                                            <td><span class="fw-semibold">#10230</span></td>
                                            <td>Robert Brown</td>
                                            <td>$178.50</td>
                                            <td><span class="badge bg-danger">Cancelled</span></td>
                                            <td>2 hours ago</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="card border-0 shadow-sm mb-4">
                        <div class="card-header bg-white border-0 py-3">
                            <h5 class="mb-0 fw-semibold">Quick Actions</h5>
                        </div>
                        <div class="card-body">
                            <div class="d-grid gap-2">
                                <button class="btn btn-primary">
                                    <span class="me-2">+</span> New Sale
                                </button>
                                <button class="btn btn-outline-primary">
                                    <span class="me-2">📦</span> Add Product
                                </button>
                                <button class="btn btn-outline-primary">
                                    <span class="me-2">👥</span> Add Customer
                                </button>
                                <button class="btn btn-outline-primary">
                                    <span class="me-2">📊</span> View Reports
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="card border-0 shadow-sm">
                        <div class="card-header bg-white border-0 py-3">
                            <h5 class="mb-0 fw-semibold">Store Status</h5>
                        </div>
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <span class="text-muted">Store Open</span>
                                <span class="badge bg-success">Active</span>
                            </div>
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <span class="text-muted">Active Users</span>
                                <span class="fw-semibold">3</span>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <span class="text-muted">Last Sync</span>
                                <span class="fw-semibold">Just now</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { router } from '@inertiajs/vue3';

const logout = () => {
    router.post(route('logout'));
};
</script>

<style scoped>
.dashboard {
    min-height: 100vh;
    background-color: #f8f9fa;
}

.navbar {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.logo-circle {
    width: 35px;
    height: 35px;
    background: white;
    border-radius: 50%;
}

.card {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
    transform: translateY(-2px);
}

.icon-box {
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.btn-primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border: none;
}

.btn-primary:hover {
    background: linear-gradient(135deg, #5568d3 0%, #653a8b 100%);
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(102, 126, 234, 0.3);
}

.btn-outline-primary {
    border-color: #667eea;
    color: #667eea;
}

.btn-outline-primary:hover {
    background-color: #667eea;
    border-color: #667eea;
    color: white;
}

.table thead {
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.table tbody tr {
    transition: background-color 0.2s ease;
}

.badge {
    padding: 0.375rem 0.75rem;
    font-weight: 500;
}
</style>
