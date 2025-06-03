import { endpoints } from "@/api/endpoints";
import { safeFetch } from "@/helper/safeFetch";

export const getActRuleData = async () => {
  const actRuleData = await safeFetch(endpoints.actRule);

  return {
    actRuleData,
  };
};
