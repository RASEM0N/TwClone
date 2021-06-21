import { AuthorizationResponseUserType, LoginRequestDataType } from '../../services/api/types'
import { LoadingStateEnum, UserPrivateType } from '../types'
import userReducer, {
    logout,
    setStatusLoadingUser,
    setUser,
    setUserAuthorizeError,
} from './user-reducer'
import { InitialStateType } from './user-types'

describe('test user reducer', () => {
    let payload: LoginRequestDataType
    let user: UserPrivateType
    let response: AuthorizationResponseUserType
    let responseToState: { user: UserPrivateType; token: string }
    let initialState: InitialStateType

    // beforeEach работает только для describe('user login'...)
    // beforeAll для всех
    beforeAll(() => {
        payload = {
            password: 'password123',
            username: 'username123',
        }

        user = {
            _id: '123456',
            username: 'username123',
            avatarUrl: 'fsdfsdfds',
            confirmed: true,
            createdAt: 'fd',
            email: 'fd',
            fullname: 'fd',
            updatedAt: 'fd',
        }

        response = {
            token: '1234567',
            data: user,
            status: 'success',
            errors: null,
        }

        responseToState = {
            user,
            token: '1234567',
        }

        initialState = {
            item: null,
            loading: LoadingStateEnum.NEVER,
            token: null,
            error: null,
        }
    })

    describe('actions', () => {
        it('setUser', () => {
            expect(userReducer(initialState, setUser(responseToState))).toEqual({
                item: user,
                loading: LoadingStateEnum.LOADED,
                token: '1234567',
                error: null,
            })
        })
        it('setUserAuthorizeError', () => {
            expect(userReducer(initialState, setUserAuthorizeError('ERROR'))).toEqual({
                item: null,
                loading: LoadingStateEnum.ERROR,
                token: null,
                error: 'ERROR',
            })
        })
        it('setStatusLoadingUser', () => {
            expect(
                userReducer(initialState, setStatusLoadingUser(LoadingStateEnum.LOADING))
            ).toEqual({
                item: null,
                loading: LoadingStateEnum.LOADING,
                token: null,
                error: null,
            })
        })
        it('logout', () => {
            expect(userReducer(initialState, logout())).toEqual({
                item: null,
                loading: LoadingStateEnum.NEVER,
                token: null,
                error: null,
            })
        })
    })
})
