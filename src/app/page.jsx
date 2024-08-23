import Link from "next/link";

const page = () => {
  return (
    <div>
      <div className="m-10">
        <Link className="bg-green-400 text-white p-2 " href={"/dashboard"}>
          go to dashboard
        </Link>
      </div>
      <div className="m-10">
        <Link className="bg-blue-400 text-white p-2 " href={"/messages"}>
          go to messages
        </Link>
      </div>
    </div>
  );
};

export default page;
