// Sidebar Data

const profile = {
  name: "Victor Aremu",
  profession: "Android Developer",
  location: "UK",
  bio: "Android developer with 8+ years of experience in building high performance apps. Skilled in Java, Kotlin, AndroidX and Firebase.",
};

const about = {
  text: "I'm a dedicated Android developer with a passion for building innovative, user-focused solutions using the latest technologies. I thrive on learning new tools and frameworks, and bring a hard-working, detail-oriented approach to every project I tackle.",
  url: "https://victoraremu.com",
  url_short: "victoraremu.com",
  email: "hi@victoraremu.com",
};

const skills = [
  "Kotlin",
  "Java",
  "AndroidX",
  "Jetpack Compose",
  "Material Design",
  "Room",
];

const details = [
  { label: "Location", value: "Newport, UK" },
  { label: "Experience", value: ">8 years" },
  { label: "Availability", value: "In 2 month" },
  { label: "Relocation", value: "No" },
];

// Navigation

const navigation = [
  { name: "Resume", href: "./" },
  { name: "Projects", href: "./projects.html" },
];

/**
 * Resume Page
 */

// Experience Data

const jobsList = [
  {
    icon: "./assets/images/bronze-small.jpg",
    role: "Full-time Software Engineer",
    company: "Bronze Software Labs",
    location: "Telford, UK",
    period: "May 2021 - Present",
    type: "Lead Developer",
    description: `<p>Lead developer on the Android version of the Tribe Project. Worked with a team of engineers to deliver a high performance Android app.</p>
    <br />
      <p>Also developed and launched the My Telford Android app for Telfod & Wrekin Council that streamlines local issue reporting through intuitive design, secure authentication, and robust data handling, driving efficient community engagement.</p>
      `,
  },
  {
    icon: "./assets/images/amazon.jpg",
    role: "[[Another company]]",
    company: "[[company]]",
    location: "[[area]]",
    period: "Feb 2018 - Jun 2020",
    type: "Full-time",
    description: "[[Insert description here]]",
  },
];

// Education

const educationList = [
  {
    icon: "./assets/images/stanford.jpg",
    degree: "Master of Science in Computer Science",
    university: "[[University]]",
    location: "[[Area]]]",
    period: "2018 - 2020",
    description: "[[Description]]",
  },
];

/**
 * Projects Page
 */

// Projects
const projectsList = [
  {
    icon: "./assets/images/tribe-small.jpg",
    name: "Tribe Project",
    category: "Android App",
    role: "Lead Developer",
    date: "May 2021 - Present",
    description: `
    <p>Tribe is a powerful and user-friendly app designed to connect volunteers and support providers with those in need, fostering a strong sense of community. Whether you’re offering your skills or seeking assistance, Tribe makes it easy to find, connect, and manage support with just a few taps.</p>
      <br />
      <p>Developing Tribe allowed me to combine my expertise in
                    Kotlin and GraphQL with a mission-driven project that brings
                    real value to communities. By leveraging cutting-edge
                    technology, Tribe provides a seamless and empowering
                    experience for users looking to give or receive support.</p>      
    `,
    website: "tribe.html",
  },
  {
    icon: "./assets/images/my-telford.png",
    name: "My Telford",
    category: "Local Government",
    role: "Lead Developer",
    date: "Dec 2022",
    description: `
       <p>A fast and simple way for local residents to report problems and help keep Telford clean, green, and safe. Whether it’s a pothole, litter, or any other issue, you can get in touch with the right people in just a few taps—no waiting on the phone or waiting for offices to open.</p>
       <br />
       <p>
       Developing My Telford App allowed me to tackle real-world challenges in community reporting and municipal management. By leveraging the above technologies, I was able to deliver an easy-to-use and reliable tool that encourages civic engagement and streamlines problem resolution.
       </p>
       `,
    website: "my-telford.html",
  },
];

/**
 * Projects Page
 */

// Posts

const posts = [
  {
    date: "February 22, 2024",
    title: "Building an Online Presence as a Full Stack Developer",
    excerpt:
      "Explore the importance of establishing a strong online presence for full stack developers. Learn how to create a compelling portfolio, engage with the developer community, and leverage social media to boost your career.",
  },
  {
    date: "February 15, 2024",
    title: "Navigating the Full Stack Developer Job Interview Maze",
    excerpt:
      "Prepare for success in your full stack developer job interviews. Uncover common interview questions, tips for showcasing your problem-solving skills, and strategies for handling technical assessments.",
  },
  {
    date: "February 8, 2024",
    title: "Mastering the Art of Full Stack Developer Cover Letters",
    excerpt:
      "Explore the art of writing compelling cover letters for full stack developer positions. Learn how to tailor your cover letter to showcase your technical prowess and demonstrate your passion for coding.",
  },
  {
    date: "February 1, 2024",
    title: "Crafting a Comprehensive Full Stack Developer Resume",
    excerpt:
      "Learn the essential elements to include in your full stack developer resume for a stand-out application. Nail down the perfect balance between showcasing skills and work experience.",
  },
];
