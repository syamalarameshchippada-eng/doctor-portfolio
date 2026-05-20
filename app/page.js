import {
  Stethoscope,
  ShieldCheck,
  HeartHandshake,
  UserRound,
} from "lucide-react";

export default function PremiumENTHomepage() {
  return (
    <div className="min-h-screen bg-[#F4F8FC] text-[#0B2341] font-sans pt-[71px] sm:pt-[88px] overflow-x-hidden">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-[999] backdrop-blur-xl bg-white/90 border-b border-[#DCE6F2] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] sm:h-[88px] flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden border-2 border-white shadow-lg">
              <img
                src="/images/logo.png"
                alt="Clinic Logo"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h1 className="text-[15px] sm:text-[18px] lg:text-[20px] font-bold leading-none">
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

            <a href="#expertise" className="hover:text-[#0D5EAF] transition">
              Expertise
            </a>

            <a href="#experience" className="hover:text-[#0D5EAF] transition">
              Experience
            </a>

            <a href="#contact" className="hover:text-[#0D5EAF] transition">
              Contact
            </a>
          </div>

          <a
          href="#contact" className="flex items-center justify-center bg-[#0D5EAF] text-white h-12 lg:h-14 px-5 lg:px-7 rounded-2xl text-[14px] lg:text-[15px] font-semibold shadow-lg shadow-blue-200 hover:scale-105 transition"
          >
            Book Consultation
            </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 lg:pt-28 pb-16 lg:pb-24 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* LEFT */}
        <div>
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 text-[#0D5EAF] text-sm font-semibold mb-8">
            <div className="w-2 h-2 rounded-full bg-[#0D5EAF]" />
            E.N.T SPECIALIST
          </div>

          <h1 className="text-[40px] leading-[48px] sm:text-5xl sm:leading-[60px] lg:text-[72px] lg:leading-[82px] font-bold tracking-[-2px] max-w-[620px]">
            PRECISION IN SURGICAL EXCELLENCE
          </h1>

          <p className="mt-6 sm:mt-8 text-[16px] leading-[28px] sm:text-[18px] sm:leading-[32px] text-[#6B7A90] max-w-[560px]">
            Delivering advanced ENT care through precision surgery,
            evidence-based treatment, and compassionate patient care
            supported by modern medical technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-10">
            <a
              href="#contact"
              className="flex items-center justify-center bg-[#0D5EAF] text-white h-14 px-8 rounded-2xl font-semibold shadow-lg shadow-blue-200 hover:scale-105 transition"
            >
              Schedule Consultation
            </a>

            <a
              href="#services"
              className="flex items-center justify-center border border-[#DCE6F2] bg-white h-14 px-8 rounded-2xl font-semibold hover:bg-[#0D5EAF] hover:text-white transition"
            >
              View Services
            </a>
          </div>

          {/* FEATURE BOXES */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-14 lg:mt-16">
            {[
              {
                title: "Advanced Technology",
                icon: <Stethoscope className="w-6 h-6 text-[#0D5EAF]" />,
              },
              {
                title: "Evidence Based Treatment",
                icon: <ShieldCheck className="w-6 h-6 text-[#0D5EAF]" />,
              },
              {
                title: "Compassionate Care",
                icon: <HeartHandshake className="w-6 h-6 text-[#0D5EAF]" />,
              },
              {
                title: "Patient First Approach",
                icon: <UserRound className="w-6 h-6 text-[#0D5EAF]" />,
              },
            ].map((item) => (
              <div key={item.title}>
                <div className="w-12 h-12 rounded-2xl bg-white shadow-md mb-4 flex items-center justify-center">
                  {item.icon}
                </div>

                <p className="text-sm font-medium text-[#0B2341] leading-6">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0D5EAF] to-blue-400 rounded-[48px] rotate-3"></div>

          <div className="relative overflow-hidden rounded-[48px] bg-[#0D5EAF] shadow-2xl">
            <img
              src="/images/doctor.png"
              loading="lazy"
              alt="Ramesh Kumar Chippada"
              className="w-full h-[420px] sm:h-[550px] lg:max-h-[760px] object-cover"
            />
          </div>

          <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 bg-white rounded-3xl shadow-xl p-4 sm:p-6 w-[170px] sm:w-[220px]">
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
        <div className="bg-white rounded-[32px] p-6 sm:p-10 shadow-xl shadow-blue-100 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {[
            ["15+", "Years Experience"],
            ["5000+", "Happy Patients"],
            ["40+", "Advanced Procedures"],
            ["2", "Clinic Locations"],
          ].map(([number, label]) => (
            <div key={label} className="text-center lg:text-left">
              <h2 className="text-[30px] sm:text-[42px] font-bold text-[#0D5EAF]">
                {number}
              </h2>

              <p className="mt-2 text-[#6B7A90] font-medium">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section
        id="expertise" 
        className="max-w-7xl mx-auto px-8 pb-24">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="text-sm font-semibold tracking-[1px] text-[#0D5EAF] uppercase mb-4">
              Surgical Expertise
            </p>

            <h2 className="text-[38px] sm:text-[52px] font-bold max-w-[700px]">
              Precision. Technology. Better Outcomes.
            </h2>
          </div>

          <button className="hidden md:block border border-[#DCE6F2] bg-white h-14 px-8 rounded-2xl font-semibold hover:bg-[#0D5EAF] hover:text-white transition">
            View All Procedures
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            "/images/surgery1.png",
            "/images/surgery2.png",
            "/images/surgery3.png",
            "/images/surgery4.png",
            "/images/surgery5.png",
          ].map((img, index) => (
            <div
              key={img}
              className="overflow-hidden rounded-[24px] group shadow-lg"
            >
              <img
                src={img}
                alt="Procedure"
                className="h-[180px] sm:h-[260px] lg:h-[320px] w-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* INFO CARDS */}
      <section 
      id="experience"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 grid lg:grid-cols-3 gap-8">
        {[
          {
            title: "Academic Foundation",
            items: [
              {
                heading: "Andhra Medical College, Visakhapatnam",
                description:
                  "Bachelor of Medicine and Surgery (MBBS)",
              },
              {
                heading: "Osmania Medical College, Govt. E.N.T Hospital, Koti, Hyderabad",
                description: "Postgraduate MS(E.N.T), DLO",
              },
            ],
          },
          {
            title: "Clinical Practices",
            items: [
              {
                heading:
                  "Sri Venkateswara Super Speciality E.N.T Care (Mon-Sat)",
                description:
                  "Prahalada Polyclinic, Beside Somnath Medicals, Near K.G.H, Visakhapatnam.",
              },
              {
                heading: "Sri Venkateswara Polyclinic (Sun)",
                description:
                  "Near R.T.C Complex, Srungavarapukota.",
              },
            ],
          },
          {
            title: "Professional Experience",
            items: [
              {
                heading:
                  "Government E.N.T Hospital, Visakhapatnam",
                description:
                  "Assistant Professor of E.N.T, Andhra Medical College | 2015 to 2025",
              },
              {
                heading:
                  "Maharaja Government General Hospital",
                description:
                  "Assistant Professor of E.N.T | 2025 to Present",
              },
            ],
          },
        ].map((card) => (
          <div
            key={card.title}
            className="bg-white/70 backdrop-blur-xl border border-[#DCE6F2] rounded-[32px] p-6 sm:p-8 lg:p-10 shadow-lg hover:-translate-y-2 transition duration-300"
          >
            <h3 className="text-[30px] font-bold mb-10 leading-tight">
              {card.title === "Clinical Practices" ? (
                <>
                  Clinical
                  <br />
                  Practices
                </>
              ) : (
                card.title
              )}
            </h3>

            <div className="space-y-8">
              {card.items.map((item) => (
                <div key={item.heading} className="flex gap-5">
                  <div className="w-4 h-4 rounded-full bg-[#0D5EAF] mt-2" />

                  <div>
                    <h4 className="text-[20px] font-semibold leading-8">
                      {item.heading}
                    </h4>

                    <p className="text-[#6B7A90] mt-2 leading-7">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

            {/* CONTACT */}
      <section
        id="contact"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28"
      >
        <div className="bg-white rounded-[40px] p-6 sm:p-10 lg:p-16 grid lg:grid-cols-2 gap-12 lg:gap-20 shadow-2xl shadow-blue-100">
          
          {/* LEFT SIDE */}
          <div>
            <p className="text-sm font-semibold tracking-[1px] text-[#0D5EAF] uppercase mb-4">
              Get In Touch
            </p>

            <h2 className="text-[38px] leading-[46px] sm:text-[48px] sm:leading-[56px] lg:text-[54px] lg:leading-[62px] font-bold max-w-[500px]">
              Inquiries & Clinical Consultations
            </h2>

            <div className="space-y-10 mt-14">
              <div>
                <h3 className="text-[26px] font-semibold mb-3">
                  Main Consultation Centre
                </h3>

                <a
                  href="https://maps.app.goo.gl/pefGEAMGkrHeYkCg9"
                  className="text-[#0D5EAF] text-[17px] leading-8"
                >
                  Sri Venkateswara Super Speciality E.N.T Care,
                  Visakhapatnam, Andhra Pradesh.
                </a>
              </div>

              <div>
                <h3 className="text-[26px] font-semibold mb-3">
                  Direct Contact Line
                </h3>

                <a
                  href="tel:+918499888518"
                  className="text-[#0D5EAF] text-[17px] leading-8 hover:underline"
                >
                  +91 84998 88518
                </a>
              </div>

              <div>
                <h3 className="text-[26px] font-semibold mb-3">
                  Digital Communication
                </h3>

                <p className="text-[#6B7A90] text-[17px] leading-8">
                  <a
                    href="mailto:drramesh_ent2007@yahoo.co.in"
                    className="text-[#0D5EAF] hover:underline"
                  >
                    Email: drramesh_ent2007@yahoo.co.in
                  </a>

                  <br />

                  <a
                    href="https://instagram.com/drramesh_entsurgeon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0D5EAF] hover:underline"
                  >
                    Instagram: @drramesh_entsurgeon
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* FORM */}
<div className="bg-[#F8FBFF] border border-[#DCE6F2] rounded-[32px] p-10">
  <h3 className="text-[34px] font-bold mb-10">
    Book an Appointment
  </h3>

  <form
    action="https://formspree.io/f/xdajajer"
    method="POST"
  >
    {/* Hidden Subject */}
    <input
      type="hidden"
      name="_subject"
      value="New ENT Appointment Request"
    />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        required
        className="h-14 rounded-2xl border border-[#DCE6F2] px-5 outline-none focus:ring-2 focus:ring-[#0D5EAF]"
      />

      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        required
        className="h-14 rounded-2xl border border-[#DCE6F2] px-5 outline-none focus:ring-2 focus:ring-[#0D5EAF]"
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
        className="h-14 rounded-2xl border border-[#DCE6F2] px-5 outline-none focus:ring-2 focus:ring-[#0D5EAF]"
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        required
        className="h-14 rounded-2xl border border-[#DCE6F2] px-5 outline-none focus:ring-2 focus:ring-[#0D5EAF]"
      />
    </div>

    <textarea
      name="message"
      placeholder="Please describe your concern..."
      required
      className="w-full mt-6 rounded-2xl border border-[#DCE6F2] px-5 py-4 h-40 outline-none resize-none focus:ring-2 focus:ring-[#0D5EAF]"
    />

    <button
      type="submit"
      className="w-full mt-8 bg-[#0D5EAF] text-white h-14 rounded-2xl font-semibold shadow-lg shadow-blue-200 hover:scale-[1.02] transition"
    >
      Submit Medical Inquiry
    </button>
  </form>
</div>
</div>
</section>
      {/* FOOTER */}
      <footer>
        {/* AUTO CAROUSEL */}
        <div className="bg-[#0D5EAF] overflow-hidden py-8">
          <div className="flex marquee-track">
            <div className="flex items-center gap-20 min-w-max text-white text-[18px] font-semibold tracking-wide px-10">
              <span>SURGICAL PRECISION</span>
              <span>PATIENT CARE</span>
              <span>CLINICAL EXCELLENCE</span>
              <span>ADVANCED TECHNOLOGY</span>
            </div>

            <div className="flex items-center gap-20 min-w-max text-white text-[18px] font-semibold tracking-wide px-10">
              <span>SURGICAL PRECISION</span>
              <span>PATIENT CARE</span>
              <span>CLINICAL EXCELLENCE</span>
              <span>ADVANCED TECHNOLOGY</span>
            </div>
          </div>
        </div>

        <div className="bg-white py-10 px-8 border-t border-[#DCE6F2]">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 text-center lg:text-left">
            <div>
              <h3 className="text-[22px] font-bold">
                Dr. Ramesh Kumar Chippada
              </h3>

              <p className="text-[#6B7A90] mt-2">E.N.T Surgeon</p>
            </div>

            <p className="text-[#6B7A90] text-center">
              © 2026 Dr. Ramesh Kumar Chippada. All rights reserved.
            </p>

            {/* SOCIAL MEDIA IMAGES */}
            <div className="flex gap-4">
              <a
                href="https://instagram.com/drramesh_entsurgeon"
                target="_blank"
                className="w-12 h-12 rounded-full bg-[#F4F8FC] flex items-center justify-center hover:bg-[#E8F1FB] transition overflow-hidden"
              >
                <img
                  src="/images/instagram.png"
                  alt="Instagram"
                  className="w-6 h-6 object-contain"
                />
              </a>

              <a
                href="#"
                target="_blank"
                className="w-12 h-12 rounded-full bg-[#F4F8FC] flex items-center justify-center hover:bg-[#E8F1FB] transition overflow-hidden"
              >
                <img
                  src="/images/facebook.png"
                  alt="Facebook"
                  className="w-6 h-6 object-contain"
                />
              </a>

              <a
                href="#"
                target="_blank"
                className="w-12 h-12 rounded-full bg-[#F4F8FC] flex items-center justify-center hover:bg-[#E8F1FB] transition overflow-hidden"
              >
                <img
                  src="/images/linkedin.png"
                  alt="LinkedIn"
                  className="w-6 h-6 object-contain"
                />
              </a>

              <a
                href="#"
                target="_blank"
                className="w-12 h-12 rounded-full bg-[#F4F8FC] flex items-center justify-center hover:bg-[#E8F1FB] transition overflow-hidden"
              >
                <img
                  src="/images/x.png"
                  alt="X"
                  className="w-6 h-6 object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* MARQUEE ANIMATION */}
      <style>{`
  .marquee-track {
    width: max-content;
    animation: marquee 18s linear infinite;
  }

  @keyframes marquee {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(-50%);
    }
  }
`}</style>
    </div>
  );
}