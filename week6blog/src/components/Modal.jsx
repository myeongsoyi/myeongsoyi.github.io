import { useState } from "react";
import Button from "./Button";

function Modal({ showModal, closeModal }) {
    const [name, setName] = useState('');
    const [src, setSrc] = useState('');
    const [content, setContent] = useState('');

    function

    return (
        <div>
            <Button title="X" onClick={closeModal();} />
            <label className="name">이름</label>
            <input id="name" type="text" placeholder="스파클링와인" className="input" />
            <label className="image">이미지</label>
            <input id="image" type="text" placeholder="url" className="input" />
            <label className="content">내용</label>
            <input id="content" type="text" placeholder="파티엔 빠질 수 없죠!" className="input" />
            <Button title="저장" onClick={saveData();} />
        </div>
    );
}