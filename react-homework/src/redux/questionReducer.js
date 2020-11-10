import { CREATE_COMMENT, CREATE_QUESTION, INCREMENT_VIEW_COUNTER } from "./types"

const initialState = {
    questions: []
}

export const questionReducer = (state = initialState, action) => {
    switch(action.type) {
        case CREATE_QUESTION:
            return { ...state, questions: state.questions.concat([action.payload])}
        case INCREMENT_VIEW_COUNTER: {
            for (let i = 0; i < state.questions.length; i++) {
                if (state.questions[i].id === action.payload.id) {
                    state.questions[i].counterView++;
                }
            }
            return { ...state, questions: state.questions}
        }
        case CREATE_COMMENT: {
            for (let i = 0; i < state.questions.length; i++) {
                if (state.questions[i].id === action.payload.id) {
                    state.questions[i].comments.push([action.payload.comment])
                    state.questions[i].counterAnswers++;
                }
            }
            return { ...state, questions: state.questions}
        }
        default: return state
    }
}