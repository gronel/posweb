<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\SupplierController;


Route::get('/', function () {
    return Inertia::render('Welcome/Index', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});

// Guest routes
Route::middleware('guest')->group(function () {
    Route::get('login', [AuthenticatedSessionController::class, 'create'])->name('login');
    Route::post('login', [AuthenticatedSessionController::class, 'store']);
});

// Authenticated routes
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
    
    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');
    
    // User Management
    Route::get('/users', [UserController::class, 'index'])->name('users.index');
    Route::get('/users/create', [UserController::class, 'create'])->name('users.create');
    Route::post('/users', [UserController::class, 'store'])->name('users.store');
    Route::get('/users/{user}', [UserController::class, 'show'])->name('users.show');
    Route::get('/users/{user}/edit', [UserController::class, 'edit'])->name('users.edit');
    Route::put('/users/{user}', [UserController::class, 'update'])->name('users.update');
    Route::delete('/users/{user}', [UserController::class, 'destroy'])->name('users.destroy');

    //company
    Route::prefix('company')->group(function () {
        Route::get('/',[CompanyController::class, 'create'])->name('company.create');
        Route::post('/store',[CompanyController::class, 'store'])->name('company.store');
        Route::get('/{company}',[CompanyController::class, 'show'])->name('company.show');
        Route::get('/{company}/edit',[CompanyController::class, 'edit'])->name('company.edit');
        Route::put('/{company}',[CompanyController::class, 'update'])->name('company.update');
        Route::delete('/company/{company}',[CompanyController::class, 'destroy'])->name('company.destroy');
    });

    Route::prefix('supplier')->group(function () {
        Route::get('/', [SupplierController::class, 'index'])->name('supplier.index');
        Route::get('/create', [SupplierController::class, 'create'])->name('supplier.create');
        Route::post('/store', [SupplierController::class, 'store'])->name('supplier.store');
        Route::get('/{id}/edit', [SupplierController::class, 'edit'])->name('supplier.edit');
        Route::delete('/{supplier}', [SupplierController::class, 'destroy'])->name('supplier.destroy');
    });
});
