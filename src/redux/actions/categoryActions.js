import * as actitonTypes from "./actionTypes"

export function changeCategory(category){
    return {
        type:actitonTypes.CHANGE_CATEGORY,
        payload:category
    }
}