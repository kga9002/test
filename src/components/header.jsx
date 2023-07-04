import React from "react";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export default function Header() {
  const { i18n } = useTranslation();
  const [langOption, setLangOption] = useState(i18n.language);

  useEffect(() => {
    i18n.changeLanguage(langOption);
    localStorage.setItem("lng", langOption);
  }, [langOption]);

  return (
    <div>
      <header className="App-header">
        <select
          value={langOption}
          onChange={(e) => {
            setLangOption(e.target.value);
          }}
        >
          <option value="ko">한국어</option>
          <option value="en">English</option>
          <option value="ja">日本語</option>
          <option value="es">Español</option>
        </select>
      </header>
    </div>
  );
}
