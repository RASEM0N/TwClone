import * as yup from 'yup'

const registerValidationSchema = yup.object({
    email: yup.string().email('Некорректная почта').required('Требуется электронная почта'),
    password: yup
        .string()
        .min(8, 'Пароль должен быть минимум в длину 8 символов')
        .required('Требуется пароль'),
	// ....
})

export default registerValidationSchema
