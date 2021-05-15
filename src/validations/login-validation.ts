import * as yup from 'yup'

const loginValidationSchema = yup.object({
    username: yup.string().email('Некорректная почта').required('Требуется электронная почта'),
    password: yup
        .string()
        .min(6, 'Пароль должен быть минимум в длину 6 символов')
        .required('Требуется пароль'),
})

export default loginValidationSchema
