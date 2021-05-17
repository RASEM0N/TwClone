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
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined'
import { useDispatch, useSelector } from 'react-redux'
import { DispatchType } from '../../../../store/store'
import { getFormLoadingStateTweets } from '../../../../store/tweets/tweets-selector'
import { LoadingFormStateEnum } from '../../../../store/types'
import { getUser } from '../../../../store/user/user-selector'
import UploadImages from './UploadImages'
import { TweetRequestDataType } from '../../../../services/api/types'
import { fetchAddTweetAction } from '../../../../store/tweets/tweets-reducer'

export interface ImageObj {
    blobUrl: string
    file: File
}

const TweetTopForm = () => {
    const dispatch = useDispatch<DispatchType>()
    const [text, setText] = useState<string>('')
    const loadingForm = useSelector(getFormLoadingStateTweets)
    const user = useSelector(getUser)
    const [images, setImages] = React.useState<ImageObj[]>([])

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value)
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (text.length > 5) {
            const data: TweetRequestDataType = {
                text: text,
            }
            if (images.length > 0) data.file = images[0].file
            dispatch(fetchAddTweetAction(data))
            setImages([])
            setText('')
        }
    }

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
                    src={user?.avatarUrl}
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
                    disabled={!user?.confirmed}
                    multiline
                    placeholder="Что происходит?"
                    variant="standard"
                    helperText={
                        (text && text.length < 10 && 'Длина не должна быть меньше 10') ||
                        (text.length > 270 && 'Длина текста не должна больше 270') ||
                        (!user?.confirmed && 'Пользователь не потвержден')
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
                    <div
                        style={{
                            display: 'flex',
                        }}
                    >
                        <UploadImages images={images} onChangeImages={setImages} />
                        <IconButton
                            style={{
                                alignSelf: 'flex-start',
                            }}
                        >
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
                                text.length < 10 ||
                                !user?.confirmed
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
