import React from 'react'
import { Link } from 'react-router-dom'
import TwitterIcon from '@material-ui/icons/Twitter'
import { Button, CssBaseline, TextField, Grid, Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useFormik } from 'formik'
import { RegisterRequestDataType } from '../../services/api/types'
import { DispatchType } from '../../store/store'
import { useDispatch, useSelector } from 'react-redux'
import registerValidationSchema from '../../validations/register-validation'
import { registerUserAction, setUserAuthorizeError } from '../../store/user/user-reducer'
import { LoadingStateEnum } from '../../store/types'
import { getUserAuthorizeError, getUserStatus } from '../../store/user/user-selector'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
    },

    form: {
        position: 'relative',
        width: '100%',
        marginTop: theme.spacing(3),
    },
    twitterIcon: {
        height: 40,
        width: 40,
    },
    text: {
        marginTop: theme.spacing(4),
        fontSize: 31,
    },

    submit: {
        margin: theme.spacing(3, 0, 3),
        height: 48,
    },

    link: {
        color: 'rgb(29, 161, 242)',
    },
    error: {
        bottom: -100,
        right: 0,
        left: 0,
        textAlign: 'center',
        position: 'absolute',
    },
}))

const Register = () => {
    const classes = useStyles()
    const dispatch = useDispatch<DispatchType>()
    const status = useSelector(getUserStatus)
    const error = useSelector(getUserAuthorizeError)

    const formik = useFormik<RegisterRequestDataType>({
        initialValues: {
            email: '',
            username: '',
            password: '',
            fullname: '',
        },
        validationSchema: registerValidationSchema,
        onSubmit: (values) => {
            dispatch(registerUserAction(values))
        },
    })

    return (
        <Container
            component="main"
            maxWidth="xs"
            style={{
                padding: '0 40px',
            }}
        >
            <CssBaseline />
            <div className={classes.paper}>
                <div>
                    <TwitterIcon color="primary" className={classes.twitterIcon} />
                </div>
                <Typography variant="h4" className={classes.text}>
                    <b>Создать учетную запись</b>
                </Typography>
                <form className={classes.form} onSubmit={formik.handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                        label="Имя пользователя"
                        name="email"
                        autoComplete="email"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        error={formik.touched.username && Boolean(formik.errors.username)}
                        helperText={formik.touched.username && formik.errors.username}
                        label="Имя пользователя"
                        name="username"
                        autoComplete="username"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        value={formik.values.fullname}
                        onChange={formik.handleChange}
                        error={formik.touched.fullname && Boolean(formik.errors.fullname)}
                        helperText={formik.touched.fullname && formik.errors.fullname}
                        label="Полное имя пользователя"
                        name="fullname"
                        autoComplete="fullname"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                        label="Пароль"
                        type="password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Зарегистрироваться
                    </Button>
                    {status === LoadingStateEnum.ERROR && error && (
                        <Typography color="error" className={classes.error}>
                            {error}
                        </Typography>
                    )}
                    <Grid container>
                        <Grid item xs>
                            <Link to="/auth/recovery" className={classes.link}>
                                Забыли пароль?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/auth/login" className={classes.link}>
                                Уже зарегистрирован
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    )
}

export default Register
