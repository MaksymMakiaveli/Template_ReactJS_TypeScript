// import {
//     CHECK_EMAIL,
//     CHECK_NICKNAME,
//     CONFIRM_EMAIL,
//     REGISTER_USER,
//     RESEND_EMAIL,
// } from '../actionTypes';
// import { RegisterData, UserAction } from '../types/user';
// import { Redirect } from '../types';
// import { clearEmptyFields } from '../../helpers';
//
// export const registerUser = (
//     data: RegisterData,
//     redirect: Redirect
// ): UserAction => ({
//     type: REGISTER_USER,
//     api: {
//         url: '/api/v1/client/register',
//         method: 'POST',
//         data: {
//             ...clearEmptyFields(data),
//             gender: data.gender === 0 ? 'male' : 'female',
//             userAgent: window.navigator.userAgent,
//         },
//     },
//     apiKey: true,
//     redirect,
// });
//
// export const confirmEmail = (token: string): UserAction => ({
//     type: CONFIRM_EMAIL,
//     api: {
//         url: `/api/v1/client/verify_email/${token}`,
//         method: 'POST',
//     },
//     apiKey: true,
// });
//
// export const resendEmail = (): UserAction => ({
//     type: RESEND_EMAIL,
//     api: {
//         url: '/api/v1/client/resend_verification_email',
//         method: 'POST',
//     },
// });
//
// export const checkEmail = (email: string): UserAction => ({
//     type: CHECK_EMAIL,
//     api: {
//         url: '/api/v1/tools/check_email',
//         method: 'GET',
//         params: {
//             email,
//         },
//     },
//     apiKey: true,
//     payload: email,
// });
//
// export const checkNickname = (nickname: string): UserAction => ({
//     type: CHECK_NICKNAME,
//     api: {
//         url: '/api/v1/tools/check_nickname',
//         method: 'GET',
//         params: {
//             nickname,
//         },
//     },
//     apiKey: true,
// });
