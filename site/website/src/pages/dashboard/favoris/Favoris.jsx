import React, { useEffect, useState } from "react";
import useHttp from "../../../hooks/useHttp";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../components/Loader";
import FavorisItem from "./FavorisItem";
import ElementNotFound from "../../../components/ElementNotFound";

export default function Favoris() {
  const { sendRequest } = useHttp();
  const [favoris, setFavoris] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const {
    data: getData,
    isFetching,
    isSuccess,
  } = useQuery({
    queryKey: ["getFavoris"],
    queryFn: () => sendRequest("/favoris"),
  });

  const setData = () => {
    console.log(getData);
    if (isFetching) {
      setIsLoading(true);
    }

    setTimeout(() => {
      if (isSuccess && getData) {
        const { data } = getData;
        setFavoris(data.data);
        setIsLoading(false);
      }
    }, 800);
  };

  useEffect(() => {
    setData();
  }, [getData]);

  return (
    <section id="favoris" className="content-current">
      <div className="row mb-4 pb-3 border-bottom">
        <div className="col-md-12">
          <div className="d-flex justify-content-between flex-wrap">
            <div className="mb-3">
              <h4 className="">Mes favoris</h4>
              <span className="section_sub_title">
                <i className="icon-info-circled"></i> Cette section est utilisée
                pour la gestion de vos favoris
              </span>
            </div>
          </div>
        </div>
      </div>
      {isLoading ? (
        <Loader />
      ) : favoris.length > 0 ? (
        <div className="row">
          {favoris.map((favoris, key) => (
            <FavorisItem item={favoris.etablissement} key={key} />
          ))}
        </div>
      ) : (
        <ElementNotFound />
      )}
    </section>
  );
}
