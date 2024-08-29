import home from "@/public/home.png";
import feedback from "@/public/feedback.png";
import profile from "@/public/profile.png";
import outline from "@/public/outline.png";
import group from "@/public/Group.png";
import chatbot from "@/public/chatbot.png";
import all from "@/public/all.png";
import planning from "@/public/planning.png";
import content from "@/public/cont.png";
import question from "@/public/question.png";
import intellectual from "@/public/intellectual.png";
import student from "@/public/student.png";
import communication from "@/public/communication.png";
import community from "@/public/community.png";
import BipGenerator from "@/components/bipgenerator";
import Rewriter from "@/components/rewriter";
import { Iepgenerator } from "@/components/iepgenerator";
import { Professional } from "@/components/professional";
import Informative from "@/components/informative";
import { Curriculum } from "@/components/curriculum";
import { LessonPlaner } from "@/components/lessonplan";
import Rubic from "@/components/rubic";

export const navItems = [
  { id: 1, name: "Home", img: home, href: "/" },
  { id: 2, name: "Explore", img: outline, href: "/explore" },
  { id: 3, name: "Feedback", img: feedback, href: "/feedback" },
  { id: 4, name: "Profile", img: profile, href: "/profile" },
  { id: 5, name: "Dawn Tools", img: group, href: "/dawnschool" },
  { id: 6, name: "Chatbots", img: chatbot, href: "/chatbot" },
];

export const features = [
  { id: 1, desc: "All", thumbnail: all },
  { id: 2, desc: "Planning", thumbnail: planning },
  { id: 3, desc: "Content", thumbnail: content },
  { id: 4, desc: "Question", thumbnail: question },
  { id: 5, desc: "Intellectual Prep", thumbnail: intellectual },
  { id: 6, desc: "Student Support", thumbnail: student },
  { id: 7, desc: "Communication", thumbnail: communication },
  { id: 8, desc: "Community Tools", thumbnail: community },
];

export const favourite = [
  {
    id: 1,
    title: "  Group Work Generator ",
    desc: "Facilitate Collaborative Learning Experiences By Assigning Group Tasks,  Managing Discussions,And Tracking Contributions. ",
    href: "groupworkgenerator",
  },

  {
    id: 2,
    title: "BIP Generator   ",
    desc: " Develop Behaviour Intervention Plans (BIPs) To Support Students With Behavioral Challenges And Promote Positive Learning Environments.",
    href: "bipgenerator",
  },

  {
    id: 3,
    title: " AI Co-Teacher  ",
    desc: "Collaborate With An AI-Powered Virtual Co-Teacher To Enhance Instructional Delivery, Classroom Management,And Student Support. ",
    href: "coteacher",
  },
];

export const allTools = [
  {
    id: 1,
    title: " Text Rewriter ",
    desc: "Seemlessly Rewrite Texts to Create Unique Content For Lessons, Assignments and Assessments.",
    component: Rewriter,
    href: "rewriter",
  },

  {
    id: 2,
    title: "Curriculum Generator  ",
    desc: "Design Comprehensive and Customized Curriculums Allignee With Educational Standards And Learning Objectives. ",
    component: Curriculum,
    href: "curriculum",
  },

  {
    id: 2,
    title: "Informative Test",
    desc: "Access A Vast Library Of Informative Texts Across Various Subjects To Enrich Lesson Plans And Provide Addional Resources To Students",
    href: "informative",
    component: Informative,
  },

  {
    id: 3,
    title: "Professional Email ",
    desc: "Create And Manage Professional Communication With Students, Parents And Colleagues Directly Within The Platform. ",
    href: "professional",
    component: Professional,
  },

  {
    id: 4,
    title: " IEP Generator  ",
    desc: "Generate Individualized Education Programs (IEPs) Tailored To Students' Specific Needs and Learning Styles. ",
    href: "iepgenerator",
    component: Iepgenerator,
  },

  {
    id: 5,
    title: "Lesson Plan  ",
    desc: " Develop Detailed Lesson Plans With Interactive Elements, Multimedia Integration, And Differentiated Instruction Strategies. ",
    href: "lessonplan",
    component: LessonPlaner,
  },

  {
    id: 6,
    title: " Rubric Generator",
    desc: "Create Clear and Structured Rubrics For Assessing Student Work, Providing Specific Feedback, And Tracking Progress.  ",
    href: "rubic",
    component: Rubic,
  },

  {
    id: 7,
    title: "Academic Content  ",
    desc: " Access Curated Academic Content, Including Articles,Videos And Simulations, To Enhance Teaching Materials And Student Engagement.",
    href: "academic",
    component: "Academic",
  },

  {
    id: 8,
    title: "Student Work & Feedback   ",
    desc: " Collect, Review, And Provide Feedback On Student Assignments, Projects, And Assessments Efficiently.",
    href: "feedback",
    component: "Feedback",
  },

  {
    id: 9,
    title: " Assessment Grader  ",
    desc: "Automatically Grade Assessments, Quizzes, And Assignments Based on Pre-Defined Criteria and Rubrics. ",
    href: "Grader",
    component: "Rewriter",
  },

  {
    id: 10,
    title: " Mathematics Solver ",
    desc: " Assist Students in Solving Complex Math Problems And Equations, Providing Step-By-Step Explanations And Solutions.",
    href: "Mathematics-solver",
    component: "Rewriter",
  },

  {
    id: 11,
    title: " Past Question Request: Facilitate ",
    desc: "Students' Access To Pass Exam Questions And Practice Materials For Better Preparation. ",
    href: "Past-Questions-Request",
    component: "Rewriter",
  },

  {
    id: 12,
    title: " Text And Context Translator  ",
    desc: " Translate Texts into Different Languages And Provide Contextual Understanding To Support Language Learners.",
    href: "/rewriter",
    component: "Rewriter",
  },

  {
    id: 13,
    title: "Article Proofreader   ",
    desc: " Enhance Students' Writing Skills By Offering Grammar, Punctuation, And Style Suggestions In Real Time.",
    href: "/dawnschool/rewriter",
    component: "Rewriter",
  },

  {
    id: 14,
    title: " Vocabulary List Generator ",
    desc: " Create Customized Vocabulary Lists And Quizzes To Improve Students' Language Proficiency.",
    href: "/rewriter",
    component: "Rewriter",
  },

  {
    id: 15,
    title: "Group Work Generator ",
    desc: " Facilitate Collaborative Learning Experiences By Assigning Group Tasks, Managing Discussions, And Tracking Contributions.",
    href: "/dawnschool/groupwork",
    component: "Groupwork",
  },

  {
    id: 16,
    title: " Science Lab  ",
    desc: " Virtualize Laboratory Experiments And Simulations For Hands-On-Learning  Experiences In Science Subjects. ",
    href: "/dawnschool/sciencelab",
    component: "Sciencelab",
  },

  {
    id: 17,
    title: "Syllabus Generator   ",
    desc: "Build Structured Course Syllabi  With Clear Objectives, Learning Outcomes, And Assessments Strategies. ",
    href: "/dawnschool/syllabusgenerator",
    component: "Syllabusgenerator",
  },

  {
    id: 18,
    title: " BIP Generator  ",
    desc: "Develop Behavior Intervention Plans (BIPs) To Support Students With Behavioral Challenges And Promote Positive Learning Environments. ",
    href: "/dawnschool/bipgenerator",
    component: "Bipgenerator",
  },

  {
    id: 19,
    title: " Social Stories. ",
    desc: "Create Social Stories To Help Students With Autism Spectrum Disorder (ASD) Navigate Social Situations And Develop Social Skills. ",
    href: "/dawnschool/socialstories",
    component: "Socialstories",
  },

  {
    id: 20,
    title: "Letter Of Recommendation  ",
    desc: " Generate Personalized Letters Of Recommendation For Students Based On Their Academic Achievements And Qualities.",
    href: "/dawnschool/letter",
    component: "Letter",
  },

  {
    id: 21,
    title: "AI Co-Teacher  ",
    desc: "Collaborate With An AI-Powered Virtual Co-Teacher To Enhance Instructional Delivery, Classroom Management, And Student Support. ",
    href: "/dawnschool/coteacher",
    component: "Coteacher",
  },

  {
    id: 22,
    title: "Digital Literacy Coach  ",
    desc: "Provide Guidance And Resources To Improve Students' Digital Literacy Skills, Including Internet Safety, Research Techniques And Digital Citizenship. ",
    href: "/dawnschool/digitalcoach",
    component: "Digitalcoach",
  },

  {
    id: 1,
    title: "Research Assistance  ",
    desc: " Assist Students In Conducting Research, Organizing Data, And Citing Sources Effectively For Academic Projects.",
    href: "/dawnschool/research",
    component: "Research",
  },
];
