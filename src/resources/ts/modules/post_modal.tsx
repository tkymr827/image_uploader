import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

type Props = {
    show: any;
    onHide: any;
};

export const PostModal: React.FC<Props> = props => {
    const [image, setImage] = useState('');

    const showPreview = (e: any) => {
        console.log(e.target.files);
        const preview_img = URL.createObjectURL(e.target.files[0]);
        setImage(preview_img);
    };

    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Body>
                <div className="image_area">
                    {image ? (
                        <img className="preview" src={image} />
                    ) : (
                        <>
                            <input type="file" onChange={showPreview} />
                        </>
                    )}
                </div>
            </Modal.Body>
            <Modal.Footer>
                {image && (
                    <>
                        <Button variant="success">投稿</Button>
                        <Button variant="secondary" onClick={() => setImage('')}>
                            リセット
                        </Button>
                    </>
                )}
                <Button onClick={props.onHide}>閉じる</Button>
            </Modal.Footer>
        </Modal>
    );
};
