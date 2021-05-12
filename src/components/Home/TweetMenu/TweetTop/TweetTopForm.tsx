import React, { useEffect, useState } from 'react'
import {
    Button,
    TextField,
    CircularProgress,
    Avatar,
    IconButton,
    ListItemAvatar,
    ListItem,
    Divider,
} from '@material-ui/core'
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined'
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined'
import { useDispatch, useSelector } from 'react-redux'
import { DispatchType } from '../../../../store/store'
import { getFormLoadingStateTweets } from '../../../../store/tweets/tweets-selector'
import { fetchAddTweetAction } from '../../../../store/tweets/tweets-action'
import { LoadingFormStateEnum } from '../../../../store/types'


const TweetTopForm = () => {
    const dispatch = useDispatch<DispatchType>()
    const [text, setText] = useState<string>('')
    const loadingForm = useSelector(getFormLoadingStateTweets)

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value)
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (text.length > 5) {
            dispatch(fetchAddTweetAction(text))
            setText('')
        }
    }
    //   useEffect(() => {
    //       alert(loadingForm)
    // }, [loadingForm])

    return (
        <ListItem
            style={{
                padding: 15,
                borderBottom: '14px solid #f7f9fa',
                minHeight: 152,
            }}
        >
            <ListItemAvatar
                style={{
                    alignSelf: 'end',
                }}
            >
                <Avatar
                    style={{
                        width: 48,
                        height: 48,
                    }}
                    src="https://data.whicdn.com/images/300076584/original.jpg"
                />
            </ListItemAvatar>
            <form
                onSubmit={handleSubmit}
                style={{
                    width: '100%',
                }}
            >
                <TextField
                    id="text"
                    value={text}
                    onChange={handleChange}
                    multiline
                    placeholder="Что происходит?"
                    variant="standard"
                    helperText={
                        (text && text.length < 10 && 'длина меньше 10') ||
                        (text.length > 270 && 'длина текста больше 270')
                    }
                    style={{
                        width: '100%',
                    }}
                />
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: 5,
                    }}
                >
                    <div>
                        <IconButton>
                            <ImageOutlinedIcon color="primary" />
                        </IconButton>
                        <IconButton>
                            <EmojiEmotionsOutlinedIcon color="primary" />
                        </IconButton>
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        {text.length > 9 && (
                            <>
                                <CircularProgress
                                    variant="determinate"
                                    value={text.length > 270 ? 100 : (100 / 270) * text.length}
                                    style={{
                                        width: 30,
                                        height: 30,
                                    }}
                                />
                                <Divider
                                    orientation="vertical"
                                    style={{
                                        margin: '0 15px',
                                        width: 1,
                                        height: '70%',
                                    }}
                                />
                            </>
                        )}

                        <Button
                            variant={'contained'}
                            color="primary"
                            type="submit"
                            disabled={
                                loadingForm === LoadingFormStateEnum.LOADING ||
                                text.length > 270 ||
                                text.length < 10
                            }
                        >
                            Твитнуть
                        </Button>
                    </div>
                </div>
            </form>
        </ListItem>
    )
}

export default TweetTopForm
