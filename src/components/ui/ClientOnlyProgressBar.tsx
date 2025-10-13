"use client";

import { useEffect, useState } from "react";
import SimpleProgressBar from "./SimpleProgressBar";

interface ClientOnlyProgressBarProps {
  color?: string;
  height?: number;
  className?: string;
}

export default function ClientOnlyProgressBar(props: ClientOnlyProgressBarProps) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <SimpleProgressBar {...props} />;
}
