import * as yup from 'yup'

const tweetValidationSchema = yup.object({
    text: yup
        .string()
        .min(10, 'Твит должен быть минимум в длину 10 символов')
        .required('Введите твит'),
    // ...
})

export default tweetValidationSchema
