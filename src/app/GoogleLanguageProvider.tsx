"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: {
      translate: {
        TranslateElement: new (options: object, containerId: string) => void;
      };
    };
  }
}

export const GoogleTranslateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Load only once
      if (!document.getElementById("google-translate-script")) {
        window.googleTranslateElementInit = () => {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages: "en,ne",
              autoDisplay: false,
            },
            "google_translate_element"
          );
        };

        const script = document.createElement("script");
        script.id = "google-translate-script"; // important to prevent duplicate loading
        script.src =
          "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, []);

  // Hide Google Translate UI completely
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .goog-te-banner-frame.skiptranslate { display: none !important; }
      body { top: 0px !important; }
      .goog-te-menu-frame { display: none !important; }
      .goog-te-balloon-frame { display: none !important; }
      .goog-te-gadget-icon { display: none !important; }
      #goog-gt-tt { display: none !important; }
      .goog-te-menu-value { display: none !important; }
      .goog-te-gadget { color: transparent !important; }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      {/* Google Translate hidden element */}
      <div
        id="google_translate_element"
        style={{ display: "none", pointerEvents: "none" }}
      />
      {children}
    </>
  );
};
