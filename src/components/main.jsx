import { useTranslation } from "react-i18next";
import { useAuthStateContext } from "../context/AuthContext";

export default function Main() {
  const { t } = useTranslation();
  const { state } = useAuthStateContext();
  return (
    <div>
      <h3>{t("account.farm_information")}</h3>
      {state?.data?.farms.map((o) => (
        <p key={o.id}>{o.name}</p>
      ))}
    </div>
  );
}
