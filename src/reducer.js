export const reducer = (state, action) => {
    switch (action.type) {
        case "add":
            if (state.num2 === '' && action.payload === '.') {
                return {...state, num2: '0' + action.payload}
            } else if (state.num2 === '') {
                return {...state, num2: action.payload}
            } else {
                if (action.payload === '.' && state.num2.includes('.')) {
                    return state
                } else {
                    return {...state, num2: state.num2 + action.payload}
                }
            }
        case "operation":
            if (!state.num1) {
                return {...state, num1: state.num2, op: action.payload, num2: ''}
            }
            if (!state.num2) {
                return {...state, op: action.payload}
            }
            if (state.num1 && state.op) {
                console.log('called')
                return {...state, value: eval(state.value + state.op + state.num2), op: action.payload}
            }
            return {
                ...state,
                value: eval(state.num1 + state.op + state.num2),
                num2: '',
                op: action.payload,
                num1: eval(state.num1 + state.op + state.num2)
            }

        case "equal":
            if (state.op && state.num2) {
                return {
                    ...state,
                    value: eval(state.num1 + state.op + state.num2),
                    num2: '',
                    num1: eval(state.num1 + state.op + state.num2),
                    num3: state.num2
                }
            } else if (state.op && state.value) {
                return {...state, value: eval(state.value + state.op + state.num3)}
            } else {
                return state
            }

        case "c":
            if (state.num2.length === 2 && state.num2.includes('0.')) {
                return {...state, num2: ''}
            } else if (state.num2.length > 1) {
                return {...state, num2: state.num2.slice(0, -1)}
            } else {
                return {...state, num2: ''}
            }

        case "ac":
            return {
                value: 0,
                op: '',
                num1: 0,
                num2: ''
            }

        default:
            return state
    }
}