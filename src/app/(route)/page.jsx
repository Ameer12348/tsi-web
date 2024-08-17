import Link from "next/link";

const page = () => {
  return (
    <div>
      <Link className="bg-green-400 text-white p-2" href={"/dashboard"}>
        go to dashboard
      </Link>
    </div>
  );
};

export default page;
