window.QazTU_DASHBOARD = {
  metrics: [
    { label: "Total Students", value: "12,480", delta: "+8.2%", deltaType: "positive", icon: "graduation-cap", iconClass: "icon-circle--green" },
    { label: "Total Teachers", value: "784", delta: "+3.1%", deltaType: "positive", icon: "book-open", iconClass: "icon-circle--purple" },
    { label: "Total Faculties", value: "18", delta: "0%", deltaType: "neutral", icon: "building", iconClass: "icon-circle--sky" },
    { label: "Total Subjects", value: "1,230", delta: "+12%", deltaType: "positive", icon: "layers", iconClass: "icon-circle--orange" },
    { label: "Total Users", value: "14,096", delta: "+5.4%", deltaType: "positive", icon: "users", iconClass: "icon-circle--blue" },
  ],
  performance: {
    labels: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"],
    gpa: [72, 78, 81, 85, 88, 90, 92, 94],
    passRate: [68, 74, 76, 80, 83, 86, 89, 91],
  },
  facultyDistribution: [
    { label: "Engineering", value: 32, color: "#1e40af" },
    { label: "Economics", value: 24, color: "#22c55e" },
    { label: "IT & CS", value: 22, color: "#a855f7" },
    { label: "Medicine", value: 14, color: "#38bdf8" },
    { label: "Law", value: 8, color: "#f97316" },
  ],
  announcements: [
    { title: "Spring semester registration opens", meta: "Academic · Mar 12, 2025", iconClass: "icon-circle--yellow" },
    { title: "Campus maintenance — Building A", meta: "Facilities · Mar 11, 2025", iconClass: "icon-circle--sky" },
    { title: "International conference call for papers", meta: "Research · Mar 10, 2025", iconClass: "icon-circle--purple" },
    { title: "Updated exam schedule published", meta: "Exams · Mar 9, 2025", iconClass: "icon-circle--green" },
  ],
  activity: [
    { initials: "AS", text: "<strong>Alibek Seitkali</strong> submitted assignment for Database Systems", time: "2 min ago" },
    { initials: "GB", text: "<strong>Gulnara Bekturova</strong> approved leave request #2841", time: "15 min ago" },
    { initials: "DM", text: "<strong>Daniyar Mukanov</strong> updated course materials for CS301", time: "1 hr ago" },
    { initials: "AK", text: "<strong>Aigerim Kassymova</strong> registered 24 new students", time: "2 hrs ago" },
  ],
  quickActions: [
    { label: "Add Student", href: "students.html", iconClass: "icon-circle--blue" },
    { label: "Add Teacher", href: "teachers.html", iconClass: "icon-circle--green" },
    { label: "New Course", href: "subjects.html", iconClass: "icon-circle--purple" },
    { label: "Post Announcement", href: "announcements.html", iconClass: "icon-circle--yellow" },
    { label: "Generate Report", href: "reports.html", iconClass: "icon-circle--sky" },
    { label: "System Settings", href: "settings.html", iconClass: "icon-circle--orange" },
  ],
};
