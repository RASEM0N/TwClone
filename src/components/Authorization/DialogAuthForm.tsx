import React from 'react'
import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    FormGroup,
    IconButton,
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

type PropsType = {
    visible: boolean
    handleClose: () => void
    children: React.ReactNode
    title: string
    buttonText: string
}

const DialogAuthForm: React.FC<PropsType> = ({
    visible,
    handleClose,
    children,
    buttonText = 'Войти',
    title,
}) => {

    if (!visible) return null

    return (
        <Dialog open={visible} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">
                <IconButton onClick={handleClose} color="secondary">
                    <CloseIcon
                        style={{
                            fontSize: 26,
                        }}
                    />
                </IconButton>
                {title}
            </DialogTitle>
            <DialogContent>
                <FormGroup aria-label="position" row>
                    {children}
                    <Button
                        style={{
                            margin: '20px 0px 5px',
                        }}
                        onClick={handleClose}
                        color="primary"
                        variant={'contained'}
                        fullWidth={true}
                    >
                        {buttonText}
                    </Button>
                </FormGroup>
            </DialogContent>
        </Dialog>
    )
}

export default DialogAuthForm
