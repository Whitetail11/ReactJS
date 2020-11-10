import { CREATE_COMMENT, CREATE_QUESTION, INCREMENT_VIEW_COUNTER } from "./types";


export function createQuestion(question) {
    return {
        type: CREATE_QUESTION,
        payload: question
    }
}

export function incrementViews(question) {
    return  {
        type: INCREMENT_VIEW_COUNTER,
        payload: question
    }
}

export function createCommetn(comment, id) {
    return {
        type: CREATE_COMMENT,
        payload: {comment,id}
    }
}