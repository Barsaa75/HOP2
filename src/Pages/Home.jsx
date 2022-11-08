import Content from "./Content";
import "bootstrap/dist/css/bootstrap.min.css";
import Hub from "../Components/YourHub";
import Task from "../Components/Task";
import What from "../Components/What";
import Schedule from "../Components/Schedule";

const Home = () => {
  return (
    <div className='box'>
      <div className='url'>
        <Content
          title='Instant collaborations for remote teams'
          text='All in one for your remote team chats, collaboration and track projects'
          button='Get early access'
          placeholder='Email'
          type='email'
        />
      </div>
      <Hub />
      <Task />
      <Schedule />
      <What />
    </div>
  );
};

export default Home;
