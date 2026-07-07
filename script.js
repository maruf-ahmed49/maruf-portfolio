function openModal(imageSrc) {
  document.getElementById("imageModal").style.display = "block";
  document.getElementById("modalImage").src = imageSrc;
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

function openServiceModal(serviceType) {
    const modal = document.getElementById('serviceModal');
    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalBody');
    
    if(serviceType === 'social') {
        title.innerText = "Social Media Campaign & Marketing";
        title.style.fontSize = "22px";
        title.style.marginBottom = "15px";
        title.style.color = "#00abf0";

        body.innerHTML = `
            <div style="max-height: 55vh; overflow-y: auto; padding-right: 8px; scrollbar-width: thin;">
                
                <div style="margin-bottom: 12px;">
                    <h4 style="color: #fff; font-size: 14.5px; margin-bottom: 4px; font-weight: 600;">What is Social Media Marketing?</h4>
                    <p style="color: #b0c4de; font-size: 12.5px; line-height: 1.5; margin: 0;">
                        Using platforms like Facebook, Instagram, LinkedIn, and Twitter to promote your business, connect with your target audience, and build a strong online presence.
                    </p>
                </div>

                <div style="margin-bottom: 16px;">
                    <h4 style="color: #fff; font-size: 14.5px; margin-bottom: 4px; font-weight: 600;">Why is it Important?</h4>
                    <p style="color: #b0c4de; font-size: 12.5px; line-height: 1.5; margin: 0;">
                        A well-optimized campaign drives high-quality traffic, increases brand loyalty, boosts user engagement, and rapidly converts casual visitors into paying customers.
                    </p>
                </div>

                <div>
                    <h4 style="color: #00abf0; font-size: 14.5px; margin-bottom: 8px; font-weight: 600;">What I Will Do For You:</h4>
                    <ul style="list-style-type: none; padding: 0; margin: 0;">
                        <li style="margin-bottom: 6px; color: #b0c4de; font-size: 12px; display: flex; align-items: flex-start; line-height: 1.4;">
                            <span style="color: #00abf0; margin-right: 6px;">✔</span> Target audience research & strategic content planning.
                        </li>
                        <li style="margin-bottom: 6px; color: #b0c4de; font-size: 12px; display: flex; align-items: flex-start; line-height: 1.4;">
                            <span style="color: #00abf0; margin-right: 6px;">✔</span> Designing eye-catching visuals & high-converting ad copies.
                        </li>
                        <li style="margin-bottom: 6px; color: #b0c4de; font-size: 12px; display: flex; align-items: flex-start; line-height: 1.4;">
                            <span style="color: #00abf0; margin-right: 6px;">✔</span> Managing organic page growth & boosting customer engagement.
                        </li>
                        <li style="margin-bottom: 6px; color: #b0c4de; font-size: 12px; display: flex; align-items: flex-start; line-height: 1.4;">
                            <span style="color: #00abf0; margin-right: 6px;">✔</span> Setting up laser-targeted paid ad campaigns to maximize ROI.
                        </li>
                    </ul>
                </div>

            </div>
        `;
    }
    else if(serviceType === 'seo') {
        title.innerText = "SEO Optimization";
        title.style.fontSize = "22px";
        title.style.marginBottom = "15px";
        title.style.color = "#00abf0";

        body.innerHTML = `
            <div style="max-height: 55vh; overflow-y: auto; padding-right: 8px; scrollbar-width: thin;">
                
                <div style="margin-bottom: 12px;">
                    <h4 style="color: #fff; font-size: 14.5px; margin-bottom: 4px; font-weight: 600;">What is SEO Optimization?</h4>
                    <p style="color: #b0c4de; font-size: 12.5px; line-height: 1.5; margin: 0;">
                        SEO (Search Engine Optimization) is the process of optimizing your website to rank higher on Google search results, making it easier for customers to find you organically.
                    </p>
                </div>

                <div style="margin-bottom: 16px;">
                    <h4 style="color: #fff; font-size: 14.5px; margin-bottom: 4px; font-weight: 600;">Why is it Important?</h4>
                    <p style="color: #b0c4de; font-size: 12.5px; line-height: 1.5; margin: 0;">
                        Higher search rankings bring continuous free, organic traffic to your site, build immense brand trust, and generate high-quality leads without relying constantly on paid ads.
                    </p>
                </div>

                <div>
                    <h4 style="color: #00abf0; font-size: 14.5px; margin-bottom: 8px; font-weight: 600;">What I Will Do For You:</h4>
                    <ul style="list-style-type: none; padding: 0; margin: 0;">
                        <li style="margin-bottom: 6px; color: #b0c4de; font-size: 12px; display: flex; align-items: flex-start; line-height: 1.4;">
                            <span style="color: #00abf0; margin-right: 6px;">✔</span> Profitable & high-search volume keyword research.
                        </li>
                        <li style="margin-bottom: 6px; color: #b0c4de; font-size: 12px; display: flex; align-items: flex-start; line-height: 1.4;">
                            <span style="color: #00abf0; margin-right: 6px;">✔</span> On-Page SEO (Meta tags, headings, content optimization).
                        </li>
                        <li style="margin-bottom: 6px; color: #b0c4de; font-size: 12px; display: flex; align-items: flex-start; line-height: 1.4;">
                            <span style="color: #00abf0; margin-right: 6px;">✔</span> Technical SEO & website speed enhancement.
                        </li>
                        <li style="margin-bottom: 6px; color: #b0c4de; font-size: 12px; display: flex; align-items: flex-start; line-height: 1.4;">
                            <span style="color: #00abf0; margin-right: 6px;">✔</span> Google Search Console & Analytics setup with regular reporting.
                        </li>
                    </ul>
                </div>

            </div>
        `;
    }
    else if(serviceType === 'paid-ads') {
        title.innerText = "Facebook Ads & Boosting Campaign";
        title.style.fontSize = "22px";
        title.style.marginBottom = "15px";
        title.style.color = "#00abf0";

        body.innerHTML = `
            <div style="max-height: 55vh; overflow-y: auto; padding-right: 8px; scrollbar-width: thin;">
                
                <div style="margin-bottom: 12px;">
                    <h4 style="color: #fff; font-size: 14.5px; margin-bottom: 4px; font-weight: 600;">What is Paid Advertising?</h4>
                    <p style="color: #b0c4de; font-size: 12.5px; line-height: 1.5; margin: 0;">
                        Paid Ads or Boosting Campaigns involve paying platforms like Facebook and Instagram to instantly display your products or services directly to a highly targeted audience.
                    </p>
                </div>

                <div style="margin-bottom: 16px;">
                    <h4 style="color: #fff; font-size: 14.5px; margin-bottom: 4px; font-weight: 600;">Why is it Important?</h4>
                    <p style="color: #b0c4de; font-size: 12.5px; line-height: 1.5; margin: 0;">
                        It is the fastest way to generate instant sales, drive conversions, launch new products, and reach thousands of potential buyers within hours.
                    </p>
                </div>

                <div>
                    <h4 style="color: #00abf0; font-size: 14.5px; margin-bottom: 8px; font-weight: 600;">What I Will Do For You:</h4>
                    <ul style="list-style-type: none; padding: 0; margin: 0;">
                        <li style="margin-bottom: 6px; color: #b0c4de; font-size: 12px; display: flex; align-items: flex-start; line-height: 1.4;">
                            <span style="color: #00abf0; margin-right: 6px;">✔</span> Advanced custom & Lookalike audience targeting.
                        </li>
                        <li style="margin-bottom: 6px; color: #b0c4de; font-size: 12px; display: flex; align-items: flex-start; line-height: 1.4;">
                            <span style="color: #00abf0; margin-right: 6px;">✔</span> High-converting sales funnel creation & Meta Pixel setup.
                        </li>
                        <li style="margin-bottom: 6px; color: #b0c4de; font-size: 12px; display: flex; align-items: flex-start; line-height: 1.4;">
                            <span style="color: #00abf0; margin-right: 6px;">✔</span> A/B testing of ad copies and continuous budget optimization.
                        </li>
                        <li style="margin-bottom: 6px; color: #b0c4de; font-size: 12px; display: flex; align-items: flex-start; line-height: 1.4;">
                            <span style="color: #00abf0; margin-right: 6px;">✔</span> Running laser-focused retargeting ads to maximize your total sales.
                        </li>
                    </ul>
                </div>

            </div>
        `;
    }
    else if(serviceType === 'ecommerce') {
        title.innerText = "E-commerce Website Development";
        title.style.fontSize = "22px";
        title.style.marginBottom = "15px";
        title.style.color = "#00abf0";

        body.innerHTML = `
            <div style="max-height: 55vh; overflow-y: auto; padding-right: 8px; scrollbar-width: thin;">
                
                <div style="margin-bottom: 12px;">
                    <h4 style="color: #fff; font-size: 14.5px; margin-bottom: 4px; font-weight: 600;">What is E-commerce Website Development?</h4>
                    <p style="color: #b0c4de; font-size: 12.5px; line-height: 1.5; margin: 0;">
                        An E-commerce website is a fully dynamic online store equipped with a product catalog, shopping cart, and payment options, allowing customers to buy directly from you.
                    </p>
                </div>

                <div style="margin-bottom: 16px;">
                    <h4 style="color: #fff; font-size: 14.5px; margin-bottom: 4px; font-weight: 600;">Why is it Important?</h4>
                    <p style="color: #b0c4de; font-size: 12.5px; line-height: 1.5; margin: 0;">
                        It breaks geographical boundaries, expands your target market globally, and automates your retail or product sales process 24/7 without requiring a physical shop.
                    </p>
                </div>

                <div>
                    <h4 style="color: #00abf0; font-size: 14.5px; margin-bottom: 8px; font-weight: 600;">What I Will Do For You:</h4>
                    <ul style="list-style-type: none; padding: 0; margin: 0;">
                        <li style="margin-bottom: 6px; color: #b0c4de; font-size: 12px; display: flex; align-items: flex-start; line-height: 1.4;">
                            <span style="color: #00abf0; margin-right: 6px;">✔</span> Advanced product listing with search filters and cart management.
                        </li>
                        <li style="margin-bottom: 6px; color: #b0c4de; font-size: 12px; display: flex; align-items: flex-start; line-height: 1.4;">
                            <span style="color: #00abf0; margin-right: 6px;">✔</span> Secure integration with Bkash, Nagad, Rocket, or international payment systems.
                        </li>
                        <li style="margin-bottom: 6px; color: #b0c4de; font-size: 12px; display: flex; align-items: flex-start; line-height: 1.4;">
                            <span style="color: #00abf0; margin-right: 6px;">✔</span> User-friendly checkout page and comprehensive admin panel for tracking orders.
                        </li>
                    </ul>
                </div>

            </div>
        `;
    }
    else if(serviceType === 'website') {
        title.innerText = "Business Website Development";
        title.style.fontSize = "22px";
        title.style.marginBottom = "15px";
        title.style.color = "#00abf0";

        body.innerHTML = `
            <div style="max-height: 55vh; overflow-y: auto; padding-right: 8px; scrollbar-width: thin;">
                
                <div style="margin-bottom: 12px;">
                    <h4 style="color: #fff; font-size: 14.5px; margin-bottom: 4px; font-weight: 600;">What is a Business Website?</h4>
                    <p style="color: #b0c4de; font-size: 12.5px; line-height: 1.5; margin: 0;">
                        A business website is a professional digital presence for your company, designed to showcase your services, build brand identity, and attract potential clients online.
                    </p>
                </div>

                <div style="margin-bottom: 16px;">
                    <h4 style="color: #fff; font-size: 14.5px; margin-bottom: 4px; font-weight: 600;">Why is it Important?</h4>
                    <p style="color: #b0c4de; font-size: 12.5px; line-height: 1.5; margin: 0;">
                        It builds trust with your customers, serves as a 24/7 digital office, and makes your business accessible to global clients, helping you generate leads consistently.
                    </p>
                </div>

                <div>
                    <h4 style="color: #00abf0; font-size: 14.5px; margin-bottom: 8px; font-weight: 600;">What I Will Do For You:</h4>
                    <ul style="list-style-type: none; padding: 0; margin: 0;">
                        <li style="margin-bottom: 6px; color: #b0c4de; font-size: 12px; display: flex; align-items: flex-start; line-height: 1.4;">
                            <span style="color: #00abf0; margin-right: 6px;">✔</span> Custom, modern, and professional UI/UX design.
                        </li>
                        <li style="margin-bottom: 6px; color: #b0c4de; font-size: 12px; display: flex; align-items: flex-start; line-height: 1.4;">
                            <span style="color: #00abf0; margin-right: 6px;">✔</span> Fully mobile-responsive and high-speed optimized layout.
                        </li>
                        <li style="margin-bottom: 6px; color: #b0c4de; font-size: 12px; display: flex; align-items: flex-start; line-height: 1.4;">
                            <span style="color: #00abf0; margin-right: 6px;">✔</span> Contact forms, map integration, and SEO-friendly structure.
                        </li>
                    </ul>
                </div>
            </div>
        `;
    }
    else if(serviceType === 'lead-generation') {
        title.innerText = "Lead Generation Campaign";
        title.style.fontSize = "22px";
        title.style.marginBottom = "15px";
        title.style.color = "#00abf0";

        body.innerHTML = `
            <div style="max-height: 55vh; overflow-y: auto; padding-right: 8px; scrollbar-width: thin;">
                
                <div style="margin-bottom: 12px;">
                    <h4 style="color: #fff; font-size: 14.5px; margin-bottom: 4px; font-weight: 600;">What is Lead Generation?</h4>
                    <p style="color: #b0c4de; font-size: 12.5px; line-height: 1.5; margin: 0;">
                        Lead generation is the process of identifying, attracting, and capturing interest from potential buyers to build a consistent pipeline of sales opportunities.
                    </p>
                </div>

                <div style="margin-bottom: 16px;">
                    <h4 style="color: #fff; font-size: 14.5px; margin-bottom: 4px; font-weight: 600;">Why is it Important?</h4>
                    <p style="color: #b0c4de; font-size: 12.5px; line-height: 1.5; margin: 0;">
                        It focuses your marketing efforts on prospects who are genuinely interested in your offer, saving time and resources while significantly boosting conversion rates and sales.
                    </p>
                </div>

                <div>
                    <h4 style="color: #00abf0; font-size: 14.5px; margin-bottom: 8px; font-weight: 600;">What I Will Do For You:</h4>
                    <ul style="list-style-type: none; padding: 0; margin: 0;">
                        <li style="margin-bottom: 6px; color: #b0c4de; font-size: 12px; display: flex; align-items: flex-start; line-height: 1.4;">
                            <span style="color: #00abf0; margin-right: 6px;">✔</span> Building high-quality, targeted B2B & B2C prospect lists.
                        </li>
                        <li style="margin-bottom: 6px; color: #b0c4de; font-size: 12px; display: flex; align-items: flex-start; line-height: 1.4;">
                            <span style="color: #00abf0; margin-right: 6px;">✔</span> Setting up high-converting landing pages & lead magnet funnels.
                        </li>
                        <li style="margin-bottom: 6px; color: #b0c4de; font-size: 12px; display: flex; align-items: flex-start; line-height: 1.4;">
                            <span style="color: #00abf0; margin-right: 6px;">✔</span> Designing email outreach & automated lead nurturing campaigns.
                        </li>
                        <li style="margin-bottom: 6px; color: #b0c4de; font-size: 12px; display: flex; align-items: flex-start; line-height: 1.4;">
                            <span style="color: #00abf0; margin-right: 6px;">✔</span> Cold email marketing & LinkedIn outreach setup to secure qualified calls.
                        </li>
                    </ul>
                </div>
            </div>
        `;
    }
    
    modal.style.display = 'flex';
}

function closeServiceModal() {
    document.getElementById('serviceModal').style.display = 'none';
}

window.onclick = function(event) {
    const serviceModal = document.getElementById('serviceModal');
    const imageModal = document.getElementById('imageModal');
    if (event.target == serviceModal) {
        serviceModal.style.display = 'none';
    }
    if (event.target == imageModal) {
        imageModal.style.display = 'none';
    }
}