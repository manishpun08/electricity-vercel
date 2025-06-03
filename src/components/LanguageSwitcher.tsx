"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const LanguageSwitcher = () => {
  const [activeLang, setActiveLang] = useState<"eng" | "nep">("eng");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const baseStyle = "cursor-pointer pb-1 z-20";
  const activeStyle = "border-b-2 border-white";
  const inactiveStyle = "border-b-2 border-transparent";

  const resetGoogleTranslate = () => {
    document.cookie = "googtrans=;path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie =
      "googtrans=;path=/;domain=" +
      window.location.hostname +
      ";expires=Thu, 01 Jan 1970 00:00:00 GMT";

    // Instead of reloading immediately, try reset first
    const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (select) {
      select.value = "en";
      select.dispatchEvent(new Event("change"));
    } else {
      window.location.reload(); // fallback if select not found
    }
  };

  const handleLanguageChange = (lang: "eng" | "nep") => {
    setActiveLang(lang);
    setError(null);

    if (lang === "eng") {
      resetGoogleTranslate();
      return;
    }

    const langCode = lang === "nep" ? "ne" : "en";

    let retries = 0;
    const maxRetries = 10;

    const tryChangeLanguage = () => {
      const select =
        document.querySelector<HTMLSelectElement>(".goog-te-combo");

      if (select) {
        if (select.options.length > 1) {
          select.value = langCode;
          select.dispatchEvent(new Event("change"));
        } else if (retries < maxRetries) {
          retries++;
          setTimeout(tryChangeLanguage, 300);
        } else {
          setError("Failed to switch language. Please try again.");
        }
      } else if (retries < maxRetries) {
        retries++;
        setTimeout(tryChangeLanguage, 300);
      } else {
        setError("Translation service unavailable. Please refresh the page.");
      }
    };

    tryChangeLanguage();
  };

  return (
    <div>
      {/* Desktop view */}
      <div className="pl-3 typography-p-regular font-semibold text-white hidden md:flex gap-2">
        <span
          onClick={() => handleLanguageChange("nep")}
          className={`notranslate ${baseStyle} ${
            activeLang === "nep" ? activeStyle : inactiveStyle
          }`}
        >
          Nep
        </span>
        <span className="px-1 notranslate">|</span>
        <span
          onClick={() => handleLanguageChange("eng")}
          className={`notranslate ${baseStyle} ${
            activeLang === "eng" ? activeStyle : inactiveStyle
          }`}
        >
          Eng
        </span>
      </div>

      {/* Mobile view */}
      <div className="md:hidden relative pl-3 text-white font-semibold">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-1 notranslate"
        >
          {activeLang === "nep" ? "Nep" : "Eng"}
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              dropdownOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {dropdownOpen && (
          <div className="absolute mt-2 bg-white text-black rounded shadow-md w-20 z-50">
            <div
              onClick={() => {
                handleLanguageChange("nep");
                setDropdownOpen(false);
              }}
              className="notranslate px-3 py-2 hover:bg-gray-200 cursor-pointer"
            >
              Nep
            </div>
            <div
              onClick={() => {
                handleLanguageChange("eng");
                setDropdownOpen(false);
              }}
              className="notranslate px-3 py-2 hover:bg-gray-200 cursor-pointer"
            >
              Eng
            </div>
          </div>
        )}
      </div>

      {/* Error message */}
      {error && <div className="text-red-500 mt-2 text-sm pl-3">{error}</div>}
    </div>
  );
};

export default LanguageSwitcher;
