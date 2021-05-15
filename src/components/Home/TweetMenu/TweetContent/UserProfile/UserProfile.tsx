import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getUserById, getUserByIdStatus } from '../../../../../store/otherUsers/otherUsers-selector'
import { Avatar, CardHeader, Divider, Paper, Tab, Tabs } from '@material-ui/core'
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined'
import Moment from 'react-moment'
import { DispatchType } from "../../../../../store/store";
import { fetchUserByIdAction } from "../../../../../store/otherUsers/otherUsers-action";

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    media: {
        height: 200,
        position: 'relative',
        marginBottom: 65,
        backgroundColor: 'gray',
    },
})

const UserProfile = () => {
    const history = useHistory()
    const loading = useSelector(getUserByIdStatus)
    const user = useSelector(getUserById)

    const dispatch = useDispatch<DispatchType>()
    React.useEffect(() => {
      const id = history.location.pathname.split('/home/user/')[1]
      dispatch(fetchUserByIdAction(id))
    }, [history.location.pathname])
    const [value, setValue] = React.useState(0)
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue)
    }

    const classes = useStyles()
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={user?.avatarUrl}
                    title="Contemplative Reptile"
                >
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-end',
                            position: 'absolute',
                            left: 15,
                            right: 15,
                            bottom: 0,
                            transform: 'translateY(50%)',
                        }}
                    >
                        <div
                            style={{
                                backgroundColor: 'white',
                                padding: 5,
                                borderRadius: '50%',
                                width: 'auto',
                            }}
                        >
                            <Avatar
                                style={{
                                    width: 130,
                                    height: 130,
                                }}
                                src={user?.avatarUrl}
                            />
                        </div>

                        <Button
                            variant="outlined"
                            color="primary"
                            style={{
                                marginBottom: 20,
                            }}
                        >
                            Изменить профиль
                        </Button>
                    </div>
                </CardMedia>
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        style={{
                            marginBottom: 0,
                        }}
                    >
                        <b>{user?.username}</b>
                    </Typography>
                    <Typography
                        variant="body1"
                        color="textSecondary"
                        style={{
                            marginBottom: 10,
                        }}
                    >
                        @{user?.fullname}
                    </Typography>

                    <Typography
                        variant="body1"
                        color="textSecondary"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: 10,
                        }}
                    >
                        <DateRangeOutlinedIcon />
                        &nbsp;&nbsp;Регестрация:&nbsp;
                        <Moment format=" MMMM YYYY г.">{user?.createdAt}</Moment>
                    </Typography>
                    <Typography
                        variant="body1"
                        color="textSecondary"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <b>3</b>&nbsp;в читаемых &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <b>0</b>&nbsp;читателей
                    </Typography>
                </CardContent>
                <Divider orientation="horizontal" />

                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        <b>О себе</b>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {!!user && (
                            <>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab,
                                accusantium adipisci architecto culpa dolores facere impedit minus,
                                optio quas quasi repudiandae veniam. Amet asperiores fuga harum nemo
                                porro, quo tempora ut voluptatibus. Autem dolorem eos esse, facilis
                                neque veniam!
                            </>
                        )}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Divider orientation="horizontal" />

            <CardActions>
                <Paper
                    style={{
                        flexGrow: 1,
                    }}
                >
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab label="Твиты" />
                        <Tab label="Медиа" />
                        <Tab label="Нравится" />
                    </Tabs>
                </Paper>
            </CardActions>
        </Card>
    )
}

export default UserProfile
