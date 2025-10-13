# Progressive Loading System Documentation

The TDT Websites progressive loading system provides a comprehensive solution for managing loading states across the application. It features a prominent progress bar that appears above the navigation, smooth animations, and customizable loading messages.

## 🎯 Features

- **Automatic Route Loading**: Shows progress bar during page navigation
- **Manual Loading Control**: Programmatic loading for API calls and async operations
- **Progressive Stages**: Multi-stage loading with custom messages
- **Visual Progress**: Real-time progress indication with smooth animations
- **Responsive Design**: Works on all device sizes
- **Customizable**: Colors, messages, and timing can be customized

## 🏗️ System Architecture

### Core Components

1. **LoadingContext** (`@/contexts/LoadingContext`)
   - Manages global loading state
   - Provides loading controls to all components

2. **SimpleProgressBar** (`@/components/ui/SimpleProgressBar`)
   - Enhanced progress bar with animations and stages
   - Positioned above navigation
   - Shows progress percentage and loading messages

3. **LoadingOverlay** (`@/components/ui/LoadingOverlay`)
   - Modal-style loading indicators
   - Multiple variants: minimal, detailed, fullscreen

### Hooks

1. **useProgressiveLoader** (`@/hooks/useProgressiveLoader`)
   - Enhanced loading with progressive stages
   - Navigation with loading states
   - Utilities for complex loading scenarios

2. **useLoadingControl** (`@/hooks/useLoadingControl`)
   - Simple loading control for basic use cases
   - Progressive loading with stages
   - Simulation utilities

## 🚀 Quick Start

### Basic Usage

```tsx
import { useLoadingControl } from "@/hooks/useLoadingControl";

function MyComponent() {
  const { isLoading, withLoading } = useLoadingControl();

  const handleAction = () => {
    withLoading(
      async () => {
        // Your async operation
        await fetch('/api/data');
      },
      "Loading data..."
    );
  };

  return (
    <button onClick={handleAction} disabled={isLoading}>
      {isLoading ? "Loading..." : "Load Data"}
    </button>
  );
}
```

### Progressive Loading with Stages

```tsx
import useProgressiveLoader from "@/hooks/useProgressiveLoader";

function AdvancedComponent() {
  const { loadWithProgress } = useProgressiveLoader();

  const handleComplexOperation = async () => {
    await loadWithProgress(
      async () => {
        // Complex operation
        await step1();
        await step2();
        await step3();
      },
      {
        label: "Processing your request...",
        estimatedDuration: 3000
      }
    );
  };

  return <button onClick={handleComplexOperation}>Start Process</button>;
}
```

### Loading Overlay

```tsx
import LoadingOverlay from "@/components/ui/LoadingOverlay";

function ComponentWithOverlay() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  return (
    <>
      <LoadingOverlay
        isVisible={loading}
        message="Processing your request"
        progress={progress}
        variant="detailed"
      />
      
      {/* Your component content */}
    </>
  );
}
```

## 🎨 Customization

### Global Configuration

In your layout file:

```tsx
<ClientOnlyProgressBar 
  showLabel={true} 
  height={4}
  color="#FFB400"
  className="shadow-lg"
/>
```

### Custom Loading Messages

```tsx
const { startLoading } = useLoadingControl();

// Custom message
startLoading("Saving your changes...");
```

### Loading Stages

```tsx
const stages = [
  { message: "Connecting...", delay: 500 },
  { message: "Authenticating...", delay: 800 },
  { message: "Loading data...", delay: 1200 },
  { message: "Almost done...", delay: 400 },
];

await withProgressiveLoading(
  async () => {
    // Your operation
  },
  { stages }
);
```

## 🔧 API Reference

### useLoadingControl

```tsx
const {
  isLoading,           // boolean - current loading state
  progress,            // number - current progress (0-100)
  startLoading,        // (message?: string) => void
  stopLoading,         // () => void
  withLoading,         // async wrapper
  withProgressiveLoading, // async wrapper with stages
  simulateLoading,     // for demos/testing
  startProgressiveLoading, // start with progress
  completeLoading,     // complete and cleanup
} = useLoadingControl();
```

### useProgressiveLoader

```tsx
const {
  isLoading,           // boolean - loading state
  loadingLabel,        // string - current message
  startLoading,        // (label?: string) => void
  stopLoading,         // () => void
  loadWithProgress,    // advanced async wrapper
  navigateWithLoading, // navigation with loading
  withLoading,         // basic async wrapper
} = useProgressiveLoader();
```

### LoadingOverlay Props

```tsx
interface LoadingOverlayProps {
  isVisible: boolean;           // Show/hide overlay
  message?: string;             // Loading message
  progress?: number;            // Progress percentage
  variant?: 'minimal' | 'detailed' | 'fullscreen';
  color?: string;               // Theme color
  className?: string;           // Additional CSS classes
}
```

## 🎯 Best Practices

### 1. Use Appropriate Loading Types

- **Route changes**: Automatic (built-in)
- **API calls**: `withLoading` or `withProgressiveLoading`
- **Form submissions**: `LoadingButton` with state
- **File uploads**: `LoadingOverlay` with progress
- **Complex operations**: Progressive loading with stages

### 2. Provide Meaningful Messages

```tsx
// ❌ Generic
startLoading("Loading...");

// ✅ Specific
startLoading("Saving your profile changes...");
```

### 3. Handle Errors

```tsx
try {
  await withLoading(async () => {
    await riskyOperation();
  }, "Processing...");
} catch (error) {
  // Handle error
  console.error(error);
}
```

### 4. Use Progressive Loading for Long Operations

```tsx
// For operations > 2 seconds, use progressive loading
await loadWithProgress(
  longRunningOperation,
  { estimatedDuration: 5000 }
);
```

## 🔍 Troubleshooting

### Loading Doesn't Show
- Check if `LoadingProvider` wraps your app
- Ensure `ClientOnlyProgressBar` is in your layout
- Verify loading state is being set correctly

### Progress Bar Not Visible
- Check z-index conflicts
- Ensure the progress bar height is sufficient
- Verify the color contrast

### Loading Doesn't Stop
- Always call `stopLoading()` in finally blocks
- Use `withLoading` wrapper to ensure cleanup
- Check for unhandled promise rejections

## 📱 Mobile Considerations

The loading system is fully responsive and optimized for mobile:

- Touch-friendly loading overlays
- Appropriate sizing for small screens
- Reduced animation intensity for better performance
- Accessible loading indicators

## 🚀 Performance

- Debounced progress updates
- Minimal re-renders using React context
- Efficient animation using Framer Motion
- Cleanup on component unmount

## 📝 Examples

See `@/components/examples/LoadingExample` for comprehensive usage examples.

---

*The progressive loading system enhances user experience by providing clear feedback during all loading states while maintaining a professional, polished appearance.*
