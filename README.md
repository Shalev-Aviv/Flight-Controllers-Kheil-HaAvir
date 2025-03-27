# VisualContent Component

This project demonstrates a visual instrument panel built with React and CSS. It features:
- **Altitude Bar:** A gradient background revealed proportionally based on altitude.
- **Heading Indicator (HSI):** A compass-like circle with labels that rotate based on the provided heading value.
- **Attitude Indicator (ADI):** A circle whose color changes instantly based on an input value.

## Features

- **Dynamic Altitude Bar:** Shows a gradient from red to green with a white overlay that reveals based on altitude.
- **Rotating Compass (HSI):** The labels (0, 90, 180, 270) rotate so that the current heading is always at the top.
- **Color-Changing ADI:** Instantly transitions between brown and blue based on the input value, with a split color at 0.

## Usage

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to launch the development server.
4. Pass the `altitude`, `his`, and `adi` values as props to the `VisualContent` component.

## File Structure

- `VisualContent.tsx`: Main React component.
- `VisualContent.css`: Styles for the component.
- `public/arrow.png`: Arrow image used in the HSI.

## Customization

- The HSI rotation is controlled by a CSS variable (`--his-rotation`) applied to the `.Clock` container. Set this variable inline in React to rotate the labels (e.g., for a HIS value of 90, use `style={{ '--his-rotation': '-90deg' }}`).
- Adjust CSS variables and styles as needed to modify behavior or appearance.

## License

MIT
