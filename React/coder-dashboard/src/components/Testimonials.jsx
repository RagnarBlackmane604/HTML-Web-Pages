const Testimonials = () => (
    <section>
      <h2 className="text-center text-2xl font-bold text-purple-600 mb-6">Testimonials</h2>
      <div className="testimonials bg-white flex flex-col justify-center p-4 mx-8 items-center md:max-w-xl md:mx-auto rounded" id="testimonial-box">
        <div id="user-text" className="mb-4 text-center">
          <p className="text-lg">This guy is an amazing frontend developer that delivered the task exactly how we need it...</p>
        </div>
        <img id="user-photo" src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="rounded-full mb-4 mx-auto" />
        <h4 className="font-bold">June Cha</h4>
        <p className="text-sm text-gray-600">Software Engineer</p>
      </div>
    </section>
  );
  
  export default Testimonials;
  