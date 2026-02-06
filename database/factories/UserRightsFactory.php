<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\MenuMaster;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\UserRights>
 */
class UserRightsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'UserId' => User::factory(),
            'MenuId' => fake()->numberBetween(1, 50),
            'canAdd' => fake()->boolean() ? 1 : 0,
            'canEdit' => fake()->boolean() ? 1 : 0,
            'canDelete' => fake()->boolean() ? 1 : 0,
            'canPreview' => fake()->boolean() ? 1 : 0,
            'canPrint' => fake()->boolean() ? 1 : 0,
        ];
    }

    /**
     * Indicate that the user should have full permissions.
     */
    public function fullAccess(): static
    {
        return $this->state(fn (array $attributes) => [
            'canAdd' => 1,
            'canEdit' => 1,
            'canDelete' => 1,
            'canPreview' => 1,
            'canPrint' => 1,
        ]);
    }

    /**
     * Indicate that the user should have read-only permissions.
     */
    public function readOnly(): static
    {
        return $this->state(fn (array $attributes) => [
            'canAdd' => 0,
            'canEdit' => 0,
            'canDelete' => 0,
            'canPreview' => 1,
            'canPrint' => 1,
        ]);
    }

    /**
     * Indicate that the user should have no permissions.
     */
    public function noAccess(): static
    {
        return $this->state(fn (array $attributes) => [
            'canAdd' => 0,
            'canEdit' => 0,
            'canDelete' => 0,
            'canPreview' => 0,
            'canPrint' => 0,
        ]);
    }
}
