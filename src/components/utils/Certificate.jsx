// certificate
import dicoding1 from "@/assets/img/certificate/dicoding.png"
import dicoding2 from "@/assets/img/certificate/dicoding2.jpeg"
import CertificateCard from "./CertificateCard";

const certificates = [
    {
        id: 1,
        title: "Sertifikat Kelas Algoritma dan Pemrograman Dasar",
        issuer: "CODEPOLITAN",
        date: "2024",
        img: "https://image.web.id/images/bg-certificate-new45845109a187f166.jpg",
        credential: "https://www.codepolitan.com/c/5KFP3WK/"
    },
    {
        id: 2,
        title: "Dasar Pemrograman JavaScript",
        issuer: "Dicoding Academy",
        date: "2023",
        img: dicoding1,
        credential: "https://www.dicoding.com/certificates/MEPJV21RJP3V"
    },
    {
        id: 3,
        title: "Perkenalan Javascript Modern",
        issuer: "Udemy",
        date: "2024",
        img: "https://udemy-certificate.s3.amazonaws.com/image/UC-c7000feb-c154-4358-8542-c98d4cd8e340.jpg?v=1720273478000",
        credential: "https://www.udemy.com/certificate/UC-c7000feb-c154-4358-8542-c98d4cd8e340/"
    },
    {
        id: 4,
        title: "Dasar Pemrograman Web",
        issuer: "Dicoding Academy",
        date: "2023",
        img: dicoding2,
        credential: "https://www.dicoding.com/certificates/QLZ9Q6MDEZ5D"
    },
];

function Certificate() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-500">
            {certificates.map((cert) => (
                <CertificateCard key={cert.id} cert={cert}/>
            ))}
        </div>
    )
}

export default Certificate