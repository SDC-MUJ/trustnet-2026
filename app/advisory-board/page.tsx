export default function AdvisoryBoardPage() {
const internationalMembers = [
    [
        "Vidyacharan Bhaskar",
        "San Francisco State University, San Francisco, CA, USA",
    ],
    ["Rajkumar Buyya", "University of Melbourne, Australia"],
    [
        "Robin T. Bye",
        "Norwegian University of Science and Technology, Alesund, Norway",
    ],
    ["Max Henrique Machado Costa", "University of Campinas, Brazil"],
    ["Aleksander Karadimche", "UIST, Northern Rep. of Macedonia"],
    ["Dijana Capeska Bogatinoska", "UIST, Northern Rep. of Macedonia"],
    ["Dmytro Zubov", "Technical University of Ostrava, Czech Republic"],
    ["Danish Ather", "Amity University, Tashkent"],
    ["Biju Issac", "Northumbria University, Newcastle, UK"],
    ["Pinnamaneni Bhanu Prasad", "Kelenn Technology, France"],
    [
        "Vijander Singh",
        "Norwegian University of Science and Technology (NTNU), Alesund, Norway",
    ],
    ["Kristina", "Technical University of Varna, Bulgaria"],
    ["Tomas Sochor", "Technical University of Ostrava, Czech Republic"],
    ["Eustrat Zhupa", "University of Rochester, Rochester, NY"],
    ["Monika Polak", "Rochester Institute of Technology, Rochester, NY"],
    [
        "Florin POPENTIU VLÃDICESCU",
        "University “Politehnica” of Bucharest and Co-Chairholder to UNESCO Chair, University of Oradea, Romania",
    ],
    ["Álvaro Rocha", "University of Coimbra, Portugal"],
    ["Weiler Finnamore", "Universidade Federal de Juiz de Fora, Brazil"],
    [
        "Hamurabi Gamboa-Rosales",
        "Autonomous University of Zacatecas, Mexico",
    ],
    [
        "Pushpendu Kar",
        "University of Nottingham UK (China campus)",
    ],
    ["Mohammad Nasar", "Mazoon College Muscat, Sultanate of Oman"],
    ["Mohammad Abu Kausar", "University of Nizwa, Sultanate of Oman"],
    ["Anand Nayyar", "Duy Tan University, Da Nang, Vietnam"],
    [
        "Aruna Kumar S V",
        "University of Beira Interior Covilha Portugal",
    ],
];

const nationalMembers = [
    ["Virendra Singh", "Indian Institute of Technology Bombay, India"],
    [
        "Amitava Das",
        "Director, CSIR-CSMCRI, Distinguished Professor AcSIR, Bhavnagar, Gujrat, India",
    ],
    ["Manu Pratap Singh", "Dr. Bhimrao Ambedkar University, Agra, India"],
    ["Amit Chaturvedi", "Govt Engineering College Ajmer, Ajmer, India"],
    ["Sunil Kumar Muttoo", "University of Delhi, India"],
    ["Vipin Tyagi", "Jaypee University of Engineering and Technology Guna, India"],
    ["K. Lobiyal", "Jawaharlal Nehru University, Delhi, India"],
    ["K. Mishra", "Chairman, ACM Udaipur Chapter, India"],
    ["V. Desai", "Vice chancellor, MVN University. Haryana, India"],
    ["Sudeep Tanwar", "Nirma University, Ahmedabad"],
    ["C. Bishnoi", "ACM Udaipur Chapter, India"],
    ["Amit Joshi", "Secretary, ACM Udaipur Chapter, India"],
    ["Durgesh Mishra", "Shri Aurobindo Institute of Technology, Indore, MP, India"],
    ["Vijay Singh Rathore", "IP Chairman (CSI- Jaipur Chapter), India"],
    ["Saroj", "Guru Jambheshwar University of Science and Technology, Hisar, India"],
    ["Yudhvir Singh", "Maharshi Dayanand University Rohtak, India"],
    ["Santosh Vishwakarma", "Gyan Ganga Institute of Technology and Sciences Jabalpur"],
    ["Rishi Pal Singh", "Guru Jambheshwar University of Science and Technology, Hisar, India"],
    ["Rahul Rishi", "Maharshi Dayanand University, Rohtak, India"],
    ["Neeta Nain", "Malaviya National Institute of Technology, Jaipur, India"],
    ["Om Parkash Sangwan", "Guru Jambheshwar Univ. of Science and Technology, Hisar, India"],
    ["Sumeet Gill", "Maharshi Dayanand University, Rohtak, India"],
    ["Pankaj Lathar", "Ch. Brahm Prakash Government Engineering College, Jaffarpur, Delhi, India"],
    ["Girish Sharma", "Bhai Parmanand Institute of Business Studies, Delhi, India"],
    ["Naveen Kumar", "Indira Gandhi National Open University, New Delhi, India"],
    ["Amit Choudhary", "Maharaja Surajmal Institute, New Delhi, India"],
    ["Srinivasa K G", "Ch. Brahm Prakash Government Engineering College, Jaffarpur, Delhi, India"],
    ["Anoop Singh Poonia", "Vivekananda Global University, Jaipur, India"],
    ["Pradeep Tomar", "Gautam Buddha University, Greater Noida, India"],
    ["Mukesh Kumar Sharma", "The Technological Institute of Textile & Sciences, Bhiwani, India"],
    ["Sanjay Kumar Sharma", "Banasthali Vidyapith, Rajasthan, India"],
];

  return (
    <>
      <div
        className="relative h-[350px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/graphics/advisory-hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-black uppercase text-white text-center">
            Advisory Board
          </h1>
        </div>
      </div>

      <main className="px-4 py-12 sm:px-8 md:px-16 md:pb-16 max-w-7xl mx-auto">
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            International Advisory Board
          </h2>
          <ul className="list-disc space-y-4 pl-6 text-lg">
            {internationalMembers.map(([name, affiliation], index) => (
              <li key={index} className="text-gray-800">
                <span className="font-medium">{name}</span>, {affiliation}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            National Advisory Board
          </h2>
          <ul className="list-disc space-y-4 pl-6 text-lg">
            {nationalMembers.map(([name, affiliation], index) => (
              <li key={index} className="text-gray-800">
                <span className="font-medium">{name}</span>, {affiliation}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
