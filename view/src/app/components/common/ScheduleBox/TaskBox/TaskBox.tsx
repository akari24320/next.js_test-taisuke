import React from 'react';
import styles from './TaskBox.module.css';

interface TaskBoxProps {
  title: string;
  people: number;
  height: number; // 高さを受け取る
  top: number; // スロットの位置に基づくtop位置を受け取る
  onDelete: () => void;
}

const TaskBox: React.FC<TaskBoxProps> = ({ title, people, height, top, onDelete }) => {
  return (
    <div className={styles.taskBox} style={{ height: `${height}px`, top: `${top}px`, zIndex: 10 }}> {/* 高さと位置を適用 */}
      <div>
        <strong>{title}</strong> <br />
        <span>人数: {people}</span>
      </div>
      <button className={styles.deleteBtn} onClick={onDelete}>
        削除
      </button>
    </div>
  );
};

export default TaskBox;
