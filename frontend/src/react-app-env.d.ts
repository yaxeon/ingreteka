/// <reference types="react-scripts" />

interface Window {
  goalEvent: (event: {
    action: string;
    category: string;
    label: string;
  }) => void;
}
