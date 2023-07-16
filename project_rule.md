# CSS
- Style properties is ordered by category:
  - Display
  - Position
  - Transformation
  - Grid / Flex
  - Width, Height, Margin, Padding
  - Any non-text style: color, shape, shadow, etc.
  - Text style: color, font-size, font-weight, etc.
  - Transition

# Components
Create a component if you meet these cases:
- When there is more than 3 repeated code block (Repetition)
- If the component will carry a specific logic (Single Responsibility)

# Measurement
- Button have a padding-y of 3 and padding-x of 6
- Use gap, padding and margin that is a factor of 2

# Styles
- Color
  - Dark background - `bg-gray-900`
  - Light background - `bg-gray-50`
  - Light text - `text-gray-900`
  - Dark text - `text-gray-50`
  - Disabled/Dim text - `text-gray-500`
  - Any hover color is a 100 difference from the normal color. Ex: `text-gray-100 hover:text-gray-200`