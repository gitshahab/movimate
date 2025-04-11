import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Banner } from "../components/Banner";

export const MovieDetail = () => {
  const params = useParams();

  useEffect(() => {
    document.title = `${params.id}/Movimate`;
  });

  return (
    <>
      <Banner movieId={params.id} />
    </>
  )
}
