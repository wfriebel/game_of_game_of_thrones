import { FETCH_ACTIONS_START, FETCH_ACTIONS_SUCCESS, FETCH_ACTIONS_ERROR } from './actionTypes'
import { getActions } from '../api/actions'

const fetchActionsStart = () => ({
    type: FETCH_ACTIONS_START
})

const fetchActionsSuccess = (actions) => ({
    type: FETCH_ACTIONS_SUCCESS,
    payload: { actions }
})

const fetchActionsError = (error) => ({
    type: FETCH_ACTIONS_ERROR,
    payload: { error }
})

export const fetchActions = (leagueId) => async dispatch => {
    try {
        dispatch(fetchActionsStart())
        const actions = await getActions(leagueId)
        dispatch(fetchActionsSuccess(actions))
    } catch (error) {
        console.log('Error fetching actions:', error)
        dispatch(fetchActionsError(error))
    }
}