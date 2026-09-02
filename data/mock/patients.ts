import { RecentPatient } from "@/types";


export const recentPatients: RecentPatient[] = Array.from(
  { length: 100 },
  (_, index) => {
    const firstNames = [
      "Arjun",
      "Rahul",
      "Priya",
      "Neha",
      "Amit",
      "Sneha",
      "Vivek",
      "Ananya",
      "Rohan",
      "Kiran",
      "Anil",
      "Meera",
      "Vishal",
      "Pooja",
      "Sanjay",
      "Divya",
      "Nikhil",
      "Swati",
      "Aditya",
      "Kavya",
    ];

    const lastNames = [
      "Sharma",
      "Patel",
      "Kumar",
      "Singh",
      "Nair",
      "Menon",
      "Das",
      "Thomas",
      "Verma",
      "Reddy",
    ];

    const bloodGroups: RecentPatient["bloodGroup"][] = [
      "A+ve",
      "A-ve",
      "B+ve",
      "B-ve",
      "O+ve",
      "O-ve",
      "AB+ve",
      "AB-ve",
    ];

    const genders: RecentPatient["gender"][] = [
      "Male",
      "Female",
    ];

    const statuses: RecentPatient["status"][] = [
      "Stable",
      "Follow-up",
      "Critical",
    ];

    const relationships = [
      "friend",
      "father",
      "mother",
      "brother",
      "sister",
      "spouse",
    ];

    const firstName =
      firstNames[Math.floor(Math.random() * firstNames.length)];

    const lastName =
      lastNames[Math.floor(Math.random() * lastNames.length)];

    const name = `${firstName} ${lastName}`;

    const gender =
      genders[Math.floor(Math.random() * genders.length)];

    const age = Math.floor(Math.random() * 63) + 18;

    const dob = new Date();
    dob.setFullYear(dob.getFullYear() - age);
    dob.setMonth(Math.floor(Math.random() * 12));
    dob.setDate(Math.floor(Math.random() * 28) + 1);

    const visitDate = Math.floor(Math.random() * 20) + 1;

    return {
      name,
      initials: `${firstName[0]}${lastName[0]}`,
      id: `PT-${10205 + index}`,
      age,
      gender,
      lastVisit: `Aug ${visitDate}`,
      status:
        statuses[Math.floor(Math.random() * statuses.length)],
      bloodGroup:
        bloodGroups[Math.floor(Math.random() * bloodGroups.length)],
      phone: `9${Math.floor(100000000 + Math.random() * 900000000)}`,
      email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@react.com`,
      address: `House No ${Math.floor(Math.random() * 100) + 1} - East Gate`,
      dob,
      emergencyContactName:
        firstNames[Math.floor(Math.random() * firstNames.length)],
      emergencyContactPhone: `9${Math.floor(
        100000000 + Math.random() * 900000000
      )}`,
      emergencyContactRelationship:
        relationships[
          Math.floor(Math.random() * relationships.length)
        ],
    };
  }
);

/* export const recentPatients: RecentPatient[] = [
  {
    name: "Emily Johnson",
    initials: "EJ",
    id: "PT-10245",
    age: 32,
    gender: "Female",
    lastVisit: "Aug 18",
    status: "Stable",
    bloodGroup : "O+ve",
    phone : "234234234",
    email : "emily@react.com",
    address : "house no 1 - East gate",
    dob :  new Date("06-10-1988"),
    emergencyContactName : "Kiran",
    emergencyContactPhone : "23265787",
    emergencyContactRelationship : "friend"
  },
  {
    name: "Michael Brown",
    initials: "MB",
    id: "PT-10312",
    age: 45,
    gender: "Male",
    lastVisit: "Aug 16",
    status: "Follow-up",
    bloodGroup : "O-ve",
    phone : "234234234",
    email : "brown@react.com",
    address : "house no 1 - East gate",
    dob :  new Date("06-10-1988"),
    emergencyContactName : "Kiran",
    emergencyContactPhone : "23265787",
    emergencyContactRelationship : "friend"
  },
  {
    name: "Olivia Davis",
    initials: "OD",
    id: "PT-10198",
    age: 28,
    gender: "Female",
    lastVisit: "Aug 14",
    status: "Stable",
    bloodGroup : "A+ve",
    phone : "234234234",
    email : "olivia@react.com",
    address : "house no 1 - East gate",
    dob :  new Date("06-10-1988"),
    emergencyContactName : "Kiran",
    emergencyContactPhone : "23265787",
    emergencyContactRelationship : "friend"
  },
  {
    name: "James Wilson",
    initials: "JW",
    id: "PT-10199",
    age: 28,
    gender: "Male",
    lastVisit: "Aug 14",
    status: "Stable",
    bloodGroup : "A+ve",
    phone : "234234234",
    email : "james@react.com",
    address : "house no 1 - East gate",
    dob :  new Date("06-10-1988"),
    emergencyContactName : "Kiran",
    emergencyContactPhone : "23265787",
    emergencyContactRelationship : "friend"
  },
  {
    name: "Kiran",
    initials: "KA",
    id: "PT-10200",
    age: 28,
    gender: "Female",
    lastVisit: "Aug 14",
    status: "Stable",
    bloodGroup : "A+ve",
    phone : "234234234",
    email : "olivia@react.com",
    address : "house no 1 - East gate",
    dob :  new Date("06-10-1988"),
    emergencyContactName : "Kiran",
    emergencyContactPhone : "23265787",
    emergencyContactRelationship : "friend"
  },
  {
    name: "Anil",
    initials: "AK",
    id: "PT-10201",
    age: 28,
    gender: "Male",
    lastVisit: "Aug 14",
    status: "Stable",
    bloodGroup : "A+ve",
    phone : "234234234",
    email : "james@react.com",
    address : "house no 1 - East gate",
    dob :  new Date("06-10-1988"),
    emergencyContactName : "Kiran",
    emergencyContactPhone : "23265787",
    emergencyContactRelationship : "friend"
  },
   {
    name: "Vivek",
    initials: "VK",
    id: "PT-10202",
    age: 28,
    gender: "Female",
    lastVisit: "Aug 14",
    status: "Stable",
    bloodGroup : "A+ve",
    phone : "234234234",
    email : "olivia@react.com",
    address : "house no 1 - East gate",
    dob :  new Date("06-10-1988"),
    emergencyContactName : "Kiran",
    emergencyContactPhone : "23265787",
    emergencyContactRelationship : "friend"
  },
  {
    name: "Suvradeep",
    initials: "SP",
    id: "PT-10203",
    age: 28,
    gender: "Male",
    lastVisit: "Aug 14",
    status: "Stable",
    bloodGroup : "A+ve",
    phone : "234234234",
    email : "james@react.com",
    address : "house no 1 - East gate",
    dob :  new Date("06-10-1988"),
    emergencyContactName : "Kiran",
    emergencyContactPhone : "23265787",
    emergencyContactRelationship : "friend"
  },
  {
    name: "Shubham",
    initials: "SM",
    id: "PT-10204",
    age: 28,
    gender: "Male",
    lastVisit: "Aug 14",
    status: "Stable",
    bloodGroup : "A+ve",
    phone : "234234234",
    email : "james@react.com",
    address : "house no 1 - East gate",
    dob :  new Date("06-10-1988"),
    emergencyContactName : "Kiran",
    emergencyContactPhone : "23265787",
    emergencyContactRelationship : "friend"
  }
    ];

   */
