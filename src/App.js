import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

function App() {
  const { t, i18n } = useTranslation();
  const [langOption, setLangOption] = useState(i18n.language);

  useEffect(() => {
    i18n.changeLanguage(langOption);
    localStorage.setItem("lng", langOption);
  }, [langOption]);

  return (
    <div className="App">
      <header className="App-header">
        <div>{t("placeholder.login")}</div>
        <div>{t("placeholder.comment")}</div>
        <div>{t("cancel")}</div>
        <select
          value={langOption}
          onChange={(e) => {
            setLangOption(e.target.value);
          }}
        >
          <option value="ko">한국어</option>
          <option value="en">english</option>
        </select>
      </header>
    </div>
  );
}

export default App;
