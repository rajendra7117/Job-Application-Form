import { useDispatch } from "react-redux"
import { accountInformationActions } from "../../Store/AccountInformationSlice"
import { basicDetailsActions } from "../../Store/BasicDetailSlice"
import { skillsSliceActions } from "../../Store/SkillsSlice"
import { experienceSliceActions } from "../../Store/ExperienceSlice"
import { editStateActions } from "../../Store/EditStateSlice"
import { educationSliceActions } from "../../Store/EducationSlice"
export const useClearData = () => {
        const dispatch = useDispatch()

        const clearData = () => {
            dispatch(accountInformationActions.clearData())
            dispatch(basicDetailsActions.clearData())
            dispatch(skillsSliceActions.clearData())
            dispatch(experienceSliceActions.clearData())
            dispatch(editStateActions.clearData())
            dispatch(educationSliceActions.clearData())
        }

    return {
        clearData
    }
}