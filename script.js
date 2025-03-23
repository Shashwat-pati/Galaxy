// Display the name dynamically from URL
window.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get("name");

    const greetingElement = document.getElementById("greeting");
    const contentElement = document.querySelector(".content");

    if (greetingElement && name) {
        greetingElement.innerHTML = `Dear&nbsp&nbsp;${name},`;
    }

    // Enhanced Invitation Content
    const invitationContent = `
    <div style="font-size: 12px; line-height: 1.6; max-height: 10rem">
        <div style="font-size: 10px; font-style:bold ">Camera ready hai, bas aapka swag chahiye!</strong>📷✨
        </div>
        
        <br>
        <text style="font-style:italic">
        💫 Cheers peg se shuru karenge aur pic kheechne k nashe mein kho jaenge...
        </text>
        <br>

        <text style="font-style:italic">
        Jinke DP pe hamesha car hoti hai, Wo bhi photoshoot mein model banke aayenge! 
        </text>😂📷
        <br>
        <text style="font-style:italic">
        Jo khud ki photo lene se darte hain, Aaj wo bhi <strong>'Click one more'</strong> chillayenge! 
        </text>🤭😎 
        </div>
        <br>

        <strong><p style="font-size:14px;">Mudde ki Baat!</p></strong>
        <div style="display: flex; flex-direction: column; align-items: flex-start; padding-left: 40px; line-height: ;font-size:14px;">
            <div>🎯 <strong>Date:</strong> 24.03.2025</div>
            <div>🕒 <strong>Time:</strong> 15:00 hrs</div>
            <div>📍 <strong>Venue:</strong> E-learning Centre</div>
            <div>👔 <strong>Dress Code:</strong> Aapke Pasandida Vastra</div>
        </div>
        
        <br>
        <div style="font-size:16px; font-style:italic;">
        ⭐️Toh aa jana, swag dikhane, yaadein banane, aur photos mein star banne ka sapna sach karwane! 📸🔥😎
        </div>
        </div>
    `;

    // Apply the content dynamically
    if (contentElement) {
        contentElement.innerHTML = invitationContent;
    }

    // Crackers animation
    const crackerContainer = document.querySelector(".cracker-container");

    function createCracker() {
        const cracker = document.createElement("div");
        cracker.classList.add("cracker");
        cracker.style.left = `${Math.random() * 100}vw`;
        cracker.style.animationDuration = `${Math.random() * 3 + 2}s`;

        crackerContainer.appendChild(cracker);

        setTimeout(() => {
            cracker.remove();
        }, 5000);
    }

    setInterval(createCracker, 200);
});

{
    /* <text style="font-style:italic">
        Wahi log sabse zyada candid maarenge, Jo group photo mein bhi border pe khade hote hain! 
</text>😜🔥 */
}
