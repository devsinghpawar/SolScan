# SolScan - Project Notes

## Current Routing

The app uses **Expo Router** for navigation.

### Active Files

- `app/_layout.tsx`
  - Root layout of the application.
  - Controls the navigation structure.

- `app/(tabs)/_layout.tsx`
  - Defines the Bottom Tab Navigator.

- `app/(tabs)/index.tsx`
  - Home screen.

- `app/(tabs)/explore.tsx`
  - Explore screen.

- `app/(tabs)/settings.tsx`
  - Settings screen.

- `app/(tabs)/swap.tsx`
  - Swap tab.

- `app/token/_layout.tsx`
  - Token navigation layout.

- `app/token/orders.tsx`
  - Orders screen.

---

## Currently Unused Files

### `src/screen/SwapScreen.tsx`

- Not used.
- Navigation is handled through the `app/` directory.

### `src/screen/WalletScreen.tsx`

- Not used.
- Navigation is handled through the `app/` directory.

---

## Notes

- This project follows **Expo Router**.
- Screens inside the `app/` directory are automatically registered as routes.
- The `src/screen` folder contains old screen components that are currently unused.
