# 🧶 Amigurumi Pattern Generator

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![Framer](https://img.shields.io/badge/Framer-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)

## 🤔 Why Amigurumi Pattern Generator?

Creating amigurumi patterns can be challenging, especially when trying to visualize how different shapes will come together. Whether you're a beginner trying to understand basic shapes or an experienced crocheter designing complex characters, getting the stitch counts right is crucial.

That's why we built Amigurumi Pattern Generator:

- 🎯 **Instant Visualization**: See your creation before you start crocheting
- 🧮 **Accurate Stitch Counts**: Mathematically precise patterns for perfect shapes
- 🎨 **Interactive Design**: Combine basic shapes to create complex characters
- 📝 **Clear Instructions**: Easy-to-follow patterns with standard notation
- 🔄 **Real-time Updates**: See changes as you adjust dimensions
- 💾 **Pattern Export**: Save and share your creations

## 👀 Features

[Screenshot placeholder - will add when UI is implemented]

## ✨ Core Features

- 🔵 Basic shape generation (spheres, cylinders, cones)
- 🎮 Interactive 3D preview with rotation controls
- 📏 Precise stitch calculations
- 🎨 Real-time pattern updates
- 📦 Standard amigurumi notation
- 💻 Modern, responsive interface

## 🚀 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/amigurumi-generator.git

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🎮 Usage

1. Select a basic shape or template
2. Adjust dimensions using the sliders
3. Preview the 3D visualization
4. Generate and export your pattern

## 🛠️ Tech Stack

[![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)

## 📁 Project Structure

```
Copysrc/
├── components/
│ ├── ui/ # shadcn components
│ │ ├── button.tsx
│ │ ├── card.tsx
│ │ ├── slider.tsx
│ │ └── index.ts # UI component exports
│ │
│ ├── shapes/ # Shape components
│ │ ├── sphere.tsx
│ │ ├── cylinder.tsx
│ │ ├── cone.tsx
│ │ └── index.ts
│ │
│ ├── preview/ # 3D preview components
│ │ ├── shape-preview.tsx
│ │ ├── controls.tsx
│ │ └── index.ts
│ │
│ └── pattern/ # Pattern generation
│ ├── generator.tsx
│ ├── display.tsx
│ └── index.ts
│
├── lib/ # Utilities
│ ├── shapes/
│ │ ├── calculations.ts
│ │ ├── patterns.ts
│ │ └── index.ts
│ │
│ └── utils.ts
│
├── types/ # TypeScript types
│ ├── shapes.ts
│ ├── patterns.ts
│ └── index.ts
│
└── styles/ # Global styles
└── globals.css
```

## 📦 Dependencies

```json
jsonCopy{
"dependencies": {
"@radix-ui/react-dialog": "^1.0.4",
"@radix-ui/react-label": "^2.0.2",
"@radix-ui/react-select": "^1.2.2",
"@radix-ui/react-slider": "^1.1.2",
"@radix-ui/react-slot": "^1.0.2",
"@radix-ui/react-tabs": "^1.0.4",
"class-variance-authority": "^0.7.0",
"clsx": "^2.0.0",
"framer-motion": "^10.16.4",
"lucide-react": "^0.290.0",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"tailwind-merge": "^1.14.0",
"tailwindcss": "^3.3.3"
},
"devDependencies": {
"@types/node": "^20.8.7",
"@types/react": "^18.2.15",
"@types/react-dom": "^18.2.7",
"@typescript-eslint/eslint-plugin": "^6.0.0",
"@typescript-eslint/parser": "^6.0.0",
"@vitejs/plugin-react": "^4.0.3",
"autoprefixer": "^10.4.16",
"eslint": "^8.45.0",
"eslint-plugin-react-hooks": "^4.6.0",
"eslint-plugin-react-refresh": "^0.4.3",
"postcss": "^8.4.31",
"typescript": "^5.0.2",
"vite": "^4.4.5"
}
}
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 Upcoming Features

- [ ] Advanced shape combinations
- [ ] Custom animal templates
- [ ] Pattern library
- [ ] User accounts and saving
- [ ] Community sharing
- [ ] Mobile app version

## 🐛 Bug Reports

Found a bug? Please create an issue [here](https://github.com/yourusername/amigurumi-generator/issues).

<p align="center">Made with 🧶 by [Your Name]</p>
