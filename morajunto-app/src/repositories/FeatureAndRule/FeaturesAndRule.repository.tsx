import { useProperty } from "@modules/properties/hooks/useProperty";
import { fetchService } from "@services";
import { Feature, Rule } from "@types";
import { useMutation } from "react-query";
import { CreateFeatureAndRuleDto } from "./FeatureAndRule.types";

export const PROPERTY_BASE_URL = "/properties";
export const FEATURE_BASE_URL = "/features";
export const RULE_BASE_URL = "/rules";

const useFeatureAndRuleRepository = () => {
  const { updateFeature, updateRule } = useProperty();
  function createFeatureAndRule(propertyId?: number) {
    return useMutation({
      mutationFn: async (featureAndRule: CreateFeatureAndRuleDto) => {
        const feature = {
          isUnfurnished: featureAndRule.isUnfurnished,
          hasParking: featureAndRule.hasParking,
          hasGym: featureAndRule.hasGym,
          hasPool: featureAndRule.hasPool,
          hasAccessibility: featureAndRule.hasAccessibility,
          hasAirConditioning: featureAndRule.hasAirConditioning,
          hasTv: featureAndRule.hasTv,
          hasCentralHeating: featureAndRule.hasCentralHeating,
          hasElevator: featureAndRule.hasElevator,
          hasOutdoorArea: featureAndRule.hasOutdoorArea,
          hasBalcony: featureAndRule.hasBalcony,
          hasWifi: featureAndRule.hasWifi,
          isUnfurnishedBedroom: featureAndRule.isUnfurnishedBedroom,
          hasEnsuite: featureAndRule.hasEnsuite,
          hasCleaningService: featureAndRule.hasCleaningService,
        };
        const rule = {
          smokingAllowed: featureAndRule.smokingAllowed,
          childrenAllowed: featureAndRule.childrenAllowed,
          petsAllowed: featureAndRule.petsAllowed,
          alcoholAllowed: featureAndRule.alcoholAllowed,
          guestsAllowed: featureAndRule.guestsAllowed,
        };
        const responseFeature = await fetchService.post<Feature>({
          url: `${PROPERTY_BASE_URL}/${propertyId}${FEATURE_BASE_URL}`,
          data: feature,
        });
        const responseRule = await fetchService.post<Rule>({
          url: `${PROPERTY_BASE_URL}/${propertyId}${RULE_BASE_URL}`,
          data: rule,
        });
        return { feature: responseFeature.data, rule: responseRule.data };
      },
      onSuccess: (data) => {
        updateFeature(data.feature);
        updateRule(data.rule);
      },
    });
  }
  return { createFeatureAndRule };
};

export default useFeatureAndRuleRepository;
