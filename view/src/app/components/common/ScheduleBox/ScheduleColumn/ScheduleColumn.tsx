import React, { useState } from 'react';
import TaskBox from '../TaskBox/TaskBox'; // TaskBoxコンポーネントをインポート
import styles from './ScheduleColumn.module.css'; // CSSモジュールをインポート


// 1スロットの高さ (px)
const SLOT_HEIGHT = 40;

// 30分単位での時間スロットの配列
const halfHourSlots = Array.from({ length: 48 }, (_, i) => {
  const hour = Math.floor(i / 2);
  const minutes = i % 2 === 0 ? '00' : '30';
  return `${hour}:${minutes.padStart(2, '0')}`;
});


// 日付の配列を作成（例えば、1週間分のデータ）
const days = ['2023-09-25', '2023-09-26', '2023-09-27', '2023-09-28', '2023-09-29', '2023-09-30', 'fdb'];

const ScheduleColumn = () => {
    const [events, setEvents] = useState([]);
    const [dragging, setDragging] = useState(false);
    const [startSlot, setStartSlot] = useState(null); // ドラッグ開始時のスロット
    const [selectedDay, setSelectedDay] = useState(null); // ドラッグ開始時の選択された日付
  
    // ドラッグ開始時の処理
    const handleMouseDown = (day, slotIndex) => {
      setDragging(true);
      setStartSlot(slotIndex);
      setSelectedDay(day);
    };
  
    // ドラッグ終了時の処理
    const handleMouseUp = (day, slotIndex) => {
      if (dragging && startSlot !== null && selectedDay === day) {
        const newEvent = {
          id: Date.now(), // 一意なIDを付与
          day: day,
          start: Math.min(startSlot, slotIndex),  // ドラッグ範囲の開始スロット
          end: Math.max(startSlot, slotIndex) + 1, // ドラッグ範囲の終了スロット
          title: 'New Task',
          people: 3, // 仮の人数
          time: '2:00' // ここにイベントの開始時間を設定（例として2:00）
        };

        setEvents([...events, newEvent]);
      }
      setDragging(false);
      setStartSlot(null);
      setSelectedDay(null);
    };
  
    // イベントの削除
    const handleDeleteEvent = (eventId) => {
      setEvents(events.filter(event => event.id !== eventId));
    };
  
    return (
      <div className={styles.scheduleColumnContainer}>
        {days.map((day, dayIndex) => (
          <div key={dayIndex} className={styles.scheduleColumnDay}>
            <h3 className={styles.freeform}>{day}</h3>
            <div className={styles.scheduleColumn}>
              {halfHourSlots.map((time, slotIndex) => {
                const event = events.find(
                  (event) => event.day === day && event.start <= slotIndex && event.end > slotIndex
                );
  
                return (
                  <div
                    key={slotIndex}
                    className={`${styles.halfHourSlot} ${event ? styles.halfHourSlotDisabled : ''}`}
                    onMouseDown={() => !event && handleMouseDown(day, slotIndex)}
                    onMouseUp={() => !event && handleMouseUp(day, slotIndex)}
                  >
                    <div className={styles.timeLabel}>{time}</div>
                    {event && slotIndex === event.start && (
                      <TaskBox
                        title={event.title}
                        people={event.people}
                        height={(event.end - event.start) * SLOT_HEIGHT}
                        // 時間に基づいて上にスロット数分移動させる
                        top={(1) - (1)}
                        onDelete={() => handleDeleteEvent(event.id)}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    );
  };
  

export default ScheduleColumn;
