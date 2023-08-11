---
sidebar_position: 2
---

# JKLmint Module

The `jklmint` module is responsible for the management of the native JKL token within the Jackal Protocol. This module
handles the issuance, distribution, and inflation of JKL tokens, ensuring a stable and secure token economy.

## Overview

The `jklmint` module manages the following aspects of the JKL token:

1. **Token Issuance**: Determines the initial token supply and distribution.
2. **Inflation**: Manages the annual inflation rate, maintaining a consistent token supply growth.
3. **Rewards Distribution**: Handles the allocation of newly minted tokens as rewards for validators and delegators.

### Parameters

The `jklmint` module uses the following parameters to manage the JKL token economy:

- `inflation_rate`: The annual percentage rate at which the token supply will grow.
- `inflation_min`: The minimum annual inflation rate allowed.
- `inflation_max`: The maximum annual inflation rate allowed.
- `goal_bonded`: The desired percentage of the total token supply that should be staked by validators and delegators.
- `blocks_per_year`: The estimated number of blocks produced in a year.

