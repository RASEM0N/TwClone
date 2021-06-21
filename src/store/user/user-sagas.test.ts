// @ts-ignore
import { backFetchUserRequest, fetchUserRequest, registerUserRequest } from './user-sagas'
import { InitialStateType, IRegisterUser, UserTypeEnum } from './user-types'
import { call, delay, put } from 'redux-saga/effects'
import { apiAuth } from '../../services/api/APIAuthorization'
import { expectSaga, testSaga } from 'redux-saga-test-plan'

import userReducer, { setStatusLoadingUser, setUser, setUserAuthorizeError } from './user-reducer'
import { LoadingStateEnum, UserPrivateType } from '../types'
import { throwError } from 'redux-saga-test-plan/providers'
import {
    AuthorizationResponseUserType,
    LoginRequestDataType,
    RegisterRequestDataType,
} from '../../services/api/types'

describe('test user saga', () => {
    let payload: LoginRequestDataType
    let registerPayload: RegisterRequestDataType
    let user: UserPrivateType
    let response: AuthorizationResponseUserType
    let responseToState: { user: UserPrivateType; token: string }

    // beforeEach работает только для describe('user login'...)
    // beforeAll для всех
    beforeAll(() => {
        payload = {
            password: 'password123',
            username: 'username123',
        }

        registerPayload = {
            username: 'username123',
            fullname: 'fullname123',
            email: 'fd',
            password: 'fd',
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
    })

    describe('authenticated', () => {
        describe('авторизация', () => {
            it('success руками', () => {
                const generator = fetchUserRequest({
                    payload: payload,
                    type: UserTypeEnum.FETCH_USER,
                })

                const putStatus = generator.next().value
                expect(putStatus).toMatchInlineSnapshot(`
                Object {
                  "@@redux-saga/IO": true,
                  "combinator": false,
                  "payload": Object {
                    "action": Object {
                      "payload": "LOADING",
                      "type": "user/setStatusLoadingUser",
                    },
                    "channel": undefined,
                  },
                  "type": "PUT",
                }
            `)
                //@ts-ignore
                expect(putStatus.payload.action).toEqual({
                    payload: 'LOADING',
                    type: 'user/setStatusLoadingUser',
                })

                const fetch = generator.next().value
                expect(fetch).toEqual(call(apiAuth.login, payload))

                const putUser = generator.next(response).value
                // @ts-ignore
                expect(putUser.payload.action.payload).toEqual({
                    user,
                    token: '1234567',
                })
            })
            it('success', () => {
                return expectSaga(fetchUserRequest, {
                    payload,
                    type: UserTypeEnum.FETCH_USER,
                })
                    .withReducer(userReducer)
                    .put(setStatusLoadingUser(LoadingStateEnum.LOADING))
                    .call(apiAuth.login, payload)
                    .provide([[call(apiAuth.login, payload), response]])
                    .put(setUser({ user, token: '1234567' }))
                    .hasFinalState<InitialStateType>({
                        item: user,
                        loading: LoadingStateEnum.LOADED,
                        token: '1234567',
                        error: null,
                    })
                    .run()
            })
            it('error', () => {
                const error = new Error()
                //@ts-ignore
                return expectSaga(fetchUserRequest, {
                    payload: payload,
                    type: UserTypeEnum.FETCH_USER,
                })
                    .withReducer(userReducer)
                    .put(setStatusLoadingUser(LoadingStateEnum.LOADING))
                    .provide([[call(apiAuth.login, payload), throwError(error)]])
                    .put(setUserAuthorizeError(undefined))
                    .put(setStatusLoadingUser(LoadingStateEnum.ERROR))
                    .hasFinalState<InitialStateType>({
                        item: null,
                        token: null,
                        loading: LoadingStateEnum.ERROR,
                        error: undefined,
                    })
                    .run()
            })
        })

        describe('начальная авторизация', () => {
            it('success', () => {
                const saga = testSaga(backFetchUserRequest)
                saga.next()
                    .put(setStatusLoadingUser(LoadingStateEnum.LOADING))
                    .next()
                    .delay(2000)
                    .save('before fetch')
                    .next()
                    .call(apiAuth.getMe)
                    .next(response)
                    .put(
                        setUser({
                            user,
                            token: '1234567',
                        })
                    )
                    .restore('before fetch')
                    .next()
                    .call(apiAuth.getMe)
                    .next()
                    .put(setStatusLoadingUser(LoadingStateEnum.ERROR))
                    .finish()
            })

            it('success + error', () => {
                const gen = backFetchUserRequest()
                //@ts-ignore
                expect(gen.next().value.payload.action).toEqual({
                    payload: 'LOADING',
                    type: 'user/setStatusLoadingUser',
                })
                expect(gen.next().value).toEqual(delay(2000))
                expect(gen.next().value).toEqual(call(apiAuth.getMe))
                //@ts-ignore
                expect(gen.next(response).value.payload.action.payload).toEqual(responseToState)
            })
        })

        describe('регистрация', () => {
            it('success руками', () => {
                const action = {
                    payload: registerPayload,
                    type: UserTypeEnum.REGISTER_USER,
                }

                const generator = registerUserRequest(action as IRegisterUser)
                //@ts-ignore
                expect(generator.next().value.payload.action).toEqual({
                    payload: 'LOADING',
                    type: 'user/setStatusLoadingUser',
                })
                expect(generator.next().value).toEqual(call(apiAuth.register, registerPayload))
                //@ts-ignore
                expect(generator.next(response).value.payload.action.payload).toEqual(
                    responseToState
                )
            })
            it('success', () => {
                const action = {
                    payload: registerPayload,
                    type: UserTypeEnum.REGISTER_USER,
                }

                return expectSaga(registerUserRequest, action as IRegisterUser)
                    .withReducer(userReducer)
                    .put(setStatusLoadingUser(LoadingStateEnum.LOADING))
                    .provide([[call(apiAuth.register, registerPayload), response]])
                    .put(setUser(responseToState))
                    .hasFinalState<InitialStateType>({
                        item: user,
                        loading: LoadingStateEnum.LOADED,
                        token: '1234567',
                        error: null,
                    })
                    .run()
            })

            it('error', () => {
                const action = {
                    payload: registerPayload,
                    type: UserTypeEnum.REGISTER_USER,
                }
                const error = new Error()
                return expectSaga(registerUserRequest, action as IRegisterUser)
                    .withReducer(userReducer)
                    .put(setStatusLoadingUser(LoadingStateEnum.LOADING))
                    .provide([[call(apiAuth.register, registerPayload), throwError(error)]])
                    .put(setUserAuthorizeError(undefined))
                    .put(setStatusLoadingUser(LoadingStateEnum.ERROR))
                    .hasFinalState<InitialStateType>({
                        item: null,
                        loading: LoadingStateEnum.ERROR,
                        token: null,
                        error: undefined,
                    })
                    .run()
            })

            it('success -', () => {
                const action: IRegisterUser = {
                    payload: registerPayload,
                    type: UserTypeEnum.REGISTER_USER,
                }
                const saga = testSaga(registerUserRequest, action)

                saga.next()
                    .put(setStatusLoadingUser(LoadingStateEnum.LOADING))
                    .next()
                    .call(apiAuth.register, registerPayload)
                    .next(response)
                    .put(setUser(responseToState))
                    .finish()
            })
        })
    })
})
