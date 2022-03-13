import { useState } from "react";

export const useSubmit = () => {
  const [allFieldsError, setAllFieldsError] = useState(false);
  const [oneFieldError, setOneFieldError] = useState(false);
  const checkErrors = async (
    isExpValid,
    isReactExpValid,
    isPrevCompanyValid,
    isCurrentCompanyValid,
    isNoticePeriodValid
  ) => {
    if (
      !isExpValid &&
      !isReactExpValid &&
      !isPrevCompanyValid &&
      !isCurrentCompanyValid &&
      !isNoticePeriodValid
    ) {
      setAllFieldsError(true);
    } else if (!isExpValid) {
      setOneFieldError("exp");
    } else if (!isReactExpValid) {
      setOneFieldError("react");
      return oneFieldError;
    } else if (!isPrevCompanyValid) {
      setOneFieldError("prev");
    } else if (!isCurrentCompanyValid) {
      setOneFieldError("current");
    } else if (!isNoticePeriodValid) {
      setOneFieldError("notice");
    }
    return {allFieldsError, oneFieldError}
  };
  return { checkErrors };
};
