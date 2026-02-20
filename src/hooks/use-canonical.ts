import { useEffect } from "react";

const BASE_URL = "https://i9learning.pt";

export const useCanonical = (path: string) => {
  useEffect(() => {
    const url = `${BASE_URL}${path}`;
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (link) {
      link.href = url;
    } else {
      link = document.createElement("link");
      link.rel = "canonical";
      link.href = url;
      document.head.appendChild(link);
    }
  }, [path]);
};
