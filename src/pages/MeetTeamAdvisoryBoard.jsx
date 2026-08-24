import React from "react";
import "./MeetTeamAdvisoryBoard.css";

export default function AdvisoryBoard() {
  return (
    <div className="ab-page">
      <div className="ab-container">
        <section className="ab-intro">
          <h1 className="ab-title">Advisory Board</h1>
        </section>

        <section className="ab-members">

          <article className="ab-card ab-member">
            <h2 className="ab-memberName">Ann Burroughs</h2>
            <p>
              For 25 years, Ann has been an innovator in the social sector and has focused on leveraging organizations and leaders to bring solutions to scale and to create social impact in communities around the world. She is a Senior Consultant at Social Sector Partners, and prior to this was the Executive Director of the Taproot Foundation in Los Angeles, the Executive Director of LA Works, and the National Media Director for Amnesty International USA.
            </p>
            <p>
              She has also worked as a consultant to the Rockefeller Foundation in their Communications for Social Change Initiative, to HandsOn Network in their corporate engagement program, and to the government in South Africa, where she provided strategic communications support for presidential visits to the U.S., including the Farewell State Visit of President Nelson Mandela.
            </p>
            <p>
              Originally from South Africa, Ann is Chair of the Board of Directors for Amnesty International USA (AIUSA).
            </p>
          </article>

          <article className="ab-card ab-member">
            <h2 className="ab-memberName">David Zomaya</h2>
            <p>
              David is a technical support representative and subject matter expert for a power protection company. His academic background includes an associate’s degree with a certificate in management and marketing, and he is currently working on a bachelor’s degree. David enjoys doing his part to make the world a better place.
            </p>
          </article>

          <article className="ab-card ab-member">
            <h2 className="ab-memberName">Sam Minster</h2>
            <p>
              Sam Minster is an award-winning marketing and creative professional with almost 30 years of experience in designing, promoting, and protecting many of the top worldwide brands. A recent medical experience with his daughter created a desire in him to help make a difference in people’s lives, which is why he volunteers his time with HHP.
            </p>
            <p>
              A graduate of UCSB, he has been married for 23 years and has two children. When he’s not on the ice getting pucks to the face or practicing karate, he’s playing drums, playing guitar, and writing.
            </p>
          </article>

          <article className="ab-card ab-member">
            <h2 className="ab-memberName">Lorenzo Fritzsch</h2>
            <p>
              Lorenzo is a mobile developer who wants to use his knowledge as a software developer to help people. That’s why he joined HHP — to support people in one of the most important areas of life: health. He is also the CTO of a startup focused on helping elderly individuals with technology.
            </p>
            <p>
              He is very passionate about music and especially enjoys jazz and playing his guitar.
            </p>
          </article>

        </section>
      </div>
    </div>
  );
}
