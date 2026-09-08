/**
 * Community Voices — story data
 *
 * Content source: the published HHP page at humanhealthproject.org/narratives/
 * Stories, titles, tags and pull-quotes are transcribed from that page and kept
 * in the same order. This is HHP's own published content being carried over to
 * the React site — it is not invented sample text.
 *
 * This file is a temporary stand-in for the Google Sheet feed. When that
 * integration lands, this module should be replaced by the fetched data; the
 * shape below is what the view expects, so keeping it stable will make the
 * swap straightforward.
 *
 * Stories are anonymous. There is deliberately no author field, and one should
 * not be added.
 *
 * Shape:
 *   id            string    stable slug, used for the anchor link
 *   tags          string[]  category labels, rendered as a pill above the title
 *   title         string
 *   quote         string    pull-quote shown while the card is collapsed
 *   setup         string[]  "The Setup" — one entry per paragraph
 *   turningPoint  string[]  "The Turning Point" — one entry per paragraph
 *   wisdom        string[]  "The Wisdom" — one entry per paragraph
 */

const sampleStories = [
  {
    id: "a-daughter-becomes-her-fathers-advocate",
    tags: ["Caregiving", "Type 2 Diabetes", "Heart Disease"],
    title: "A Daughter Becomes Her Father’s Advocate",
    quote:
      "His glucose used to reach around 12 on a good day. Now it’s consistently below 7 — and he’s no longer closed off.",
    setup: [
      "This is my experience as a daughter and caregiver navigating my father’s diagnosis and ongoing management of type 2 diabetes, hypertension and heart disease. I’m in my 20s, and at the time all of this started, I was just trying to figure out my own life: career, finances and everything that comes with hard economic times. I never imagined I would also become a full time caregiver while still trying to build my own future.",
      "My father, who is in his 60s, began showing symptoms that slowly built up over time. He had blurred vision and would struggle to see notifications on his phone. He also became easily fatigued and experienced breathing difficulties at night. He often brushed it off, saying it was just age or something minor that came and went. Because the symptoms weren’t constant, none of us fully understood how serious things were becoming. But over about a year, it became clear something was wrong.",
      "I also didn’t know how to navigate the healthcare system and insurance eligibility as an adult. My parents had always handled everything before this, so I suddenly had to learn how to figure out insurance, where to seek help and how to actually advocate for a patient in real time.",
    ],
    turningPoint: [
      "The turning point came when my father became extremely ill and had to be rushed to the hospital in an emergency at night. After admission, he was diagnosed with type 2 diabetes, hypertension and heart disease. In that moment, everything hit me at once — overwhelm, guilt, and the need to stay present and advocate for him, especially when parts of the care system felt dismissive or judgmental.",
      "From that point, I knew I couldn’t just rely on hospital visits alone. I started documenting his blood pressure, temperature, weight and oxygen levels daily so clinicians could track his progress properly. I began attending all his monthly checkups with him, learning how to ask questions and making sure we understood every step of his treatment.",
      "Because I needed clearer guidance, I started looking for real patient experiences and trusted health education beyond clinical explanations. That’s when I found Human Health Project. What made a difference was not just the information itself, but the way it explained the why behind lifestyle changes. It helped me translate medical advice into something my father could actually understand and apply. Slowly, things started to change.",
    ],
    wisdom: [
      "The biggest lesson I’ve learned is that symptoms that seem small or occasional should never be ignored — especially in older adults. Blurred vision, fatigue and nighttime breathing issues were early warning signs of multiple serious conditions. Advocating for someone’s health is not just about going to the hospital. It’s about documenting, asking questions, following through and sometimes speaking up even when the system feels intimidating.",
      "Over time, my father’s condition improved significantly. His glucose levels, which used to reach around 12 on a good day, are now consistently below 7. His ejection fraction has improved and his blood pressure is much more stable. Just as importantly, his attitude has changed — he communicates when he is not feeling well, asks questions and actively participates in his own care. The guidance we found through Human Health Project helped us bridge the gap between medical instructions and real life understanding. It made us feel less alone in a journey that initially felt overwhelming. We are still learning, but we are no longer lost in it.",
    ],
  },
  {
    id: "a-routine-check-up-that-changed-everything",
    tags: ["Prevention", "Lifestyle"],
    title: "A Routine Check-Up That Changed Everything",
    quote:
      "Don’t wait until a health issue becomes serious before taking action.",
    setup: [
      "A few years ago, I started feeling tired more often than usual. I also noticed that I was gaining weight slowly and had less energy throughout the day. At first, I assumed it was just stress from work and a busy schedule. When I looked online, I found a lot of conflicting information about diet, exercise, and health risks, which made it difficult to know what advice to trust. I knew I should probably pay more attention to my health, but I was not sure where to start.",
    ],
    turningPoint: [
      "The turning point came during a routine health check-up when my doctor explained that some of my results suggested I was at risk of developing health problems like type 2 diabetes if I did not make changes.",
    ],
    wisdom: [
      "My advice is to seek information from trusted sources, ask questions when something is unclear, and not wait until a health issue becomes serious before taking action.",
    ],
  },
  {
    id: "when-overwork-caught-up-with-me",
    tags: ["Lifestyle", "Recovery"],
    title: "When Overwork Caught Up With Me",
    quote:
      "The revelation that changed my life was realizing that my habits and lifestyle are what affect my health.",
    setup: [
      "The first question I asked myself was what was happening to me, and I proceeded to search for information on websites. I found too much information and advice to seek medical help. Once I had a medical diagnosis, I searched websites for information and real-life cases of people who had gone through the same thing.",
    ],
    turningPoint: [
      "The revelation that changed my life was realizing that my habits, my lifestyle, like overworking and studying, are what affect my health. Conversations with my doctor and family were key to understanding and starting the path to healing. I overcame the obstacles by using information I found and following all the medical steps and recommendations.",
    ],
    wisdom: [
      "The most important thing is finding accurate information — and ideally, finding a place where you can get advice and everything you need to know about your illness, so you can have peace of mind and know you’re not alone and have support. At this point in my life, I would say that Human Health Project has information, advice, and help for a better quality of life.",
    ],
  },
  {
    id: "learning-to-pay-attention-before-its-serious",
    tags: ["Wellbeing", "Small Steps"],
    title: "Learning to Pay Attention Before It’s Serious",
    quote:
      "You don’t have to be perfect with your health. You just have to start paying attention — one step at a time.",
    setup: [
      "I haven’t dealt with a major health issue, but I’ve definitely had moments where I realized I wasn’t paying enough attention to my health. I used to think that if nothing was seriously wrong, then I was fine. But there were times when I felt tired, stressed, or just off, and I didn’t really know what to do about it. Looking things up online sometimes made it more confusing because there was so much different advice. It made me realize how easy it is to ignore small things until they start affecting your daily life.",
    ],
    turningPoint: [
      "The biggest shift for me was understanding that health is something you have to take care of before there’s a big problem. I started paying more attention to basic things like sleeping better, drinking enough water, moving more, and not brushing off stress. I also learned that it’s okay to ask questions or talk to someone instead of trying to figure everything out alone. That made health feel less overwhelming and more like something I could manage little by little.",
    ],
    wisdom: [
      "One thing I’d tell someone else is not to wait until things get really bad to start taking care of yourself. Even small changes can help. Listen to your body, trust yourself when something feels off, and don’t be afraid to ask for help or look for reliable information. You don’t have to be perfect with your health. You just have to start paying attention and take it one step at a time.",
    ],
  },
  {
    id: "the-answer-was-simpler-than-i-feared",
    tags: ["Diagnosis", "Health Anxiety"],
    title: "The Answer Was Simpler Than I Feared",
    quote:
      "I wish I’d known not to jump to conclusions and to handle it more calmly.",
    setup: [
      "I have been fortunate enough not to face any major health issues, but there was a summer where I struggled to identify the source of symptoms like constant headaches that weren’t migraines, gastric issues, and general discomfort like my heart rate and body heat rising.",
    ],
    turningPoint: [
      "I was very paranoid and read through dozens of articles and visited a few doctors, but nothing seemed to work — it only boosted my anxiety. I had a terrible back cramp that caused me to go to the Urgent Care Clinic, and they were the ones who finally identified the simple cause; far more simple than I’d been theorizing.",
    ],
    wisdom: [
      "I wish I’d known not to jump to conclusions and to handle it more calmly. The doctors I saw were specialists, so I should have visited a general practitioner first. If I saw a stranger struggling with the same issue, I’d suggest the same simple tests that I took to identify the problem.",
    ],
  },
  {
    id: "years-of-exhaustion-finally-explained",
    tags: ["Chronic Fatigue", "Diagnosis"],
    title: "Years of Exhaustion, Finally Explained",
    quote:
      "I received a clear diagnosis, which validated years of unexplained suffering. Just having that knowledge brought me peace.",
    setup: [
      "Before I understood the cause of my chronic fatigue, I felt very alone. I felt tired all the time no matter how much sleep I got. I constantly oscillated between self-invalidation and steadfast resolve. When chronic fatigue (and other symptoms) cannot be explained by basic lab values, doctors aren’t too sure what to do with you. The most straightforward path I recommend based on my experience is asking for a particular test or study. It may not improve your doctor’s ability to help, but it will save you time if you end up seeing a specialist.",
    ],
    turningPoint: [
      "The turning point for my chronic fatigue journey, at least in terms of understanding the cause, was getting a sleep study. I received a clear diagnosis, which validated years of unexplained suffering. I wasn’t “cured,” but just having this knowledge brought me some peace.",
    ],
    wisdom: [
      "Looking back, I would recommend pursuing your health journey at a pace that’s doable for you. I felt like I needed to get it all done ASAP, which often left me feeling burnt out and exacerbated my symptoms. Also, don’t be afraid to ask your doctors the tough questions. If they cannot or are unwilling to answer them, I have found I am better off getting on the waitlist for another one.",
    ],
  },
  {
    id: "healthcare-is-a-dialogue-not-a-checkbox",
    tags: ["Self-Advocacy", "Fatigue"],
    title: "Healthcare Is a Dialogue, Not a Checkbox",
    quote:
      "Feeling guilty over feeling ill was only preventing me from getting the help I needed. Needing help is human!",
    setup: [
      "It was easy to dismiss my own symptoms. Fatigue was just a result of a poor night’s sleep. Lack of concentration was written off as boredom. Over time, I began wondering whether I should truly be feeling consistently exhausted, even after trying lifestyle changes.",
    ],
    turningPoint: [
      "Fatigue, brain fog, and other such symptoms are very general, and a quick web search turns up everything from workplace burnout to cancer. My first major step forward was learning to stop blaming myself. Feeling guilty over feeling ill was only preventing me from getting the help I needed. Needing help is human! The next step was to be able to articulate my concerns to my physician while also knowing what questions to ask of them. Luckily, my situation was quickly sorted out once the correct tests were ordered.",
    ],
    wisdom: [
      "In order to get the care I needed, I had to be my own advocate, stand up for myself, and truly engage in my healthcare. I learned that healthcare is a dialogue, not a check-the-box type form.",
    ],
  },
  {
    id: "everything-changed-in-an-instant",
    tags: ["Caregiving", "Spinal Cord Injury"],
    title: "Everything Changed in an Instant",
    quote:
      "The challenges may change your life, but they do not have to define your future.",
    setup: [
      "Everything changed in an instant when a random act of violence left my wife with a spinal cord injury. Before that day, our family lived what we considered a normal life. We never imagined that disability, rehabilitation, medical equipment, caregiver support, insurance battles, and healthcare navigation would suddenly become central parts of our daily reality.",
      "The first obstacle wasn’t just the injury itself — it was realizing how difficult it was to find clear answers about what came next. Once the immediate medical crisis had passed, we expected there would be a roadmap for recovery and long-term support. Instead, we found ourselves overwhelmed by a healthcare system that often felt fragmented, confusing, and difficult to navigate. Every step seemed to involve referrals, approvals, paperwork, waiting lists, and barriers that delayed access to services we desperately needed.",
      "Emotionally, we were trying to process the trauma of what had happened while simultaneously becoming experts in subjects we had never needed to understand before. It often felt like we were operating without a guidebook. What surprised me most was how invisible this world had been before — people living with disabilities, caregivers, and families navigating complex medical conditions had been around us all along, yet we had little understanding of the challenges they faced.",
    ],
    turningPoint: [
      "The turning point came when we stopped waiting for the system to guide us and realized that we would need to become our own advocates. We learned that many of the most important services, resources, and accommodations only became available when we actively asked questions, researched options, and pushed for answers.",
      "One of the biggest breakthroughs was understanding that information itself is a form of empowerment. As we connected with other families, individuals living with spinal cord injuries, disability advocates, and support organizations, we began learning from people who had already traveled the road we were on. We also learned that recovery wasn’t just about physical health — the emotional and mental health challenges facing both the injured person and their family were just as important.",
      "The most important realization was that while we could not change what had happened, we could change how we responded to it. That shift — from feeling powerless to becoming active advocates for our own care — changed everything.",
    ],
    wisdom: [
      "The one thing I wish I had known is that you do not have to navigate a major health challenge alone. There are people, organizations, and communities that genuinely want to help, but you often have to reach out and ask for that support. Become your own advocate and never stop asking questions. Don’t be afraid to seek second opinions, connect with others who have lived through similar experiences, and explore every available resource. Knowledge can be just as important as treatment.",
      "Be patient with yourself. Progress is rarely a straight line, and setbacks do not mean failure. Focus on small victories, celebrate every step forward, and remember that resilience is built one day at a time. The challenges may change your life, but they do not have to define your future.",
    ],
  },
  {
    id: "i-wasnt-being-dramatic-after-all",
    tags: ["Rare Condition", "Validation"],
    title: "I Wasn’t Being Dramatic After All",
    quote:
      "People live long, full, happy lives with this — and I intend to be one of them.",
    setup: [
      "For years, something was always a little off. Tired in a way that didn’t make sense, sick more than I should have been, never quite right but never bad enough to stop. I assumed I was being dramatic or overworked. When things finally got bad enough that I sought help, I felt like I was on an uphill trajectory. Then I found out my labs said otherwise. I felt better, but I was actually getting worse. That gap between how I felt and what was really happening was where my health journey actually began.",
    ],
    turningPoint: [
      "The turning point was sitting in a specialist’s office and watching her react to things I had long written off as just how my body worked. Things I had normalized, minimized, and never thought to mention first. When those things drew concern instead of indifference, something shifted. I wasn’t being dramatic. There was actually something wrong, and it had probably been wrong for a long time. That was the moment I stopped second-guessing myself and started taking my own symptoms seriously.",
    ],
    wisdom: [
      "You are not alone. I know that sounds like something printed on a pamphlet, but I mean it in a specific way. My condition is rare, and the version I have is rarer still. That kind of diagnosis can make you feel like you are an island. But people live long, full, happy lives with this, and I intend to be one of them. Whatever you are navigating, find the people who are navigating it too. They exist, and they matter to your journey.",
    ],
  },
];

export default sampleStories;
