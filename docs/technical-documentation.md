
## Features & Implementation

### Dark/Light Mode
- `localStorage` saves theme preference
- `.dark-theme` class toggles colors
- Theme button in navigation with toast notification

### Mobile Navigation
- Hamburger menu for screens ≤ 768px
- `.active` class toggles visibility
- Menu closes after link click

### Project Search
- Live filtering by title and description
- Real-time results count
- "No results" message when empty

### Form Validation
- Required field check
- Email regex validation
- Success/error messages with `.msg-success` / `.msg-error`

### Hover Effects
- Project cards: scale, shadow, image zoom
- Buttons: translateY, ripple effect
- Theme toggle: rotate and scale
- Profile image: scale and shadow

### Time Greeting
- Displays morning/afternoon/evening based on user hour

## Key Functions

| Function | Purpose |
|----------|---------|
| `showToast()` | Temporary notification |
| `updateSearch()` | Filter projects |
| Theme toggle | Switch light/dark mode |
| Hamburger | Toggle mobile menu |

## localStorage
| Key | Value |
|-----|-------|
| `theme` | `"dark"` or `"light"` |

## Dependencies
- None (pure HTML/CSS/JS)
