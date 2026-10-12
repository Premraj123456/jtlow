

const trustees = [
  { name: "Banoth Thyagaraj Paul", role: "Author, Founder & Managing Trustee" },
  { name: "Guguloth Jyothi", role: "Vice-President & Managing Trustee" },
  { name: "Banoth Prem Raj Paul", role: "Secretary" },
  { name: "Guguloth Dwali", role: "General Secretary" },
];

const objects = [
  "Spread the Gospel of Jesus Christ and establish churches in unreached areas.",
  "Publish and distribute Bibles, Christian literature, pamphlets, and books.",
  "Strengthen local churches through Bible classes, conferences, and correspondence courses.",
  "Care for orphans, widows, the aged, and the needy.",
  "Establish adult education centers and run health and awareness camps.",
  "Broadcast the Gospel through radio, television, and digital devices where human access is limited.",
];

export default function Legal() {
  return (
    <main>
         <section className="bg-black text-white p-5 space-y-7 py-13">
        <h1 className="font-extrabold text-4xl">&quot;Jesus - True Light of the World&quot; Organization is legally registered as Trust in India</h1>
        {/* <button className="bg-orange-500 font-bold w-full py-3 rounded-lg hover:opacity-80 transition active:bg-orange-600">Donate</button> */}

       </section>

       <section className="p-5 space-y-8 text-center py-11 ">
        <h2 className="font-extrabold text-3xl">Legality</h2>
        <p className="text-lg"> ​“Jesus - True Light of the World” (JTLOW) is a legally registered Christian Trust under the Government of Telangana, India. Our official Trust Registration Number is 16/2024. This registration affirms our commitment to transparency and accountability in our mission to spread the Gospel.
          <br /><br />
          To verify our registration, you can visit the Telangana Registration &amp; Stamps Department&apos;s official website:{" "}
          <a
            href="https://registration.telangana.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline"
          >
            registration.telangana.gov.in
          </a>
          <br /><br />
We are committed to operating with integrity and openness, ensuring that our work in reaching the unreached is conducted with the highest standards of trust and responsibility.​



           </p>
    </section>

    <section className="p-5 py-11 bg-gray-50">
      <h2 className="font-extrabold text-3xl text-center">Trust Registration Details</h2>
      <dl className="mx-auto mt-8 grid max-w-4xl gap-4 text-left md:grid-cols-2">
        <div className="rounded-2xl bg-white p-5 shadow">
          <dt className="text-sm font-bold uppercase tracking-wide opacity-60">Trust name</dt>
          <dd className="mt-1 text-lg font-semibold">Jesus True Light of the World (JTLOW)</dd>
        </div>
        <div className="rounded-2xl bg-white p-5 shadow">
          <dt className="text-sm font-bold uppercase tracking-wide opacity-60">Founded</dt>
          <dd className="mt-1 text-lg font-semibold">19 April 2024</dd>
        </div>
        <div className="rounded-2xl bg-white p-5 shadow">
          <dt className="text-sm font-bold uppercase tracking-wide opacity-60">Registration</dt>
          <dd className="mt-1 text-lg font-semibold">Doc. No. 16/2024, Telangana, India</dd>
        </div>
        <div className="rounded-2xl bg-white p-5 shadow">
          <dt className="text-sm font-bold uppercase tracking-wide opacity-60">Registered office</dt>
          <dd className="mt-1 text-lg font-semibold">Bhupathipet (V), Gudur (M), Mahabubabad District, Telangana – 506134</dd>
        </div>
      </dl>
    </section>

    <section className="p-5 py-11">
      <h2 className="font-extrabold text-3xl text-center">Our Trustees</h2>
      <div className="mx-auto mt-8 grid max-w-4xl gap-4 text-left md:grid-cols-2">
        {trustees.map((t) => (
          <div key={t.name} className="rounded-2xl p-5 shadow-lg">
            <h3 className="font-bold text-xl">{t.name}</h3>
            <p className="text-lg opacity-70">{t.role}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="p-5 py-11 bg-gray-50">
      <h2 className="font-extrabold text-3xl text-center">Aims &amp; Objects of the Trust</h2>
      <p className="mx-auto mt-4 max-w-3xl text-center text-lg">
        As recorded in our registered Trust Deed, the Trust works toward the following (summary):
      </p>
      <ul className="mx-auto mt-8 max-w-3xl list-disc space-y-3 pl-6 text-left text-lg">
        {objects.map((o) => (
          <li key={o}>{o}</li>
        ))}
      </ul>
      <p className="mx-auto mt-8 max-w-3xl text-center text-lg opacity-70">
        The full registered Trust Deed contains the trustees&apos; personal identity documents, so it is not
        published here. A copy is available to donors and authorities on request — write to us via the{" "}
        <a href="/contact" className="font-bold underline">Contact page</a>.
      </p>
    </section>
    </main>
  );
}