const projects = {
  "NC News BE": {
    subtitle: "Backend",
    technologies: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Jest",
      "Supertest",
      "Netlify",
    ],
    desc: "NC News BE is a full-featured RESTful API designed for managing a news application. Developed using Node.js and Express, this project serves as the backend for a news aggregation platform, allowing users to interact with articles, topics, users, and comments. It demonstrates my backend development skills, including database management, API design, error-handling and testing.",
    gallery: ['/nc-news-be-imgs/endpoints-json.png', '/nc-news-be-imgs/articles-json.png'],
    links: {
      GitHub: "https://github.com/ZviHaffner/be-project-nc-news",
      "Hosted API": "https://be-project-nc-news.onrender.com/api",
    },
  },
  "NC News FE": {
    subtitle: "Web Application",
    technologies: ["React", "Axios", "CSS"],
    desc: "NC News FE is the front-end for a Reddit-style news aggregation, discussion, and content rating web application. Users can browse articles, post comments, and upvote or downvote both articles and comments. The app also allows users to filter articles by topics, and provides sorting options to view by author or the latest articles. The project was developed to deepen the complete my understanding of full-stack development by seamless integrating the front-end on the previously engineered back-end API from scratch.",
    gallery: [
      "/nc-news-fe-imgs/home-page.png",
      "/nc-news-fe-imgs/article-page.png",
      "/nc-news-fe-imgs/comments-section.png",
      "/nc-news-fe-imgs/users-page.png",
    ],
    links: {
      GitHub: "https://github.com/ZviHaffner/nc-news",
      "Hosted Website": "https://nc-news-zh.netlify.app/",
    },
  },
  TripPackGo: {
    subtitle: "Mobile Application",
    technologies: [
      "React Native",
      "Expo",
      "Firebase",
      "Firestore",
      "Axios",
      "TensorFlow",
    ],
    desc: "TripPackGo is a travel packing assistant and itinerary planner designed to simplify trip preparation and enhance the travel experience. The app offers users personalised packing lists and detailed itineraries tailored to their trip details and preferences. The idea for the app emerged from the common travel pain points of forgetting essential items, overpacking, and the challenges of organising trip activities.\n\nKey features include user authentication, create, edit and delete itineraries or packing lists and many others. While a Machine Learning model was trained to automate packing list generation there was difficulty in integrating it, therefore the MVP allows users to manually add items.",
    video: '/6026heroes.mp4',
    links: {
      GitHub: "https://github.com/nicolgh1/Trip-pack-go-FE",
      "Project Description and Demo Video":
        "https://northcoders.com/project-phase/trippackgo",
    },
  },
};

export default projects;
