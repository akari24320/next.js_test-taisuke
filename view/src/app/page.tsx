"use client"

import React from 'react';
import styles from "./page.module.css"

import EventName from "./components/common/EventName/EventName"
import EventRemark from "./components/common/EventRemark/EventRemark"
import TaskEditForm from "./components/common/TaskEditForm"
import ScheduleColumn from './components/common/ScheduleBox/ScheduleColumn/ScheduleColumn';

export default function Home() {
  return (
    <div>
      <EventName initialText="イベント名を入力"/>
      <EventRemark initialText="備考を入力"/>
      <div className={styles.page}>
        <div className={styles.ScheduleColumn}>
          <ScheduleColumn/>
        </div>
        <div className={styles.TaskEditForm}>
          <TaskEditForm/>
        </div>
      </div>
    </div>
  );
}
