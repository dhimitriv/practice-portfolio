function AboutMe() {
  return (
    <div
      name="aboutme"
      className="w-full h-screen pl-7 bg-[rgb(6,77,80)] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 ">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-semibold border-b-2 inline border-blue-500">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 px-4 gap-8 ">
          <div className="sm:text-right text-3xl font-bold">
            <p>Hello! You are invited to see my webpage and my projects.</p>
          </div>
          <div>
            <p>
              Here is my website where you can check my projects, my skills in
              programming. If you liked my works, we can collaborate together.
              Here are all my contacts. Thank you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
