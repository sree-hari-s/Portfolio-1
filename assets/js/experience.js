AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Associate Automation Engineer",
    cardImage: "assets/images/experience-page/fournxt_logo.jpeg",
    place: "Fournxt",
    time: "(Feb 2024 - Present)",
    desp: "<li>Designing and providing Automation solutions for clients in their business processes using RPA tools like Automation Anywhere and Blueprism.</li>",
  },
  {
    title: "Backend Developer(SQL)",
    cardImage: "assets/images/experience-page/TL.jpeg",
    place: "TL Technologies",
    time: "(Apr 2023 - Aug 2023)",
    desp: "<li>As a SQL Developer, I designed ER diagrams, developed efficient table schemas, and optimized stored procedures. I also skillfully hosted Node.js, .NET, and React applications using IIS, ensuring seamless integration between front-end and back-end systems</li>",
  },
  {
    title: "Data Science Intern",
    cardImage: "assets/images/experience-page/logo.jpg",
    place: "Brototype",
    time: "(Oct 2022 - Apr 2023)",
    desp: "<li>Worked on a project to create a fully functioning E-commerce Website using Python Django</li>",
  },
  {
    title: "Business Development Trainee",
    cardImage: "assets/images/experience-page/byjus-logo.png",
    place: "Byjus",
    time: "(Mar 2022 - May 2022)",
    desp: "<li>Mentoring and guiding students.</li><li>Good interpersonal and presentation skills.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

