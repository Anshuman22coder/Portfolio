import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);  //using the useRef() for letting us use the conatiners ..
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    ,);

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),  //staggering..
          scrollTrigger: { //when to apply , only when I reach near the bottom of the screen ..
            trigger: card,  //whom to trigger
            start: "top bottom-=50",  //when the distance between top and bottom is 50..start ..
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Globe Quest App Interface" />
            </div>
            <div className="text-content">
              <a href="https://globetrottersquest.netlify.app/"><h2>
                Globe Quest , an Interactive E-Learning Web App
              </h2></a>
              <p className="text-white-50 md:text-xl">
                An web app built with MERN stack, at the finals of NASA SPACE APPS HACKATHON, NOIDA.
                I was the Full Stack Developer and co-leader of our team GLOBE TROTTERS.
                
              </p>
            </div>
          </div>
           {/*right part starts here */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project2.png"
                  alt="Library Management Platform"
                />
              </div>
              <a href="https://web-socket-chat-app-rho.vercel.app/"><h2>Chat Application-WebScokets & React.Js</h2></a>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project3.png" alt="Shopkeeper Directory App" />
              </div>
             <a href="https://github.com/Anshuman22coder/REACT_NATIVE_PROJECT"><h2>Shopkeeper's Item Management app-ReactNative and MongoDb</h2></a> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;