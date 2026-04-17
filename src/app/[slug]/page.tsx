import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";

const CLOSER_LEFT = { transform: "scale(1.15) translateX(-5%)", transformOrigin: "top center" };

const people = [
  { slug: "dinno",      name: "Dinno Ardiansyah",        role: "Co-Founder & CSO",        email: "dinno@murka.id",            photo: "/images/people/dinno.jpg",      photoStyle: CLOSER_LEFT },
  { slug: "alvinaldy",  name: "Alvinaldy Fitrah",         role: "Co-Founder & CEO",        email: "alvin@murka.id",            photo: "/images/team/alvinaldy.png" },
  { slug: "maharyudha", name: "Maharyudha Bobby",         role: "Co-Founder & CBO",        email: "maharyudhaa@murka.id",      photo: "/images/people/maharyudha.jpg" },
  { slug: "ayu",        name: "Ayu Rahma Wulandari",      role: "Creative Director",       email: "ayu@murka.id",              photo: "/images/people/ayu.jpg",        photoStyle: CLOSER_LEFT },
  { slug: "ziyanun",    name: "Ziyanun Alvin",            role: "Project Manager",         email: "ziyanunalvin@gmail.com",    photo: "/images/people/ziyanun.jpg" },
  { slug: "mahardhika", name: "Mahardhika Chandra",       role: "Project Manager",         email: "mahardhika@murka.id",       photo: "/images/people/mahardhika.jpg", photoStyle: CLOSER_LEFT },
  { slug: "eza",        name: "Eza Rosyandi",             role: "Social Media Specialist", email: "eza@murka.id",              photo: "/images/people/eza.jpg" },
  { slug: "amirah",     name: "Amirah Mumtaz Salsabila", role: "Social Media Specialist", email: "amirah@murka.id",           photo: "/images/people/amirah.jpg" },
  { slug: "robby",      name: "Robby Sebmaldy",           role: "Project Manager",         email: "robby@murka.id",            photo: "/images/people/robby.jpg" },
  { slug: "wisnu",      name: "Wisnu Ardiansyah",         role: "Project Intern",          email: "wisnu@murka.id",            photo: "/images/people/wisnu.jpg" },
  { slug: "argy",       name: "Argy Fadillah Valon",      role: "Graphic Designer",        email: "argy@murka.id",             photo: "/images/people/argy.jpg" },
  { slug: "bintang",    name: "Bintang Anandhiya",        role: "Graphic Design Lead",     email: "bintang@murka.id",          photo: "/images/people/bintang.jpg",    photoStyle: CLOSER_LEFT },
  { slug: "sadam",      name: "Muhamad Sadam Vifo",       role: "Project Manager",         email: "sadam@murka.id",            photo: "/images/people/sadam.jpg" },
  { slug: "hanief",     name: "Hanief Enriansyah",        role: "Project Manager",         email: "hanief@murka.id",           photo: "/images/people/hanief.jpg" },
  { slug: "zaim",       name: "Achmad Za'im Mudzaki",     role: "Project Intern",          email: "achmadzaimm0310@gmail.com", photo: "/images/people/zaim.jpg" },
  { slug: "amin",       name: "Amin",                     role: "Content Specialist",      email: null,                        photo: "/images/people/amin.jpg" },
];

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return people.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const person = people.find((p) => p.slug === slug);
  if (!person) return {};
  return {
    title: `${person.name} — MURKA`,
    description: `${person.name}, ${person.role} at MURKA.`,
  };
}

export default async function PersonPage({ params }: Props) {
  const { slug } = await params;
  const person = people.find((p) => p.slug === slug);
  if (!person) notFound();

  return (
    <div
      className="flex min-h-svh flex-col items-center justify-between px-6 py-10"
      style={{ backgroundColor: "#18181A", fontFamily: "var(--font-plus-jakarta), sans-serif" }}
    >
      {/* Logo */}
      <a href="/" className="mb-8 opacity-70 transition-opacity hover:opacity-100">
        <Image
          src="/images/logos/murka-logo-white.png"
          alt="MURKA"
          width={80}
          height={24}
          className="h-5 w-auto object-contain"
        />
      </a>

      {/* Card */}
      <div className="flex w-full max-w-xs flex-col items-center gap-6">
        {/* Photo */}
        <div className="relative w-full overflow-hidden rounded-2xl" style={{ aspectRatio: "3/4" }}>
          <Image
            src={person.photo}
            alt={person.name}
            fill
            className="object-cover object-top"
            style={person.photoStyle}
            sizes="320px"
            priority
          />
        </div>

        {/* Info */}
        <div className="w-full text-left">
          <h1 className="text-4xl font-light text-white">{person.name}</h1>
          <p className="mt-1 text-sm font-medium" style={{ color: "#C1EF1C" }}>
            {person.role}
          </p>
          {person.email && (
            <a
              href={`mailto:${person.email}`}
              className="mt-1 block text-sm text-white/40 transition-colors hover:text-white/70"
            >
              {person.email}
            </a>
          )}
        </div>

        {/* Save Contact */}
        <a
          href={`/vcf/${slug}.vcf`}
          download
          className="w-full rounded-full py-3 text-center text-sm font-medium transition-opacity hover:opacity-80"
          style={{ backgroundColor: "#C1EF1C", color: "#18181A" }}
        >
          Save Contact
        </a>
      </div>

      {/* Footer spacer */}
      <div className="mt-8 text-xs text-white/20">murka.id</div>
    </div>
  );
}
