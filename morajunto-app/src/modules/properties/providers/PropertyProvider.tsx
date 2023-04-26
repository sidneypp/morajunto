import {
  getFeature,
  getOffer,
  getPhotos,
  getProperty,
  getRule,
  removeFeature,
  removeOffer,
  removePhotos,
  removeProperty,
  removeRule,
  setFeature as setFeatureCookie,
  setOffer as setOfferCookie,
  setPhotos as setPhotosCookie,
  setProperty as setPropertyCookie,
  setRule as setRuleCookie,
} from "@services";
import {
  City,
  Feature,
  Neighborhood,
  Offer,
  Photo,
  Property,
  Rule,
  State,
} from "@types";
import { createContext, PropsWithChildren, useEffect, useState } from "react";

type PropertyContextType = {
  property: Property;
  updateProperty: (data: Partial<Property>) => void;
  feature: Feature;
  updateFeature: (data: Partial<Feature>) => void;
  rule: Rule;
  updateRule: (data: Partial<Rule>) => void;
  offer: Offer;
  updateOffer: (data: Partial<Offer>) => void;
  photos: Photo[];
  updatePhoto: (data: Partial<Photo>) => void;
  deletePhoto: (data: Partial<Photo>) => void;
  refreshPhotos: (data: Partial<Photo>) => void;
  finishRegister: () => void;
};

export const PropertyContext = createContext({} as PropertyContextType);

export const PropertyProvider = ({ children }: PropsWithChildren) => {
  const [property, setProperty] = useState<Property>({
    kind: "apartment",
    area: null as unknown as number,
    address: {
      zipcode: "",
      state: null as unknown as State,
      city: null as unknown as City,
      neighborhood: null as unknown as Neighborhood,
      street: "",
      number: null as unknown as number,
      complement: "",
    },
  });
  const [feature, setFeature] = useState<Feature>({
    isUnfurnished: true as boolean,
    hasParking: false as boolean,
    hasGym: false as boolean,
    hasPool: false as boolean,
    hasAccessibility: false as boolean,
    hasAirConditioning: false as boolean,
    hasTv: false as boolean,
    hasCentralHeating: false as boolean,
    hasElevator: false as boolean,
    hasOutdoorArea: false as boolean,
    hasBalcony: false as boolean,
    hasWifi: false as boolean,
    isUnfurnishedBedroom: true as boolean,
    hasEnsuite: false as boolean,
    hasCleaningService: false as boolean,
  });
  const [rule, setRule] = useState<Rule>({
    smokingAllowed: null as unknown as boolean,
    childrenAllowed: null as unknown as boolean,
    petsAllowed: null as unknown as boolean,
    alcoholAllowed: null as unknown as boolean,
    guestsAllowed: null as unknown as boolean,
  });

  const [offer, setOffer] = useState<Offer>({
    id: null as unknown as number,
    publish: false as boolean,
    availableAt: new Date(),
    rentPricing: "",
    depositRequired: false as boolean,
    depositAmount: "",
    menAllowed: true as boolean,
    womenAllowed: true as boolean,
    withElectricity: false as boolean,
    withGas: false as boolean,
    withInternet: false as boolean,
    withWater: false as boolean,
    minimumStay: 0 as number,
    ageGroup: 0 as number,
    toWork: false as boolean,
    toStudy: false as boolean,
  });
  const [photos, setPhotos] = useState<Photo[]>([]);

  function updateProperty(data: Partial<Property>) {
    const updatedProperty = { ...property, ...data } as Property;
    setProperty(updatedProperty);
    setPropertyCookie(updatedProperty);
  }

  function updateFeature(data: Partial<Feature>) {
    const updatedFeature = { ...feature, ...data } as Feature;
    setFeature(updatedFeature);
    setFeatureCookie(updatedFeature);
  }
  function updateRule(data: Partial<Rule>) {
    const updatedRule = { ...rule, ...data } as Rule;
    setRule(updatedRule);
    setRuleCookie(updatedRule);
  }
  function updateOffer(data: Partial<Offer>) {
    const updateOffer = { ...offer, ...data } as Offer;
    setOffer(updateOffer);
    setOfferCookie(updateOffer);
  }
  function updatePhoto(data: Partial<Photo>) {
    const updatePhotos = [data, ...photos] as Photo[];
    setPhotos(updatePhotos);
    setPhotosCookie(updatePhotos);
  }
  function deletePhoto(data: Partial<Photo>) {
    const updatePhotos = photos.filter((photo) => photo.id != data.id);
    setPhotos(updatePhotos);
    setPhotosCookie(updatePhotos);
  }
  function refreshPhotos(data: Partial<Photo>) {
    const updatePhotos = [...photos] as Photo[];
    updatePhotos.forEach((photo) => {
      if (data.id == photo.id) {
        photo.houseSection = data.houseSection;
      }
    });
    setPhotos(updatePhotos);
    setPhotosCookie(updatePhotos);
  }
  function finishRegister() {
    removePhotos();
    removeOffer();
    removeRule();
    removeFeature();
    removeProperty();
  }
  useEffect(() => {
    setProperty(getProperty());
    setFeature(getFeature());
    setRule(getRule());
    setOffer(getOffer());
    setPhotos(getPhotos());
  }, []);

  return (
    <PropertyContext.Provider
      value={{
        property,
        updateProperty,
        feature,
        updateFeature,
        rule,
        updateRule,
        offer,
        updateOffer,
        photos,
        updatePhoto,
        deletePhoto,
        refreshPhotos,
        finishRegister,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};
