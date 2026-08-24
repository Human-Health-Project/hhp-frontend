// src/layout/Footer.jsx
import { Link } from "react-router-dom";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Footer.css";

import AlumniBadge from "../assets/footer/alumni_badge.png";

const fundData = [
  { name: "Programs", value: 88.2, color: "#1683ff" },
  { name: "Administration", value: 2.1, color: "#8bc34a" },
  { name: "Fundraising", value: 9.7, color: "#f4c400" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="hhpFooter">
      <div className="hhpFooterInner">
        {/* ========= COLUMN 1 : FUNDS ========= */}
        <div className="hhpFooterCol hhpFooterColCenter">
          <h3 className="hhpFooterHeading">How we use funds</h3>

          <div className="hhpDonutWrap">
            <div className="hhpDonutBox">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={fundData}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={80}
                    dataKey="value"
                    paddingAngle={2}
                    labelLine={false}
                    label={({ percent }) => `${(percent * 100).toFixed(1)}%`}
                    isAnimationActive={false}
                  >
                    {fundData.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Legend */}
            <div className="hhpLegend">
              <div className="hhpLegendRow hhpFundsPrograms">
                <span className="hhpFundsPct">88.2%</span> Programs
              </div>
              <div className="hhpLegendRow hhpFundsAdmin">
                <span className="hhpFundsPct">2.1%</span> Administration
              </div>
              <div className="hhpLegendRow hhpFundsFundraising">
                <span className="hhpFundsPct">9.7%</span> Fundraising
              </div>
            </div>
          </div>
        </div>
        <div className="hhpFooterDivider" />
        {/* ========= COLUMN 2 : ABOUT ========= */}
        <div className="hhpFooterCol hhpFooterColCenter">
          <h3 className="hhpFooterHeading">About</h3>

          <p className="hhpAboutText">
            Human Health Project is a Northern Ireland (UK) registered charity,
            a tax exempt 501(c)(3) Public Charity in the US and a Company
            Limited by Guarantee in the Republic of Ireland.
          </p>

          <p className="hhpAboutMeta">
            NI Charity No. 101323 | EIN: 71-0891805 | ROI Company No. 492908
          </p>

          {/* Candid + Alumni Badge Row */}
          <div className="hhpBadgeRow">
            {/* Candid badge */}
            <a
              href="https://www.guidestar.org/profile/shared/794760e0-73b5-46e6-a96d-03293dea981d"
              target="_blank"
              rel="noreferrer"
              className="hhpCandidLink"
              title={`Platinum Transparency ${year} – Candid`}
              aria-label={`Platinum Transparency ${year} – Candid`}
            >
              <div className="hhpCandidBadge">
                <div className="hhpCandidBadgeInner">
                  <div className="hhpCandidTop">Platinum</div>
                  <div className="hhpCandidMid">Transparency</div>
                  <div className="hhpCandidYear">{year}</div>
                  <div className="hhpCandidBottom">Candid</div>
                </div>
              </div>
            </a>

            {/* Alumni badge image */}
            <img
              src={AlumniBadge}
              alt="Alumni Badge"
              className="hhpAlumniBadge"
            />
          </div>
        </div>
        <div className="hhpFooterDivider" />
        {/* ========= COLUMN 3 : CONNECT + LINKS ========= */}
        <div className="hhpFooterCol hhpFooterColCenter">
          <h3 className="hhpFooterHeading">Connect with us</h3>

          {/* Social icons with tooltips */}
          <div className="hhpSocialRow">
            <a
              href="https://www.facebook.com/humanhealthproject"
              target="_blank"
              rel="noreferrer"
              className="hhpSocialBtn hhpSocialFb"
              title="Facebook"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://x.com/HHPxUS"
              target="_blank"
              rel="noreferrer"
              className="hhpSocialBtn hhpSocialX"
              title="X (Twitter)"
              aria-label="X (Twitter)"
            >
              <FaXTwitter />
            </a>

            <a
              href="https://www.instagram.com/humanhealthproject_us/"
              target="_blank"
              rel="noreferrer"
              className="hhpSocialBtn hhpSocialIg"
              title="Instagram"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/company/hhp/"
              target="_blank"
              rel="noreferrer"
              className="hhpSocialBtn hhpSocialIn"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>

          <h3 className="hhpFooterHeading hhpQuickLinksTitle">Quick Links</h3>

          <div className="hhpFooterLinks">
            <Link className="hhpFooterLink" to="/contact">
              Contact Us
            </Link>
            <a
              className="hhpFooterLink"
              href="https://humanhealthproject.org/blog/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blogs
            </a>
            <Link className="hhpFooterLink" to="/latest-news">
              Latest News
            </Link>
            <Link className="hhpFooterLink" to="/terms">
              Terms of Service
            </Link>
            <Link className="hhpFooterLink" to="/privacy">
              Privacy Policy
            </Link>
            <Link className="hhpFooterLink" to="/medical-disclaimer">
              Medical Disclaimer
            </Link>
            <Link className="hhpFooterLink" to="/how-to-help/intern">
              Intern With Us
            </Link>
          </div>
        </div>
      </div>

      {/* ========= FOOTER BOTTOM ========= */}
      <div className="hhpFooterBottom">
        © {year} Human Health Project. All Rights Reserved.
      </div>
    </footer>
  );
}
