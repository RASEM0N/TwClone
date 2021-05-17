import React from 'react'
import { Link } from 'react-router-dom'
import TwitterIcon from '@material-ui/icons/Twitter'
import { Button, CssBaseline, TextField, Grid, Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useFormik } from 'formik'
import loginValidationSchema from '../../validations/login-validation'
import { LoginRequestDataType } from '../../services/api/types'
import { DispatchType } from '../../store/store'
import { useDispatch } from 'react-redux'
import { fetchUserAction } from '../../store/user/user-reducer'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
    },

    form: {
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
}))

const Login = () => {
    const classes = useStyles()
    const dispatch = useDispatch<DispatchType>()

    const formik = useFormik<LoginRequestDataType>({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: loginValidationSchema,
        onSubmit: (values) => {
            dispatch(fetchUserAction(values))
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
                    <b>Войти в Твиттер</b>
                </Typography>
                <form className={classes.form} onSubmit={formik.handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        error={formik.touched.username && Boolean(formik.errors.username)}
                        helperText={formik.touched.username && formik.errors.username}
                        label="Адресс электронной почты"
                        name="username"
                        autoComplete="email"
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
                    {/*<FormControlLabel*/}
                    {/*    control={<Checkbox value="remember" color="primary" />}*/}
                    {/*    label="Запомнить меня"*/}
                    {/*/>*/}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Войти
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link to="/auth/recovery" className={classes.link}>
                                Забыли пароль?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/auth/register" className={classes.link}>
                                Зарегистрироваться в Твиттере
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    )
}

export default Login
