import React from 'react'
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined'
import { Icon, IconButton } from '@material-ui/core'
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle'
import { ImageObj } from './TweetTopForm'

interface PropTypes {
    onChangeImages: (callback: (prev: ImageObj[]) => ImageObj[]) => void
    images: ImageObj[]
}

const UploadImages: React.FC<PropTypes> = ({ onChangeImages, images }) => {
    const inputRef = React.useRef<any>()

    const handleClick = () => {
        if (inputRef.current) inputRef.current?.click()
    }

    const removeImage = (url: string) => {
        onChangeImages((prev) => prev.filter((obj) => obj.blobUrl !== url))
    }

    const handleChange = (e: any) => {
        const target = e.target
        const file = target.files[0]

        if (file) {
            const fileUrlObj = new Blob([file])
            onChangeImages((prev) => [
                ...prev,
                {
                    blobUrl: URL.createObjectURL(fileUrlObj),
                    file: file,
                },
            ])
        }
    }

    React.useEffect(() => {
        if (inputRef.current) {
            inputRef.current?.addEventListener('change', handleChange)
        }
        return () => {
            if (inputRef.current) inputRef.current?.removeEventListener('change', handleChange)
        }
    }, [])

    return (
        <div
            style={{
                // display: 'flex',
                alignItems: 'center',
            }}
        >
            <IconButton onClick={handleClick}>
                <ImageOutlinedIcon color="primary" />
            </IconButton>
            <input ref={inputRef} type="file" hidden id="upload-input" />
            <div
                style={{
                    display: 'flex',
                }}
            >
                {images &&
                    images.map((obj) => (
                        <div
                            style={{
                                width: 35,
                                height: 35,
                                marginRight: 12,
                                position: 'relative',
                            }}
                        >
                            <img
                                src={obj.blobUrl}
                                alt={'Photo'}
                                style={{
                                    objectFit: 'cover',

                                    width: '100%',
                                    height: '100%',
                                }}
                            />
                            <IconButton
                                onClick={() => {
                                    removeImage(obj.blobUrl)
                                }}
                                style={{
                                    position: 'absolute',
                                    width: 15,
                                    height: 15,
                                    top: -7,
                                    right: -10,
                                }}
                            >
                                <RemoveCircleIcon
                                    color="primary"
                                    style={{
                                        width: '17px',
                                        height: '17px',
                                    }}
                                />
                            </IconButton>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default UploadImages
