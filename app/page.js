export default function PremiumENTHomepage() {
  return (
    <div className="min-h-screen bg-[#F4F8FC] text-[#0B2341] font-sans">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-[#DCE6F2]">
        <div className="max-w-7xl mx-auto px-8 h-[88px] flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#0D5EAF] flex items-center justify-center text-white font-bold text-lg">
              ENT
            </div>

            <div>
              <h1 className="text-[20px] font-bold leading-none">
                Dr. Ramesh Kumar Chippada
              </h1>
              <p className="text-[13px] text-[#6B7A90] mt-1">
                E.N.T Surgeon
              </p>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-10 text-[15px] font-medium">
            <a href="#" className="hover:text-[#0D5EAF] transition">
              Home
            </a>
            <a href="#" className="hover:text-[#0D5EAF] transition">
              About
            </a>
            <a href="#" className="hover:text-[#0D5EAF] transition">
              Expertise
            </a>
            <a href="#" className="hover:text-[#0D5EAF] transition">
              Experience
            </a>
            <a href="#" className="hover:text-[#0D5EAF] transition">
              Contact
            </a>
          </div>

          <button className="bg-[#0D5EAF] text-white h-14 px-7 rounded-2xl text-[15px] font-semibold shadow-lg shadow-blue-200 hover:scale-105 transition">
            Book Consultation
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-8 pt-28 pb-24 grid lg:grid-cols-2 gap-20 items-center">
        {/* LEFT */}
        <div>
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 text-[#0D5EAF] text-sm font-semibold mb-8">
            <div className="w-2 h-2 rounded-full bg-[#0D5EAF]" />
            E.N.T SPECIALIST
          </div>

          <h1 className="text-[72px] leading-[82px] font-bold tracking-[-2px] max-w-[620px]">
            PRECISION IN SURGICAL EXCELLENCE
          </h1>

          <p className="mt-8 text-[18px] leading-[32px] text-[#6B7A90] max-w-[560px]">
            Delivering advanced ENT care through precision surgery,
            evidence-based treatment, and compassionate patient care
            supported by modern medical technology.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">
            <button className="bg-[#0D5EAF] text-white h-14 px-8 rounded-2xl font-semibold shadow-lg shadow-blue-200 hover:scale-105 transition">
              Schedule Consultation
            </button>

            <button className="border border-[#DCE6F2] bg-white h-14 px-8 rounded-2xl font-semibold hover:bg-[#0D5EAF] hover:text-white transition">
              View Services
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              "Advanced Technology",
              "Evidence Based Treatment",
              "Compassionate Care",
              "Patient First Approach",
            ].map((item) => (
              <div key={item}>
                <div className="w-12 h-12 rounded-2xl bg-white shadow-md mb-4" />
                <p className="text-sm font-medium text-[#0B2341] leading-6">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0D5EAF] to-blue-400 rounded-[48px] rotate-3"></div>

          <div className="relative overflow-hidden rounded-[48px] bg-[#0D5EAF] shadow-2xl">
            <img
              src="/images/doctor.png"
              alt="Doctor"
              className="w-full h-[760px] object-cover"
            />
          </div>

          <div className="absolute bottom-8 right-8 bg-white rounded-3xl shadow-xl p-6 w-[220px]">
            <h3 className="text-[42px] font-bold text-[#0D5EAF] leading-none">
              15+
            </h3>
            <p className="text-[#6B7A90] mt-2 font-medium">
              Years of Experience
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-8 pb-24">
        <div className="bg-white rounded-[32px] p-10 shadow-xl shadow-blue-100 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            ["15+", "Years Experience"],
            ["5000+", "Happy Patients"],
            ["40+", "Advanced Procedures"],
            ["2", "Clinic Locations"],
          ].map(([number, label]) => (
            <div key={label} className="text-center lg:text-left">
              <h2 className="text-[42px] font-bold text-[#0D5EAF]">
                {number}
              </h2>
              <p className="mt-2 text-[#6B7A90] font-medium">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="max-w-7xl mx-auto px-8 pb-24">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="text-sm font-semibold tracking-[1px] text-[#0D5EAF] uppercase mb-4">
              Surgical Expertise
            </p>

            <h2 className="text-[52px] leading-[60px] font-bold max-w-[700px]">
              Precision. Technology. Better Outcomes.
            </h2>
          </div>

          <button className="hidden md:block border border-[#DCE6F2] bg-white h-14 px-8 rounded-2xl font-semibold hover:bg-[#0D5EAF] hover:text-white transition">
            View All Procedures
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            "/images/surgery1.png",
            "/images/surgery2.png",
            "/images/surgery3.png",
            "/images/surgery4.png",
            "/images/surgery5.png",
          ].map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[24px] group shadow-lg"
            >
              <img
                src={img}
                alt="Procedure"
                className="h-[320px] w-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* INFO CARDS */}
      <section className="max-w-7xl mx-auto px-8 pb-24 grid lg:grid-cols-3 gap-8">
        {[
          {
            title: "Academic Foundation",
            items: [
              "Andhra Medical College, Visakhapatnam",
              "Osmania University, Hyderabad",
            ],
          },
          {
            title: "Clinical Practices",
            items: [
              "Sri Venkateswara Super Speciality E.N.T Care",
              "Sri Venkateswara Polyclinic",
            ],
          },
          {
            title: "Professional Experience",
            items: [
              "Government E.N.T Hospital, Visakhapatnam",
              "Maharaja Government General Hospital",
            ],
          },
        ].map((card) => (
          <div
            key={card.title}
            className="bg-white/70 backdrop-blur-xl border border-[#DCE6F2] rounded-[32px] p-10 shadow-lg hover:-translate-y-2 transition duration-300"
          >
            <h3 className="text-[30px] font-bold mb-10">{card.title}</h3>

            <div className="space-y-8">
              {card.items.map((item) => (
                <div key={item} className="flex gap-5">
                  <div className="w-4 h-4 rounded-full bg-[#0D5EAF] mt-2" />

                  <div>
                    <h4 className="text-[20px] font-semibold leading-8">
                      {item}
                    </h4>

                    <p className="text-[#6B7A90] mt-2 leading-7">
                      Dedicated to delivering advanced patient-centered
                      medical care and surgical excellence.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* CONTACT */}
      <section className="max-w-7xl mx-auto px-8 pb-28">
        <div className="bg-white rounded-[40px] p-12 lg:p-16 grid lg:grid-cols-2 gap-20 shadow-2xl shadow-blue-100">
          <div>
            <p className="text-sm font-semibold tracking-[1px] text-[#0D5EAF] uppercase mb-4">
              Get In Touch
            </p>

            <h2 className="text-[54px] leading-[62px] font-bold max-w-[500px]">
              Inquiries & Clinical Consultations
            </h2>

            <div className="space-y-10 mt-14">
              <div>
                <h3 className="text-[26px] font-semibold mb-3">
                  Main Consultation Centre
                </h3>

                <p className="text-[#6B7A90] text-[17px] leading-8">
                  Sri Venkateswara Super Speciality E.N.T Care,
                  Visakhapatnam, Andhra Pradesh.
                </p>
              </div>

              <div>
                <h3 className="text-[26px] font-semibold mb-3">
                  Direct Contact Line
                </h3>

                <p className="text-[#6B7A90] text-[17px] leading-8">
                  +91 84998 88518
                </p>
              </div>

              <div>
                <h3 className="text-[26px] font-semibold mb-3">
                  Digital Communication
                </h3>

                <p className="text-[#6B7A90] text-[17px] leading-8">
                  Email: doctor@example.com
                  <br />
                  Instagram: @entsurgeon
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#F8FBFF] border border-[#DCE6F2] rounded-[32px] p-10">
            <h3 className="text-[34px] font-bold mb-10">
              Book an Appointment
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                placeholder="First Name"
                className="h-14 rounded-2xl border border-[#DCE6F2] px-5 outline-none"
              />

              <input
                placeholder="Last Name"
                className="h-14 rounded-2xl border border-[#DCE6F2] px-5 outline-none"
              />

              <input
                placeholder="Email Address"
                className="h-14 rounded-2xl border border-[#DCE6F2] px-5 outline-none"
              />

              <input
                placeholder="Phone Number"
                className="h-14 rounded-2xl border border-[#DCE6F2] px-5 outline-none"
              />
            </div>

            <textarea
              placeholder="Please describe your concern..."
              className="w-full mt-6 rounded-2xl border border-[#DCE6F2] px-5 py-4 h-40 outline-none resize-none"
            />

            <button className="w-full mt-8 bg-[#0D5EAF] text-white h-14 rounded-2xl font-semibold shadow-lg shadow-blue-200 hover:scale-[1.02] transition">
              Submit Medical Inquiry
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="bg-[#0D5EAF] text-white py-8 px-8">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-10 text-[18px] font-semibold tracking-wide text-center">
            <span>SURGICAL PRECISION</span>
            <span>PATIENT CARE</span>
            <span>CLINICAL EXCELLENCE</span>
            <span>ADVANCED TECHNOLOGY</span>
          </div>
        </div>

        <div className="bg-white py-10 px-8 border-t border-[#DCE6F2]">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-[22px] font-bold">
                Dr. Ramesh Kumar Chippada
              </h3>
              <p className="text-[#6B7A90] mt-2">E.N.T Surgeon</p>
            </div>

            <p className="text-[#6B7A90] text-center">
              © 2026 Dr. Ramesh Kumar Chippada. All rights reserved.
            </p>

            <div className="flex gap-4">
              {["IG", "FB", "IN", "X"].map((icon) => (
                <div
                  key={icon}
                  className="w-12 h-12 rounded-full bg-[#F4F8FC] flex items-center justify-center font-semibold hover:bg-[#0D5EAF] hover:text-white transition cursor-pointer"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}