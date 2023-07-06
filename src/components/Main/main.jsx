import { useTranslation } from "react-i18next";
import { useAuthStateContext } from "../../context/AuthContext";
import NoImage from "../../assets/noimage.jpg";
import { useEffect } from "react";

export default function Main() {
  const { t } = useTranslation();
  const { state } = useAuthStateContext();
  const URL = "https://edgefarm.ai/api/manager";

  const imgError = (e) => {
    e.target.src = NoImage;
  };

  return (
    <div>
      <p className="text-lg font-bold">{t("account.farm_information")}</p>
      {state?.data?.farms.map((o) => (
        <div
          key={o.id}
          className="w-72 h-72 inline-block m-3 rounded-lg bg-gray-200"
        >
          <div className="relative mx-auto rounded-lg overflow-hidden w-60 h-60 mt-3">
            {o.profile_image === null ? (
              <img src={NoImage} alt="no" className="w-60 h-60 inline" />
            ) : (
              <img
                src={`${URL}${o.profile_image}`}
                alt={o.id}
                onError={imgError}
                className="w-60 h-60"
              />
            )}
          </div>
          <p className="text-xl text-center mt-1">{o.name}</p>
        </div>
      ))}
    </div>
  );
}
