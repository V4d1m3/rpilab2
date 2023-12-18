import React from "react";
import template from "./PersonalPage.module.css";
import "react-vertical-timeline-component/style.min.css";
import Timeline from "../timeline/Timeline";
import Workplace from "../workplace/Workplace";
import Videos from "../videos/Videos";
import Photos from "../photos/Photos";
import { useTranslation } from "react-i18next";
import { useLoadScript } from "@react-google-maps/api";

const PersonalPage = (props) => {
  const { t } = useTranslation();
  const name = props.info.name_en.toLowerCase().split(" ").join("_");
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAjWoYvnojTneG5630-xVLtpa0ernNo9DM",
  });
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div className={template.wrapper}>
      <div className="BlockScammersName">
      <h1 className="ScammersName">{t(name)}</h1>
      </div>
      <h4>
        ({props.info.dateOfBirth} - {props.info.dateOfDeath})
      </h4>
      <img src={props.info.imgPath} alt="" className={template.avatar} />
      <Timeline info={props.info} />
      <Photos photos={props.info.photos} />
      <Videos links={props.info.links} />
      <Workplace coordinates={props.info.coordinates} />
    </div>
  );
};

export default PersonalPage;