import React from "react";
import Dev from "../dev/Dev";
import { useTranslation } from "react-i18next";
import s from "./DevsInfo.module.css";

const DevsInfo = (props) => {
  const { t } = useTranslation();
  return (
    <div className={s.wrapper}>
      <h1>{t("developers")}</h1>
      <div className={s.list}>
        {props.info.map((info, i) => (
          <Dev key={i} info={info} />
        ))}
      </div>
    </div>
  );
};

export default DevsInfo;
