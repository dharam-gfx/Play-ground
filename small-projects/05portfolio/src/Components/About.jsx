
import { useLoaderData, useParams } from "react-router-dom";
import AboutImg from "../assets/about-img.png";
const About = () => {
  const aboutinfo = useLoaderData();
  const params = useParams();
  console.log(params);

  console.log(aboutinfo);
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me 
          </h2>

          <p className="pb-5">
            Hi, My Name Is Dharmendra Kumar everyone calls me Dharam. I am a
            Frontend Developer. I build beautiful websites with React and
            Tailwind CSS.
          </p>
          <p className="pb-5">
            I am proficient in Frontend skills like React.js, Redux, Redux Tool
            Kit, Axios, Tailwind CSS, SaSS, Css3 and many more.
          </p>

          <p>In backend I know Node.js, Express.js, MongoDB, and Mongoose</p>

          <p>
            In my spare time I create YouTube videos and write blogs on my Blog.
            Where I talk about programming theory and build various projects.
          </p>
        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
      <div>
      <div className="about-img  flex place-items-center gap-5 mt-5">
          <img
            src={aboutinfo.avatar_url}
            alt="coding illustration"
            className="w-20"
          />
          <h2 className="px-10 bg-blue-700 py-5 rounded">Followers : {aboutinfo.followers} </h2>
        </div>
      </div>
    </section>
  );
};

export default About;

export const AboutInfo = async ({params})=>{
    const data = await fetch(`https://api.github.com/users/${params.userId}`);
  return data.json();
}