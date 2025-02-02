import { useEffect, useState } from "react";
import { ModTutorialDetails } from "../modTutorialDetails/modTutorialDetails";
import { ModTutorialCard } from "./modTutorialCard";

export const ModVideoContainer = ({id}) => {
  const [selectedVideoId, setSelectedVideoId] = useState("");
  function changeSelected (value)  {
    if (value) {
        setSelectedVideoId(value)
    }else {
        setSelectedVideoId("")
    }
  }

  useEffect(() => {
    setSelectedVideoId(id)
  }, [id])

  return (
    <div>
      {selectedVideoId ? (
        <ModTutorialDetails changeSelected={changeSelected} selectedVideoId={selectedVideoId} />
      ) : (
        <ModTutorialCard changeSelected={changeSelected}/>
      )}
    </div>
  );
};
