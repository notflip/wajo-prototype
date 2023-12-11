interface Doctor {
  name: string;
  active: boolean;
}

const doctors: Array<Doctor> = [
  { name: "Sarah L", active: true },
  { name: "Miguel S", active: false },
];

export default function App() {
  return (
    <div>
      <h1 className="text-2xl">Doctors</h1>
      <hr />
      <DoctorList doctors={doctors} />
    </div>
  );
}

function DoctorList({ doctors }: { doctors: Array<Doctor> }) {
  return (
    <div className="p-4">
      {doctors.length > 0 ? (
        doctors.map((doctor) => <Doctor doctor={doctor} />)
      ) : (
        <p>No doctors found</p>
      )}
    </div>
  );
}

function Doctor({ doctor }: { doctor: Doctor }) {
  return (
    <ul>
      <li
        className={`p-2 rounded my-2 ${
          doctor.active ? "bg-green-400" : "bg-slate-200"
        }`}
      >
        {doctor.name}
      </li>
    </ul>
  );
}
