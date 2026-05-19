"use client";

import { ClickToComponent } from 'click-to-react-component';

export function DevClickToComponent() {
  if (process.env.NODE_ENV !== 'development') return null;
  return <ClickToComponent />;
}
