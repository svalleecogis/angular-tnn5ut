import { Component } from '@angular/core';
import { SchedulerEvent } from '@progress/kendo-angular-scheduler';
import { sampleData, displayDate } from './events-utc';

@Component({
    selector: 'my-app',
    template: `
        <kendo-scheduler [kendoSchedulerBinding]="events"
                         [selectedDate]="selectedDate"
                         [selectedViewIndex]="1"
                         startTime="07:00"
                         style="height: 600px;">
                         
            <kendo-scheduler-day-view>
            </kendo-scheduler-day-view>

            <kendo-scheduler-week-view>
            </kendo-scheduler-week-view>

            <kendo-scheduler-month-view>
            </kendo-scheduler-month-view>

            <kendo-scheduler-messages
                today="Aujourd'hui"
                allDay="Tous les jours"
                dayViewTitle="Jour"
                weekViewTitle="Semaine"
                monthViewTitle="Mois"
                showWorkDay="Jours de travail"
                showFullDay="Tous"
            >
            </kendo-scheduler-messages>
        </kendo-scheduler>
    `
})
export class AppComponent {
    public selectedDate: Date = displayDate;
    public events: SchedulerEvent[] = sampleData;
}
