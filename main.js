import './style.css';

const COLOR_PALETTE = {
  '#5C0029': 'Tyrian Purple',
  '#61304B': 'Violet',
  '#857C8D': 'Taupe Gray',
  '#94BFBE': 'Tiffany Blue',
  '#ACF7C1': 'Celadon'
};

const addOptionsToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");

  Object.keys(COLOR_PALETTE).forEach((color) => {
    const option = document.createElement("option");
    option.value = color;
    option.innerText = COLOR_PALETTE[color];
    colorPickerSelect.append(option);
  });
};

const addEventListenerToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");
  const colorName = document.querySelector("#color-name");

  colorPickerSelect.addEventListener("change", (event) => {
    const newColor = event.target.value; 

    document.body.style.backgroundColor = newColor;

    const colorNameText = `${COLOR_PALETTE[newColor]} | ${newColor}`;
    colorName.innerText = colorNameText;
  });
};

addOptionsToColorPicker();
addEventListenerToColorPicker();
