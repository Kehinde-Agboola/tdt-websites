// components/ColorSelector.tsx
'use client';

interface Color {
  color: string;
  colorCode: string;
}

interface ColorSelectorProps {
  colors: Color[];
  selectedColor: string;
  onSelectAction: (color: string) => void;
}

export default function ColorSelector({ colors, selectedColor, onSelectAction }: ColorSelectorProps) {
  return (
    <div className="flex gap-2 my-2">
      {colors.map((color) => (
        <button
          key={color.color}
          onClick={() => onSelectAction(color.color)}
          className={`w-8 h-8 rounded-full border ${
            selectedColor === color.color ? 'ring-2 ring-blue-500' : ''
          }`}
          style={{ backgroundColor: color.colorCode }}
          title={color.color}
        />
      ))}
    </div>
  );
}