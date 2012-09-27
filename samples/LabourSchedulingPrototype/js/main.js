﻿$(document).ready(function () {
    initScheduler();
});

function initScheduler() {
    scheduler.locale.labels.timeline_tab = "Timeline";
    scheduler.locale.labels.section_custom = "Section";
    scheduler.config.details_on_create = true;
    scheduler.config.details_on_dblclick = true;
    scheduler.config.xml_date = "%Y-%m-%d %H:%i";

    //===============
    //Configuration
    //===============
    var sections = [
                { key: 1, label: "James Smith" },
                { key: 2, label: "John Williams" },
                { key: 3, label: "David Miller" },
                { key: 4, label: "Linda Brown" }
            ];

    scheduler.createTimelineView({
        name: "timeline",
        x_unit: "minute",
        x_date: "%i",
        x_step: 15,
        x_size: 24,
        x_start: 8 * 4,
        x_length: 24 * 60 / 15,
        y_unit: sections,
        y_property: "section_id",
        render: "bar",
        second_scale: {
            x_unit: "hour", // unit which should be used for second scale
            x_date: "%H" // date format which should be used for second scale, "July 01"
        }
    });

    //===============
    //Data loading
    //===============
    scheduler.config.lightbox.sections = [
                { name: "description", height: 130, map_to: "text", type: "textarea", focus: true },
                { name: "custom", height: 23, type: "select", options: sections, map_to: "section_id" },
                { name: "time", height: 72, type: "time", map_to: "auto" }
            ];

    scheduler.init('scheduler_here', new Date(2009, 5, 30), "timeline");
    scheduler.parse([
                { start_date: "2009-06-30 09:00", end_date: "2009-07-01 12:00", text: "Task A-12458", section_id: 1 },
                { start_date: "2009-06-30 10:00", end_date: "2009-06-30 21:00", text: "Task A-89411", section_id: 1 },
                { start_date: "2009-06-30 10:00", end_date: "2009-07-01 14:00", text: "Task A-64168", section_id: 1 },
                { start_date: "2009-06-30 16:00", end_date: "2009-07-02 17:00", text: "Task A-46598", section_id: 1 },

                { start_date: "2009-06-30 12:00", end_date: "2009-07-02 20:00", text: "Task B-48865", section_id: 2 },
                { start_date: "2009-06-30 14:00", end_date: "2009-06-30 18:00", text: "Task B-44864", section_id: 2 },
                { start_date: "2009-06-30 16:30", end_date: "2009-07-01 18:00", text: "Task B-46558", section_id: 2 },
                { start_date: "2009-06-30 18:30", end_date: "2009-07-01 00:00", text: "Task B-45564", section_id: 2 },

                { start_date: "2009-06-30 08:00", end_date: "2009-07-01 12:00", text: "Task C-32421", section_id: 3 },
                { start_date: "2009-07-01 14:30", end_date: "2009-07-02 16:45", text: "Task C-14244", section_id: 3 },

                { start_date: "2009-07-01 09:20", end_date: "2009-07-01 18:20", text: "Task D-52688", section_id: 4 },
                { start_date: "2009-06-30 11:40", end_date: "2009-06-30 21:30", text: "Task D-46588", section_id: 4 },
                { start_date: "2009-07-01 12:00", end_date: "2009-07-02 18:00", text: "Task D-12458", section_id: 4 }
            ], "json");
}
