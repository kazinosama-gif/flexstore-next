"use client";

import { useEffect, useState } from "react";

import LoadingScreen from "./LoadingScreen";

export default function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen loading={loading} />
      {!loading && children}
    </>
  );
}