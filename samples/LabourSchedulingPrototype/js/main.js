$(document).ready(function () {
    initScheduler();
});

function initScheduler() {
    scheduler.locale.labels.timeline_tab = "Timeline";
    scheduler.locale.labels.section_custom = "Section";
    scheduler.config.details_on_create = false;
    scheduler.config.details_on_dblclick = true;
    scheduler.config.event_duration = 60;
    scheduler.config.xml_date = "%Y-%m-%d %H:%i";
    scheduler.templates.timeline_scaley_class = function (section_id, section_label, section_options) {
        return "sdfsdf";
    };
 

    //===============
    //Configuration
    //===============
    var sections = [
                { key: 1, label: "James Smith" },
                { key: 2, label: "John Williams" },
                { key: 3, label: "David Miller" },
                { key: 4, label: "Linda Brown" },
                { key: 5, label: "Linda Brown" },
                { key: 6, label: "Linda Brown" },
                { key: 7, label: "Linda Brown" },
                { key: 8, label: "Linda Brown" },
                { key: 9, label: "Linda Brown" },
                { key: 10, label: "Linda Brown" }
            ];

    scheduler.createTimelineView({
        name: "timeline",
        x_unit: "minute",
        x_date: "%i",
        x_step: 15,
        x_size: 96,
        x_start: 8 * 4,
        x_length: 48,
        y_unit: sections,
        y_property: "section_id",
        render: "bar",
        second_scale: {
            x_unit: "hour", // unit which should be used for second scale
            x_date: "%H" // date format which should be used for second scale, "July 01"
        },
        section_autoheight: false,
        dy: 24
    });

    //===============
    //Data loading
    //===============
    scheduler.config.lightbox.sections = [
                { name: "description", height: 130, map_to: "text", type: "textarea", focus: true },
                { name: "custom", height: 23, type: "select", options: sections, map_to: "section_id" },
                { name: "time", height: 72, type: "time", map_to: "auto" }
            ];

    scheduler.init('scheduler_here', new Date(), "timeline");
    scheduler.parse([
                
            ], "json");
}
