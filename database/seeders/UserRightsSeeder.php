<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\UserRights;
use Illuminate\Database\Seeder;

class UserRightsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create 3 users
        $users = User::factory()->count(3)->create();

        // Create 10 user rights for each user
        foreach ($users as $user) {
            UserRights::factory()->count(10)->create([
                'UserId' => $user->id,
            ]);
        }

        $this->command->info('Created 3 users with 10 user rights each (30 total user rights).');
    }
}
