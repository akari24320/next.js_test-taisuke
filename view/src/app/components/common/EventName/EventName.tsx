import React, { useState, useRef } from 'react';
import styles from './EventName.module.css'

type EditableTextProps = {
    initialText: string;
};

const EditableText: React.FC<EditableTextProps> = ({ initialText }) => {
  // 文字の状態を管理するためのステート
const [text, setText] = useState(initialText);
  // 編集モードかどうかを管理するステート
const [isEditing, setIsEditing] = useState(false);
  // input にフォーカスを当てるための参照
const inputRef = useRef<HTMLInputElement>(null);

  // テキストをクリックしたときに編集モードに入る
const handleTextClick = () => {
    setIsEditing(true);
};

  // 編集を確定し、表示モードに戻る
const handleBlur = () => {
    setIsEditing(false);
};

  // Enterキーが押されたら編集を確定する
const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
        setIsEditing(false);
    }
};

  // コンポーネントが編集モードになったとき、inputにフォーカスする
React.useEffect(() => {
    if (isEditing && inputRef.current) {
        inputRef.current.focus();
    }
}, [isEditing]);

return (
    <div className={styles.eventname}>
        {isEditing ? (
        // 編集モード
        <input
        className={styles.text2}
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        />
    ) : (
        // 表示モード
        <span className={styles.text} onClick={handleTextClick}>{text}</span>
        )}
    </div>
  );
};



export default EditableText;