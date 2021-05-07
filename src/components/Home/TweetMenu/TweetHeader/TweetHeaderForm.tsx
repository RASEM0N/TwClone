import React, { useEffect, useState } from "react";
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import { Button, TextField } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined'
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined'
import DataUsageOutlinedIcon from '@material-ui/icons/DataUsageOutlined'
import ListItem from '@material-ui/core/ListItem'
import { useDispatch, useSelector } from 'react-redux'
import { DispatchType } from '../../../../store/store'
import {
    fetchAddTweetAction,
    getFormLoadingStateTweets,
    LoadingFormStateEnum,
} from '../../../../store/bundles/tweets'

const TweetHeaderForm = () => {
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
    // useEffect(() => {
    //     alert(loadingForm)
    // }, [loadingForm])

    return (
        <ListItem
            style={{
                marginTop: 15,
            }}
        >
            <ListItemAvatar
                style={{
                    alignSelf: 'end',
                }}
            >
                <Avatar
                    style={{
                        width: 50,
                        height: 50,
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
                    variant="outlined"
                    style={{
                        width: '100%',
                    }}
                />
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: 15,
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
                        <div>269</div>
                        <IconButton>
                            <DataUsageOutlinedIcon color="primary" />
                        </IconButton>
                        <Button
                            variant={'contained'}
                            color="primary"
                            type="submit"
                            disabled={loadingForm === LoadingFormStateEnum.LOADING}
                        >
                            Твитнуть
                        </Button>
                    </div>
                </div>
            </form>
        </ListItem>
    )
}

export default TweetHeaderForm
