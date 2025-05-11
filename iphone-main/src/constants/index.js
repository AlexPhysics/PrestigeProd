import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  highlightFourthVideo,
  highlightFifthVideo,
  whiteImg,
  yellowImg,
  exp1Img,
  exp2Img,
  exp3Img,
  logo1Img,
  logo2Img,
  logo3Img,
} from "../utils";

export const navLists = ["Portfolio", "Services", "Contact"];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: ["Aerial Visuals"],
    video: highlightFirstVideo,
    videoDuration: 8.12,
  },
  {
    id: 2,
    textLists: ["Tracking Shots"],
    video: highlightSecondVideo,
    videoDuration: 10.21,
  },
  {
    id: 3,
    textLists: ["Social Media Content"],
    video: highlightThirdVideo,
    videoDuration: 11.01,
  },
  {
    id: 4,
    textLists: ["Interviews"],
    video: highlightFourthVideo,
    videoDuration: 12,
  },
  {
    id: 5,
    textLists: ["Events"],
    video: highlightFifthVideo,
    videoDuration: 20.01,
  },
];

export const models = [
  {
    id: 1,
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "iPhone 15 Pro in Blue Titanium",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "iPhone 15 Pro in White Titanium",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "iPhone 15 Pro in Black Titanium",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];

export const expCards = [
  {
    review: "Prestige Production team is a true professional in the field of media production. Their attention to detail and creativity made our event coverage exceptional. The final product exceeded our expectations.",
    imgPath: "assets/images/exp2.png",
    logoPath: "assets/images/logo2.png",
    title: "Swiss Mining Institute",
    date: "November 2024",
    responsibilities: [
      "2 weeks of pre-production, 3 days of filming, 4 weeks of post-production.",
      "Full media coverage of the event, including interviews, drone shots, camera shots, timelapses and more.",
      "Delivery: 13 interviews, 3 teasers videos, 1 aftermovie, and many short format reels for social media.",
    ],
  },
  {
    review: "Working with Prestige Production team brought creativity and technical expertise to my company, significantly improving our media and marketing coverage. His work has been invaluable in delivering only quality experiences.",
    imgPath: "assets/images/exp1.png",
    logoPath: "assets/images/logo1.png",
    title: "Zurich Penthouse Project",
    date: "April 2025",
    responsibilities: [
      "10M$ Penhouse project in Zurich, Switzerland.",
      "Successfully delivered a high-end media projects including reels, pictures and long format videos.",
      "Drone shots, tracking shots, timelapses and other techniques showcasing the stunning property.",
    ],
  },
  {
    review: "Alex and Dorian are a great team to work with. They are very professional and have a great eye for detail. They were able to capture the essence of our event and create a beautiful video that we will cherish forever.",
    imgPath: "assets/images/exp3.png",
    logoPath: "assets/images/logo3.png",
    title: "Project 3",
    date: "June 2025",
    responsibilities: [
      "Point 1",
      "Point 2",
      "Point 3",
    ],
  },
];