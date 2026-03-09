"use client";

interface ColorPickerProps {
  value: string;
  onChange: (color: string) => void;
  label?: string;
}

export function ColorPicker({ value, onChange, label }: ColorPickerProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-xs font-semibold">{label}</label>}
      <div className="flex items-center gap-2">
        <input
          type="color"
          value={value}
          onChange={handleChange}
          className="h-10 w-12 cursor-pointer rounded-lg border border-border/40 p-1"
        />
        <input
          type="text"
          value={value}
          onChange={handleChange}
          className="text-xs font-mono flex-1 rounded-lg border border-border/40 bg-muted/50 px-2 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          placeholder="#000000"
          maxLength={7}
        />
      </div>
    </div>
  );
}
