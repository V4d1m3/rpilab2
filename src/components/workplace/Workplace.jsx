import React, { useMemo } from "react";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import s from "./Workplace.module.css";
import { useTranslation } from "react-i18next";

const Workplace = (props) => {
  const { t } = useTranslation();
  const center = useMemo(
    () => ({
      lat: props.coordinates.latitude,
      lng: props.coordinates.longitude,
    }),
    [props.coordinates.latitude, props.coordinates.longitude],
  );
  return (
    <div className={s.wrapper}>
      <h1>{t("place_of_work")}</h1>
      <GoogleMap zoom={5} center={center} mapContainerClassName={s.container}>
        <MarkerF position={center} />
      </GoogleMap>
    </div>
  );
};

export default Workplace;
