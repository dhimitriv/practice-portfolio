function Contact() {
  return (
    <div
      name="contact"
      className="flex justify-center items-center p-4 w-full h-screen bg-[#064d50] pl-10"
    >
      <form action="" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl text-gray-300 font-semibold border-b-2 inline border-blue-500">
            Contact me
          </p>
          <p className="text-gray-300 py-4">
            Contact me on my email - dhimitraqvincani@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          placeholder="Message"
          name="message"
          rows="10"
        ></textarea>
        <button className="text-white border-2 hover:bg-blue-600 hover:border-blue-600 px-4 py-3 my-8 mx-auto flex items-center ">
          Contact:
        </button>
      </form>
    </div>
  );
}

export default Contact;
