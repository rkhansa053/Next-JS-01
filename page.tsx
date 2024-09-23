import Header from "@/components/header";
export default function Home() {
  return (
    <div className="homeContainer">
      <div className="childContainer">
        <br />
        <p>
            Hey,
            <br />
            My name is <span className="redColor">Syeda Khansa Rahman.</span>
            <br />I am GIAIC student.
            <br />I am currently working on my Next JS projects.
        </p>
        <br />
      </div>
      <div className="childContainer"></div>
      <br />
      <div className="imageParent">
      <img src="https://media.istockphoto.com/id/613241758/photo/young-woman-working-on-a-laptop.jpg?s=612x612&w=0&k=20&c=B3WbJ7VFEr77G0T698I0WMkM5LOV-pMrLCljEEJGh-o="/>
      </div>
      </div>
  );
}
