import React, { useState } from 'react';
import styles from "./index.module.css"

const TaskEditForm: React.FC = () => {
  const [formData, setFormData] = useState({
    planning: '',
    overseas: '',
    finance: '',
    generalAffairs: '',
    production: '',
    information: '',
  });
  const taskName = "椅子運び";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className={styles.taskboxform}>
      <div className={styles.tasknamebox}>
      <h2 className={styles.taskname}>{taskName}</h2>
      </div>
      <form>
        <div>
          <label>企画局</label>
          <input
            type="number"
            name="planning"
            value={formData.planning}
            onChange={handleChange}
          />
          人
        </div>
        <div>
          <label>渉外局</label>
          <input
            type="number"
            name="overseas"
            value={formData.overseas}
            onChange={handleChange}
          />
          人
        </div>
        <div>
          <label>財務局</label>
          <input
            type="number"
            name="finance"
            value={formData.finance}
            onChange={handleChange}
          />
          人
        </div>
        <div>
          <label>総務局</label>
          <input
            type="number"
            name="generalAffairs"
            value={formData.generalAffairs}
            onChange={handleChange}
          />
          人
        </div>
        <div>
          <label>制作局</label>
          <input
            type="number"
            name="production"
            value={formData.production}
            onChange={handleChange}
          />
          人
        </div>
        <div>
          <label>情報局</label>
          <input
            type="number"
            name="information"
            value={formData.information}
            onChange={handleChange}
          />
          人
        </div>
        <div>
          <label>合計</label>
          <input
            type="number"
            readOnly /> 人
        </div>
        <div>
          <label>備考</label>
          <textarea name="remarks"></textarea>
        </div>
        <button type="button">タスクBOX削除</button>
        <button type="submit">編集内容確定</button>
      </form>
    </div>
  );
};

export default TaskEditForm;
