import { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setResult("Sending...");

    const formData = new FormData(event.target);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // ================= EMAIL (WEB3FORMS) =================
    formData.append("access_key", "e72136e5-e0ff-45e0-8b88-c0f8c3c04b55");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Message sent successfully!");

        // ================= WHATSAPP =================
        const phoneNumber = "6285215958142";

        const text = encodeURIComponent(
          `Hello Harlan 👋

My name: ${name}
My email: ${email}

${message}`
        );

        const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;

        window.open(whatsappURL, "_blank");

        event.target.reset();
      } else {
        setResult("❌ Failed to send message");
      }
    } catch (error) {
      setResult("❌ Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20">

      <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
      <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Feel free to reach out for collaborations, project inquiries, or just to say hello. 
        i am always open to discussing new opportunities and bringing ideas to life through code.
        </p>
      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">

        <input
          type="hidden"
          name="subject"
          value="New message from portfolio - Harlan Gilbran"
        />

        <input
          type="hidden"
          name="from_name"
          value="Portfolio Contact Form"
        />

        <div className="grid grid-cols-auto gap-6 mt-10 mb-8 text-black">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <textarea
          rows="6"
          name="message"
          placeholder="Enter your message"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-6 text-black"
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="py-2 px-8 bg-black text-white rounded-full mx-auto block hover:bg-black/80 duration-300 disabled:opacity-50"
        >
          {loading ? "Sending..." : "Submit now"}
        </button>

        <p className="mt-4 text-center">{result}</p>
      </form>
    </div>
  );
}
