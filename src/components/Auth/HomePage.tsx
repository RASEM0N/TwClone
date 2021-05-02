import React from 'react'
import {
    makeStyles,
    Typography,
    Button,
    TextField,

} from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter'
import SearchIcon from '@material-ui/icons/Search'
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline'
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined'
import DialogAuthForm from '../Authorization/DialogAuthForm'

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: '100vh',
    },

    /* info side */
    infoSide: {
        flex: 0.5,
        backgroundColor: '#71C9F8',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',

        '& > ul': {
            zIndex: 1,
            listStyle: 'none',
            padding: 0,
            margin: 0,
            width: 400,
        },

        '& h5': {
            display: 'flex',
            alignItems: 'center',
            fontSize: 20,
            color: 'white',
            fontWeight: 700,
        },

        '& li': {
            marginBottom: theme.spacing(4),
        },
    },
    infoSideIcon: {
        fontSize: 32,
        marginRight: 20,
    },
    infoIconTwitterBcg: {
        position: 'absolute',
        left: '50%',
        top: '53%',
        transform: 'translate(-50%, -50%)',
        width: '250%',
        height: '250%',
        zIndex: 0,
    },

    /* auth side */
    authSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0.5,
    },
    authIconTwitter: {
        fontSize: 50,
    },
    authSideWrapper: {
        maxWidth: 380,
    },
    authSideTitle: {
        fontWeight: 600,
        fontSize: 32,
        marginBottom: 45,
        marginTop: 20,
    },
}))

const HomePage = () => {
    const classes = useStyles()

    // SignIn
    const [openLogin, setOpenLogin] = React.useState(false)
    const handleOpenLogin = () => {
        setOpenLogin(true)
    }
    const handleCloseLogin = () => {
        setOpenLogin(false)
    }

    // SignUp
    const [openRegister, setOpenRegister] = React.useState(false)
    const handleOpenRegister = () => {
        setOpenRegister(true)
    }
    const handleCloseRegister = () => {
        setOpenRegister(false)
    }


    return (
        <div className={classes.wrapper}>
            <div className={classes.infoSide}>
                <TwitterIcon className={classes.infoIconTwitterBcg} color="primary" />
                <ul>
                    <li>
                        <Typography variant="h5">
                            {' '}
                            <SearchIcon className={classes.infoSideIcon} />
                            Читайте о том, что вам интересно
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="h5">
                            <PeopleOutlineIcon className={classes.infoSideIcon} />
                            Узнайте о, чем говорят в мире{' '}
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="h5">
                            <ModeCommentOutlinedIcon className={classes.infoSideIcon} />
                            Присоединяйтесь к общению
                        </Typography>
                    </li>
                </ul>
            </div>
            <section className={classes.authSide}>
                <div className={classes.authSideWrapper}>
                    <TwitterIcon className={classes.authIconTwitter} color="primary" />
                    <Typography className={classes.authSideTitle} variant="h4">
                        Узнайте, что происходит в мире сейчас
                    </Typography>
                    <Typography>
                        <b>Присоедийтесь к Твиттеру прямо сейчас!</b>
                    </Typography>
                    <Button
                        style={{
                            marginBottom: 20,
                        }}
                        variant="contained"
                        fullWidth
                        color="primary"
                        onClick={handleOpenRegister}
                    >
                        Зарегистрироваться
                    </Button>
                    <Button onClick={handleOpenLogin} variant="outlined" fullWidth color="primary">
                        Войти
                    </Button>

                    {/*Login*/}
                    <DialogAuthForm
                        visible={openLogin}
                        handleClose={handleCloseLogin}
                        title="Авторизация"
                        buttonText="Войти"
                    >
                        <TextField
                            autoFocus
                            margin="dense"
                            id="email"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            label="Адрес электронной почты"
                            type="email"
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            id="password"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            label="Пароль"
                            type="password"
                            fullWidth
                        />
                    </DialogAuthForm>

                    {/*Register*/}
                    <DialogAuthForm
                        visible={openRegister}
                        handleClose={handleCloseRegister}
                        title="Регистрация"
                        buttonText="Зарегистрироваться"
                    >
                        <TextField
                            margin="dense"
                            id="name"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            label="Имя"
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="email"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            label="Адрес электронной почты"
                            type="email"
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            id="password"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            label="Пароль"
                            type="password"
                            fullWidth
                        />
                    </DialogAuthForm>
                </div>
            </section>
        </div>
    )
}

export default HomePage
