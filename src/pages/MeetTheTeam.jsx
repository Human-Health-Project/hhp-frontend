import './MeetTheTeam.css';
import { Link } from "react-router-dom";

// Team member data organized by department
const teamData = {
    board: [
        {
            name: 'Phil Harrington',
            details: 'A medical doctor by training, Phil has worked extensively on the integration of conventional and alternative medical treatments over many years. He founded and grew Magna Group, the largest independent consumer electronics sales and marketing firm in Ireland. Upon moving to the United States, he became immersed in evolving technology and holistic wellness making him uniquely suited to head a project using new techniques to improve healthcare.',
            location: 'US, ROI',
            title: 'Founder & CEO',
            image: 'https://humanhealthproject.org/wp-content/uploads/2023/09/Phil-Harrington.webp'
        },
        {
            name: 'Roisin Kelleher',
            details: 'Róisín\'s background is in the creative media and applied communications industry. She has 20 years\' experience, encompassing a range of positions in Irish broadcasting, production, management and senior management and across a variety of genres in radio, tv, and digital for which she has collected multiple awards. Her main focus has been radio, drama, multi-platform education, and commissioning, significantly contributing to developing and supporting the burgeoning media industry in Northern Ireland. She has also held key assessment and mentoring roles and has delivered several aspirational, one-off and ongoing CPD training programs to the sector across the island. Róisín began professional training in holistic healthcare in 2005 and also now works as a therapist and personal process facilitator, primarily integrating body-mind psychotherapeutic techniques with Somatic Experiencing. She has been inspired by her many local and international teachers from the complimentary, medical and mental health communities with whom she trained and is passionate about supporting a state of well-being amongst those who work as front-line professionals, caregivers, therapists, and managers, particularly those affected by post-traumatic stress. Róisín is also especially interested in the influence of trauma on individuals and their groups and how this can impact and shape a society collectively – psychologically, emotionally, physically, spiritually and economically.',
            location: 'NI',
            title: 'Director, NI',
            image: 'https://humanhealthproject.org/wp-content/uploads/2023/09/Roisin-Kelleher.webp'
        },
        {
            name: 'John Kotick',
            details: 'For over 35 years, Mr. Kotick has brought leadership, creativity and integrity to the nonprofit sector in Greater Los Angeles serving in such capacities as C.E.O. of Family Health Care Centers of Greater Los Angeles, Vice President for Community Programs for the Greater Los Angeles Affiliate of the American Heart Association and Executive Director of the Center for Health Care Rights. Experienced in healthcare, advocacy, and services to diverse populations, Kotick has also been a Delegate to the California Conference on Handicapped Individuals and the California State House Conference on Aging. Kotick has contributed to California State legislation including the “Torres-Felando Long Term Care Reform Act”. A graduate of the University of Southern California with a J.D. and B.A. degree in political science, John Kotick lives in Los Angeles, California. ',
            location: 'US',
            title: 'Director, US',
            image: 'https://humanhealthproject.org/wp-content/uploads/2023/09/Jonh-Kotick.webp'
        },
        {
            name: 'Denny Elliot',
            details: 'Denny has been working in the Voluntary and Community Sector for 30 years at both director and senior management level. A former Peace and Conflict Studies student at Magee Campus University at Ulster he also studied Advertising, Marketing, and Public Relations at Queens and strategic Management at Boston College. He began life in the sector with Amnesty International before Joining Concern Worldwide and then moving on to become a Regional Manager with Save the Children Fund and then Director of Oxfam Ireland. Denny was also Director of Fundraising and Communications with Northern Ireland Chest Heart and Stroke Association for 8 years creating and developing new and innovative income streams from the organization such as legacies, donations in lieu of flowers and community event. Denny Established Redsocks Consulting in 2005 specializing in Strategic Management and Capital and Income Generation. Redsocks have worked on some of the biggest capital and revenue projects in the voluntary sector such as the MAC Arts Centre Belfast, Somerton Road Adult Hospice Belfast and Horizon West Children’s Hospice in Fermanagh. During this period Denny successfully established a ‘Friends’ of Northern Ireland group in both the House of Lords and New York and developed partnerships with some of the biggest Trusts and Foudnations in the UK. Redsocks have generated over £15 million in the last 10 years for client organizations and over the last 18 months have expanded into the international arena, breaking new ground in philanthropy and development which has involved working in the USA developing client partnerships with various universities, museums, hospitals, libraries, individuals, and businesses to establish opportunities which enable access to global giving foundations, such as Atlantic Philanthropies, The Clinton Foundation, The Oak Foundation and the Bloomberg Foundation. Denny is now Head of Self Help Africa NOrthern Ireland with responsibility for the delivery of Irish Aid Funded Programmes in Teso Uganda. Denny has been a Steering Group Committee Member of Changemakers since 2019. Denny is a Trustee of the Human Health Project. ',
            location: 'NI',
            title: 'Director, NI',
            image: 'https://humanhealthproject.org/wp-content/uploads/2023/09/Denny-Elliot.webp'
        },
    ],
    management: [
        {
            name: 'Phil Harrington',
            details: 'A medical doctor by training, Phil has worked extensively on the integration of conventional and alternative medical treatments over many years. He founded and grew Magna Group, the largest independent consumer electronics sales and marketing firm in Ireland. Upon moving to the United States, he became immersed in evolving technology and holistic wellness making him uniquely suited to head a project using new techniques to improve healthcare.',
            location: 'US, ROI',
            title: 'Founder & CEO',
            image: 'https://humanhealthproject.org/wp-content/uploads/2023/09/Phil-Harrington.webp'
        },
        {
            name: 'Laura Bartus',
            details: 'Laura Bartus is the Chief Learning Officer for the Human Health Project and the head of learning and development for CenterWell Pharmacy, a division of Humana. At the Human Health Project, Laura helps the organization set near-term and future strategy, scale up its patient education programs, and increase its reach to new groups of patients and caregivers. At Humana, Laura\'s teams create, deliver, and track learning and development programs for the pharmacy organization\'s 12,000 associates. This includes dispensing sites, call centers, professional tracks, and Pharmacists and Pharmacy Techs. Laura\'s organization effectiveness team tracks operational results and develops learning metrics strategy to improve their business impact. Laura leads development sessions for leaders and associates across the enterprise, and also externally at many industry events. Laura is passionate about coaching, providing employees with equitable advancement opportunities, building up a robust talent pipeline, and helping her team to be a valued partner to the business. Laura started out as a high school English teacher, teaching and learning a ton from some amazing teens. In the corporate world, Laura has done nearly every job in learning, moving through design, facilitation, and many leadership roles. She has been involved with several volunteer organizations. She has four crazy children – two of which are twins and three of which are boys. So she also has a crippling coffee addiction, and she really loves work trips. She finds sanity through taking hikes and reading new books. Don\'t get her started on dad jokes, because it will delay your meeting for at least five minutes.',
            location: '',
            title: 'Chief Learning Officer',
            image: 'https://humanhealthproject.org/wp-content/uploads/2024/10/Profile-Picture-Laura-Bartus-e1730391744260-300x400.webp'
        },
        {
            name: 'Aya Ali',
            details: 'Aya Ali, a 23-year-old medical student at East University, has always harbored a deep-seated passion for medicine. From a young age, Aya dreamt of becoming a medical doctor, driven by a desire to help people feel better and recover from their ailments. This unwavering commitment to healing has guided her through her academic journey and continues to inspire her every day. Aya is highly motivated and ambitious, particularly in her goal of becoming a gynecologist and obstetrician. She envisions herself assisting in the miraculous moments of childbirth, witnessing the beginning of new lives. This vision fuels her dedication and hard work. Beyond her rigorous studies, Aya finds joy in a variety of hobbies. She loves cooking, where she experiments with new recipes and flavors. Swimming and working out are her go-to activities for staying fit and energized. Additionally, Aya has a creative side, which she expresses through painting, capturing the beauty of the world around her on canvas. She also enjoys organizing closets and houses, finding satisfaction in creating orderly and beautiful spaces. Aya\'s family is the cornerstone of her life, with her parents being the most important people to her. She cherishes spending time with her friends and feels immense happiness when she sees others embarking on new journeys in their lives. As she approaches her graduation from medical school, Aya is excited to start her own journey in the medical field, ready to make a significant impact and help others.',
            location: '',
            title: 'General Manager - Diabetes Project',
            image: 'https://humanhealthproject.org/wp-content/uploads/2024/11/Aya-Ali-300x400.jpeg'
        },
    ],
    technology: [
        {
            name: 'Alvin Ceballos',
            details: 'Alvin is a Quality Assurance professional with work background in telecommunications, finance and payroll, e-commerce, cryptocurrency, and digital security. His passion is in testing and finding the most challenging issues. A graduate of Computer Science, he is looking forward to learn more about cybersecurity and how it is applied in various industries. He volunteers his time as QA to help with causes that matter to him particularly in health and the future of health management.',
            location: '',
            title: 'SQA Lead',
            image: 'https://humanhealthproject.org/wp-content/uploads/2023/09/Alvin-Ceballos-300x400.webp'
        },
        {
            name: 'Abdullahi Hussein',
            details: 'Abdullahi is a Web and WordPress developer, passionate about using technology to improve people\'s health and is committed to working on a platform that helps individuals make informed decisions about their well-being. He specializes in creating custom themes and plugins to help clients achieve their web presence goals. His expertise in WordPress development is essential to improve the company\'s web presence and deliver high-quality solutions. He also stays up-to-date with the latest industry trends and technologies to provide the best possible services.',
            location: '',
            title: 'Web Developer and WordPress Lead',
            image: 'https://humanhealthproject.org/wp-content/uploads/2023/09/Abdullahi-Hussein-300x400.webp'
        },
        {
            name: 'Rene Herrera',
            details: 'Rene possesses extensive experience in business administration, data analysis, and program management. He is deeply passionate about process improvement and leverages his diverse experiences to develop efficient workflows. Rene holds a Bachelor of Science in Cognitive Science with a Computational emphasis, complemented by minors in Economics and Technology Management from UC Davis. With experience in the research sector focusing on food and health, he is motivated to expand his knowledge and eager to drive results in human health.',
            location: '',
            title: 'Technical Project Manager',
            image: 'https://humanhealthproject.org/wp-content/uploads/2024/05/Rene-Herrera-300x400.webp'
        },
        {
            name: 'Sukanya Devarajan',
            details: 'Sukanya Devarajan is a Quality Assurance professional with a work background in Life Insurance, Finance, and E-commerce applications. A graduate in Electrical and Electronics, with experience in various types of software testing, is looking forward to improving her automation skills, learning API testing, DevOps testing, and its application in the real world. Her passion in testing and identifying critical issues, has led to volunteering for non-profit organizations. ',
            location: '',
            title: 'SQA Automation Engineer',
            image: 'https://humanhealthproject.org/wp-content/uploads/2023/09/Sukanya-Devarajan-300x392.webp'
        },
        {
            name: 'Jorell Andrei Finez',
            details: 'Jorell Andrei P. Finez is a Full-Stack Web and Mobile Application Developer based in the Philippines with a strong foundation in Information Technology and software development. He specializes in designing and developing scalable, user-centered web and mobile applications using modern technologies including React, Vue, Laravel, Node.js, MySQL, Firebase, Kotlin, and Python. His experience covers front-end and back-end development, database architecture, authentication systems, API integration, UI/UX design, and system deployment.',
            location: '',
            title: 'Web Developer',
            image: 'https://firebasestorage.googleapis.com/v0/b/miolms.firebasestorage.app/o/JORELL%20ANDREI%20P.%20FINEZ%2F0b7c0102-8d12-4cd6-b585-c8e3bd9631d1.remini-enhanced.jpg?alt=media&token=c3b9601d-b532-487b-94f9-4b095fcfbdf3'
        },
    ],
    product: [
    ],
    privacySecurity: [
        {
            name: 'Joseph Manning',
            details: 'Joseph is a proven leader with over 14 years of Information Security (IS) Experience, 20 years Information Technology (IT) experience, and 30 years financial services & business experience. He is a proven leader and a hands-on contributor who gets results by working with others, understanding risk, and implementing workable and effective solutions. Areas of IS expertise include IS Staff Management & Development, Third Party Risk Management, Data Loss Prevention, Software Security Program Governance, Policy & Control Development, End User Computing Governance (shadow IT), IS & IT Audit & Compliance Management, and Project Management. "Leadership and personal philosophy are founded on the core principles of treating everyone with respect, continuous learning, effective communication, a positive attitude, hard work, having fun, and caring about getting things done that benefit the organization and society." "Since I retired in January of 2020, I have been focused on working with small companies helping them to understand that Information Security can be scaled and priced based on the risks they face. The Human Health Project is a great organization and helps me to stay active in the information security profession. I have happily relocated to the beautiful city of Jackson, WY to enjoy the stunning beauty of the Tetons and access to nature and outdoor activities."',
            location: '',
            title: 'Security Training Officer',
            image: 'https://humanhealthproject.org/wp-content/uploads/2023/09/Joseph-Manning-300x400.webp'
        },
    ],
    marketing: [
        {
            name: 'Olha Solonenko',
            details: 'As a dedicated marketing manager, Olha leverages her deep knowledge of digital advertising to craft data-driven campaigns that resonate with target audiences. She believes in building strong cross-team collaboration and meticulous planning to bring in expected business results. Olha has experience in building digital marketing strategies and bringing them to life for businesses of different shapes and from various industries. She is excited to implement her skills at HHP to help the organization with its mission! ',
            location: '',
            title: 'VP of Digital Marketing',
            image: 'https://humanhealthproject.org/wp-content/uploads/2024/04/Olha-Solonenko-300x400.webp'
        },
        {
            name: 'Selene Tan',
            details: 'Selene lives in Knoxville, Tennessee. She attends the University of Alabama as a premedical student majoring in philosophy and minoring in neuroscience. She previously worked with the Alzheimer\'s Association and hopes to use her skills to support HHP.',
            location: '',
            title: 'Marketing Manager - Social Media',
            image: 'https://humanhealthproject.org/wp-content/uploads/2023/09/Selene-Tan-300x400.webp'
        },
        {
            name: 'Marcelo De Sa',
            details: 'Marcelo De Sa is currently completing his Masters in Management (Project Management Concentration). He brings over three years of experience leading cross-functional teams and applying data-driven strategies to improve performance across the project lifecycle. His background blends project management expertise, with hands-on experience in people analytics to support strategic decision-making and process improvement. ',
            location: '',
            title: 'Healthcare Access Manager',
            image: 'https://humanhealthproject.org/wp-content/uploads/2025/10/Marcelo-De-Sa-1-300x400.png'
        },
    ],
    legal: [
        {
            name: 'Garrett Hall',
            details: 'Garrett is a Trademark & Copyright Attorney assisting HHP to secure, maintain, and protect its intellectual property rights. He is licensed to practice law in Massachusetts where he currently resides. ',
            location: '',
            title: 'Copyright Attorney',
            image: 'https://humanhealthproject.org/wp-content/uploads/2023/09/Garrett-Hall-300x400.webp'
        },
    ],
    humanResources: [
        {
            name: 'Sean Duane',
            details: 'Sean is a human resources professional embodying both specialist and generalist profiles. He completed undergraduate education at The George Washington University in Washington, D.C., graduating summa cum laude with a BA in psychology. In addition, he has a strong research background in various behavioral sciences, allowing him to better understand and analyze human capital metrics to drive organization-wide strategy. Sean currently serves the Human Health Project as an HR Assistant working to automate talent acquisition processes and ensure training materials are adequately addressing proficiencies critical to the success of senior leadership and associated teams.',
            location: '',
            title: 'HR Manager',
            image: 'https://humanhealthproject.org/wp-content/uploads/2024/12/Sean-Duane-300x400.webp'
        },
        {
            name: 'Marzia Brondi',
            details: 'Marzia was born and raised in Italy and now lives in the Netherlands. With a background in Political Science and a career in People Operations, she supports creating positive experiences and connections in the workplace. As a volunteer with HHP, she manages onboarding for new members and enjoys helping others feel welcomed and connected.',
            location: '',
            title: 'HR Manager',
            image: 'https://humanhealthproject.org/wp-content/uploads/2025/10/Marzia-300x400.webp'
        },
        {
            name: 'Libby Grinfeld',
            details: 'Libby received her Master\'s Degree in Organizational Behavior and Development from Reichman University (IDC Herzilya). Originally from Los Angeles California, she moved to Israel to pursue her higher education. Libby\'s interest in learning Psychology has led her to the world of HR. Her passion for helping people creates a way to blend these many interests together, while also contributing to the work at HHP. When she is not learning new topics or working, she enjoys developing her photography skills and watching comedy movies.',
            location: '',
            title: 'HR Manager',
            image: 'https://humanhealthproject.org/wp-content/uploads/2023/09/Libby-Grinfeld-300x400.webp'
        },
        {
            name: 'Ginger Crawford',
            details: 'Ginger has a Master\'s degree in Social Work and more than a decade of experience in public and social services. Drawing on her passion for empowering others, she volunteers with HHP where she is happy to do her part in making a lasting and beneficial impact on individuals and communities at large. Her interests include gardening, learning new technology, attending food and wine festivals, archery, craftwork and skating. Born and raised in the USA, she now resides in France.',
            location: '',
            title: 'HR Specialist',
            image: 'https://humanhealthproject.org/wp-content/uploads/2023/09/Ginger-Crawford.webp'
        },
        {
            name: 'Sherie Ford',
            details: 'Sherie is a qualified health professional, and has spent a large portion of her working life helping people improve their health outcomes. She is passionate about enabling her patients, and other people, to live long and healthy lives through empowered decision making. HR became an interest of Sherie\'s over the past few years when she experienced portions of corporate life that she knew she could improve for others following her, given the chance. Much like improvements in healthcare, Sherie believes that positive change comes from a strong desire to improve, and the grit to see a difficult plan through.',
            location: '',
            title: 'HR Assistant',
            image: 'https://humanhealthproject.org/wp-content/uploads/2025/04/Sherie-Ford-300x400.webp'
        },
    ],
    development: [
        {
            name: 'Austin Rosen',
            details: 'Austin currently serves as a grant writer for the Human Health Project. He received a bachelor\'s in science in Electrical Engineering from Cal Poly Pomona. He also just received a Masters in Science Education from California State University Northridge. Austin has taught high school chemistry for multiple years and enjoys making an impact in the community. "I am excited to directly contribute to the impoverished in LA receiving access to healthcare."',
            location: '',
            title: 'Grant Writer',
            image: 'https://humanhealthproject.org/wp-content/uploads/2024/07/Austin-Rosen-300x400.webp'
        },
        {
            name: 'Rosemary Ashinedu Asufi',
            details: 'Rosemary has a background in Medicine and Surgery plus residency training in Ophthalmology. She currently works as an Ophthalmologist and also in the Administrative Department of Human Health Project and pretty much anywhere her help is needed!',
            location: '',
            title: 'Administrative Assistant',
            image: 'https://humanhealthproject.org/wp-content/uploads/2024/07/Rosemary-300x400.webp'
        },
    ],
    programs: [
        {
            name: 'Laura Bartus',
            details: 'Laura Bartus is the Chief Learning Officer for the Human Health Project and the head of learning and development for CenterWell Pharmacy, a division of Humana. At the Human Health Project, Laura helps the organization set near-term and future strategy, scale up its patient education programs, and increase its reach to new groups of patients and caregivers. At Humana, Laura\'s teams create, deliver, and track learning and development programs for the pharmacy organization\'s 12,000 associates. This includes dispensing sites, call centers, professional tracks, and Pharmacists and Pharmacy Techs. Laura\'s organization effectiveness team tracks operational results and develops learning metrics strategy to improve their business impact. Laura leads development sessions for leaders and associates across the enterprise, and also externally at many industry events. Laura is passionate about coaching, providing employees with equitable advancement opportunities, building up a robust talent pipeline, and helping her team to be a valued partner to the business. Laura started out as a high school English teacher, teaching and learning a ton from some amazing teens. In the corporate world, Laura has done nearly every job in learning, moving through design, facilitation, and many leadership roles. She has been involved with several volunteer organizations. She has four crazy children – two of which are twins and three of which are boys. So she also has a crippling coffee addiction, and she really loves work trips. She finds sanity through taking hikes and reading new books. Don\'t get her started on dad jokes, because it will delay your meeting for at least five minutes.',
            location: '',
            title: 'Chief Learning Officer',
            image: 'https://humanhealthproject.org/wp-content/uploads/2024/10/Profile-Picture-Laura-Bartus-e1730391744260-300x400.webp'
        },
        {
            name: 'Bill Nguyen',
            details: '',
            location: '',
            title: 'Education and Online Learning Specialist',
            image: 'https://humanhealthproject.org/wp-content/uploads/2023/09/Bill-Nguyen-300x400.webp'
        },
        {
            name: 'Pritha Sur',
            details: 'Pritha has a background in Biochemistry, and her four-year teaching stint at a college in Mumbai, India, was her stepping stone in the field of education. She decided to focus on online education, as she believes it widens the knowledge accessibility for learners. By implementing appropriate instructional design strategies, she hopes to help HHP create programs that educate and empower people to make informed medical decisions.',
            location: '',
            title: 'Education and Online Learning Specialist',
            image: 'https://humanhealthproject.org/wp-content/uploads/2023/09/Pritha-Sur-300x400.webp'
        },
        {
            name: 'Ana Olivares',
            details: ' Ana is an Instructional Designer with a background in Education (over 8 years). She has a passion for creating engaging and meaningful learning experiences. ',
            location: '',
            title: 'Education & Online Learning Specialist',
            image: 'https://humanhealthproject.org/wp-content/uploads/2025/10/Ana-Olivares-300x400.webp'
        },
        {
            name: 'Selene Tan',
            details: 'Selene lives in Knoxville, Tennessee. She attends the University of Alabama as a premedical student majoring in philosophy and minoring in neuroscience. She previously worked with the Alzheimer\'s Association and hopes to use her skills to support HHP.',
            location: '',
            title: 'Marketing Manager - Social Media',
            image: 'https://humanhealthproject.org/wp-content/uploads/2023/09/Selene-Tan-300x400.webp'
        },
        {
            name: 'Vanessa Legeza',
            details: ' Vanessa is a clinical research coordinator with experience in geriatrics, cardiology, and neuroscience. Additionally, she has gained professional experience in private practice, assisted living, and hospital settings through a variety of direct patient care roles. Vanessa graduated from the University of Pittsburgh with a Bachelor of Science in Biological Sciences, minors in Chemistry and Neuroscience, a certificate in Conceptual Foundations of Medicine, and a Global Distinction. As a member of HHP, she hopes to improve health equity and education dissemination for minority, immigrant, and under-represented populations while working to minimize negative effects of systemic issues within healthcare. Outside of the professional setting, Vanessa is passionate regarding the usage of gardening and ecological stewardship as methods of lessening food insecurity and improving environmental health determinants. ',
            location: '',
            title: 'Patient Advocate and Diabetes Researcher',
            image: 'https://humanhealthproject.org/wp-content/uploads/2024/10/Vanessa-Legeza-300x400.webp'
        },
        {
            name: 'Saliem Q.S. Alzein',
            details: 'Saliem Alzein, a 25-year-old medical student from Abu Dhabi, is currently pursuing his passion for medicine at Near East University. From a young age, Saliem was driven by a deep-seated passion for patient care and support. This dedication led him to embark on his medical journey right after high school, fueled by excitement and determination. Saliem\'s aspiration to become an orthopedic surgeon is closely tied to his commitment to physical fitness. He has honed his physique through rigorous boxing and workout routines, embodying the discipline and resilience required in both his personal and professional life. When not immersed in his medical studies, Saliem plays a pivotal role in his father\'s contracting company, negotiating deals with some of the largest firms. His knack for business is complemented by his creative side, which he expresses through woodworking. Saliem\'s unique creations are a testament to his craftsmanship and attention to detail. In addition to his medical and business pursuits, Saliem has a keen interest in online trading, stock markets, and Amazon deals. His diverse interests reflect his multifaceted personality and his drive to excel in various fields. Among his friends, Saliem is known as the go-to cook, always ready to whip up delicious meals. His love for cooking is yet another way he brings joy and comfort to those around him. Saliem Alzein is a dynamic individual whose dedication to medicine, business acumen, creative talents, and culinary skills make him a well-rounded and inspiring figure. His journey is a testament to the power of passion, hard work, and the pursuit of excellence in all aspects of life.',
            location: '',
            title: 'Diabetes Researcher / YouTube Creator',
            image: 'https://humanhealthproject.org/wp-content/uploads/2024/10/Saliem-Q.S.-Alzein-300x400.webp'
        },
    ],
    footerCta: {
    text: "Our project is growing and we want you to be a part of it.\nMore People. More Information. Better Health.",
    buttonText: "Join Us!"
  }
};

// Reusable TeamMember component
const TeamMember = ({ name, title, image }) => (
    <div className="team-member">
        <div className="team-member__image-wrapper">
            <img src={image} alt={name} className="team-member__image" />
        </div>
        <h4 className="team-member__name">{name}</h4>
        <p className="team-member__title">{title}</p>
    </div>
);

// Reusable TeamSection component
const TeamSection = ({ title, members }) => (
    <section className="team-section">
        <h3 className="team-section__title">{title}</h3>
        <div className="team-section__grid">
            {members.map((member, index) => (
                <TeamMember key={index} {...member} />
            ))}
        </div>
    </section>
);

export default function MeetTheTeam() {
    return (
        <div className="section">
            <div className="container">
                {/* Page Header */}
                <header className="team-header">
                    <h1 className="team-header__title">Meet the Team Behind Human Health Project</h1>
                    <p className="team-header__description">
                        HHP&apos;s team consists of a group of talented and dedicated individuals from all walks of life who have a strong interest in helping people help themselves achieve optimal health and quality of life through peer-to-peer health information, education, and support for those in need. Our team is comprised primarily of volunteers who believe in the value of sharing their individually-acquired health information with others, as well as a small number of advisers.
                    </p>
                </header>

                {/* Team Sections */}
                <TeamSection title="Board" members={teamData.board} />
                <TeamSection title="Management" members={teamData.management} />
                <TeamSection title="Technology" members={teamData.technology} />
                <TeamSection title="Product" members={teamData.product} />
                <TeamSection title="Privacy & Security Council" members={teamData.privacySecurity} />
                <TeamSection title="Marketing and Membership" members={teamData.marketing} />
                <TeamSection title="Legal" members={teamData.legal} />
                <TeamSection title="Human Resources" members={teamData.humanResources} />
                <TeamSection title="Development/Donor Relations" members={teamData.development} />
                <TeamSection title="Programs" members={teamData.programs} />

                {/* Footer Links */}
                <div className="team-links">
                    <Link to="/about/program-council" className="team-links__link">
                        Program Council &gt;&gt;
                    </Link>

                    <Link to="/meet-team-advisory-board" className="team-links__link">
                        Advisory Board &gt;&gt;
                    </Link>
                </div>
                {/* Footer CTA */}
                <section className="about-footer-cta">
                <p className="about-footer-cta__text">
                    {teamData.footerCta.text.split("\n").map((line, index) => (
                    <span key={index}>
                        {line}
                        {index === 0 && <br />}
                    </span>
                    ))}
                </p>
                <Link to="/signup" className="about-footer-cta__button">
                    {teamData.footerCta.buttonText}
                </Link>
                </section>
            </div>
        </div>
    );
}