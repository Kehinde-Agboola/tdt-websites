"use client";

import { useState } from "react";
import useProgressiveLoader, { LoadingUtils } from "@/hooks/useProgressiveLoader";
import LoadingOverlay, { LoadingButton } from "@/components/ui/LoadingOverlay";

// Example component showing how to use the progressive loading system
export default function LoadingExample() {
  const {
    isLoading,
    loadingLabel,
    startLoading,
    stopLoading,
    loadWithProgress,
    navigateWithLoading,
  } = useProgressiveLoader();

  const [overlayLoading, setOverlayLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  // Example: Simple loading
  const handleSimpleLoading = () => {
    startLoading("Processing your request...");
    
    setTimeout(() => {
      stopLoading();
    }, 3000);
  };

  // Example: Loading with progress
  const handleProgressLoading = async () => {
    setOverlayLoading(true);
    setProgress(0);

    try {
      await loadWithProgress(
        async () => {
          // Simulate work with progress updates
          for (let i = 0; i <= 100; i += 10) {
            setProgress(i);
            await LoadingUtils.simulateNetworkRequest(200);
          }
        },
        {
          label: "Processing data...",
          estimatedDuration: 2000,
        }
      );
    } finally {
      setOverlayLoading(false);
      setProgress(0);
    }
  };

  // Example: Navigation with loading
  const handleNavigation = () => {
    navigateWithLoading("/whoweare/blog", "Navigating to blog...");
  };

  // Example: Complex loading stages
  const handleComplexLoading = async () => {
    const stages = [
      { message: "Connecting to server...", duration: 800 },
      { message: "Authenticating user...", duration: 600 },
      { message: "Loading user data...", duration: 1000 },
      { message: "Finalizing...", duration: 400 },
    ];

    const stageRunner = LoadingUtils.createLoadingStages(stages);
    
    startLoading("Starting process...");
    
    await stageRunner((message) => {
      startLoading(message);
    });
    
    stopLoading();
  };

  return (
    <div className="p-8 max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Progressive Loading System Examples
      </h1>

      {/* Current loading state display */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-semibold mb-2">Current Loading State:</h3>
        <p>Loading: {isLoading ? "Yes" : "No"}</p>
        <p>Message: {loadingLabel || "None"}</p>
      </div>

      {/* Example buttons */}
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold mb-2">1. Simple Loading (Top Progress Bar)</h3>
          <LoadingButton
            isLoading={isLoading}
            onClick={handleSimpleLoading}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            loadingText="Processing..."
          >
            Start Simple Loading
          </LoadingButton>
        </div>

        <div>
          <h3 className="font-semibold mb-2">2. Progress Loading (With Overlay)</h3>
          <LoadingButton
            isLoading={overlayLoading}
            onClick={handleProgressLoading}
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
            loadingText="Loading..."
          >
            Start Progress Loading
          </LoadingButton>
        </div>

        <div>
          <h3 className="font-semibold mb-2">3. Navigation with Loading</h3>
          <LoadingButton
            isLoading={isLoading}
            onClick={handleNavigation}
            className="bg-purple-500 text-white px-4 py-2 rounded-lg"
            loadingText="Navigating..."
          >
            Navigate to Blog
          </LoadingButton>
        </div>

        <div>
          <h3 className="font-semibold mb-2">4. Complex Loading Stages</h3>
          <LoadingButton
            isLoading={isLoading}
            onClick={handleComplexLoading}
            className="bg-orange-500 text-white px-4 py-2 rounded-lg"
            loadingText="Processing..."
          >
            Start Complex Loading
          </LoadingButton>
        </div>
      </div>

      {/* Loading overlays */}
      <LoadingOverlay
        isVisible={overlayLoading}
        message="Processing your request"
        progress={progress}
        variant="detailed"
      />
    </div>
  );
}

// HOC for automatic loading on route changes
export function withPageLoading<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  loadingMessage?: string
) {
  return function WithPageLoadingComponent(props: P) {
    const { startLoading, stopLoading } = useProgressiveLoader();

    // Auto-start loading when component mounts
    useState(() => {
      startLoading(loadingMessage || "Loading page...");
      
      // Auto-stop loading after component renders
      const timer = setTimeout(() => {
        stopLoading();
      }, 100);

      return () => clearTimeout(timer);
    });

    return <WrappedComponent {...props} />;
  };
}