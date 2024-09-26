"use client"

import Header from "../components/layouts/Header/Header"
import EventName from "../components/common/EventName/EventName"
import EventRemark from "../components/common/EventRemark/EventRemark"
export default function test() {
return (
    <div>
        <Header/>
        <EventName initialText="イベント名を入力"/>
        <EventRemark initialText="備考を入力"/>
    </div>
);
}
