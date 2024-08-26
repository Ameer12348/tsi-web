import VerifyAccount from "@/app/_components/account/VerifyAccount";

const page = () => {
  return (
    <div className="p-4">
      <div className="rounded-lg bg-white p-4">
        <div className="mb-4">
          <h1 className="mb-3 text-2xl font-medium text-gray-900">
            Verify Account
          </h1>
          <p className="text-sm text-gray-700">
            Image of your NID/Driving Lisence/Passport
          </p>
        </div>
        <VerifyAccount />
      </div>
    </div>
  );
};

export default page;
