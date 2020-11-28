import React from 'react';
import { Button, Modal } from 'react-bootstrap';

type Props = {
    show: any;
    onHide: any;
};

export const PostModal: React.FC<Props> = props => {
    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Body>
                <p>ここにファイルをドロップ</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};
