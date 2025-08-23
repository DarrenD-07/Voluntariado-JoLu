export default function Contactanos() {
return (
    <section className="p-10 bg-gray-100 text-gray-800 rounded-2xl shadow-md mt-10">
    <h2 className="text-3xl font-bold text-center mb-6">Contáctanos</h2>
    
    <p className="text-center mb-6">
        Si deseas más información, escríbenos o visita nuestras redes sociales:
    </p>

    <div className="flex flex-col md:flex-row justify-center gap-6">
        <a
        href="https://www.facebook.com/ejemplo"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
        >
        Facebook
        </a>

        <a
        href="https://www.instagram.com/ejemplo"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-pink-500 text-white rounded-xl shadow hover:bg-pink-600 transition"
        >
        Instagram
        </a>

        <a
        href="https://www.twitter.com/ejemplo"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-sky-500 text-white rounded-xl shadow hover:bg-sky-600 transition"
        >
        Twitter
        </a>
    </div>
    </section>
);
}
