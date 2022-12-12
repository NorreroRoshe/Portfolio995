import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import Gevorro from '../../Assets/Projects/leaf.png';
import calc from '../../Assets/Projects/emotion.png';
import blanchard from '../../Assets/Projects/codeEditor.png';
import ReactPizza from '../../Assets/Projects/chatify.png';
import evkl from '../../Assets/Projects/suicide.png';
import Protfolio from '../../Assets/Projects/blog.png';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: 'white' }}>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ReactPizza}
              isBlog={false}
              title="React Pizza"
              description="
              This pizza ordering site is a SPA-pplication that I developed for my portfolio. I used the following stack in this project 📝 Full stack:
              - ReactJS 
              - TypeScript.
              - Redux Toolkit (data storage / pizza)
              - React Router v6 (navigation)
              - Axios + Fetch (sending request to the backend)
              - React Hooks (hooks)
              - CSS-Modules / SCSS (styling)
              - React Content Loader (skeleton)
              - React Pagination (pagination)
              - Lodash.Debounce
              - Code Splitting, React Loadable, useWhyDidYouUpdate"
              ghLink="https://github.com/NorreroRoshe/ReactPizza"
              demoLink="https://norreroroshe.github.io/ReactPizza/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Protfolio}
              isBlog={false}
              title="React Protfolio"
              description="My self coded personal website build with React.js. I created my portfolio card (React portfolio) for my employers, clients, colleagues and others could see the information about me and my career in programming! The project was created entirely on React.js"
              ghLink="https://github.com/NorreroRoshe/Portfolio995"
              demoLink="https://NorreroRoshe.github.io/Portfolio995"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blanchard}
              isBlog={false}
              title="Blanchard"
              description="The site was made from scratch. On this site made a slider written in CSS.
              Custom select, slider with popups. Custom tooltips. Custom scroll. Yandex API (maps).
              wired and configured
              Form for sending emails.
              Stack: HTML/CSS , JavaScript , Git. Used BEM methodology and Gulp builder.
              Also used third-party libraries and plugins: PHPMailer, Just-validate, Jquery, Swiper,
              Tippy, Simplebar, Choices.
              Training project!"
              ghLink="https://github.com/NorreroRoshe/Blanch_Art_Gallery"
              demoLink="https://norreroroshe.github.io/Blanch_Art_Gallery/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Gevorro}
              isBlog={false}
              title="Gevorro.pro"
              description="The site was created for the presentation of shampoos. I also participated in the design and copywriting.
              The site was created from scratch and I used HTML, SCSS, Bootstrap, JavaScript and other third-party libraries to develop this site. You can see the full site at: http://Gevorro.pro"
              ghLink="https://github.com/NorreroRoshe/Gevorro"
              demoLink="https://norreroroshe.github.io/Gevorro/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={evkl}
              isBlog={false}
              title="Evklid"
              description="This project was created by me for my portfolios, and it is a learning project, as I created it during my training at Skillbox online school
              Stack: HTML, SCSS, JavaScript. Used the BEM methodology as well as the Gulp builder."
              ghLink="https://github.com/NorreroRoshe/Evkl"
              demoLink="https://norreroroshe.github.io/Evkl/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calc}
              isBlog={false}
              title="Calculator"
              description="Calculator created entirely in pure JavaScript, and having a minimum number of bugs. Design came up with myself, made similar to the calculator Iphone"
              ghLink="https://github.com/NorreroRoshe/Calculator"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
