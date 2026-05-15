import { Avatar, Rating } from "@mantine/core";

const Testimonials = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl text-center font-semibold mb-3 text-mine-shaft-100">
        User <span className="text-bright-sun-400">Feedback</span> For Us
      </div>
      <div>
        <div className="flex gap-4 items-center">
          <Avatar className="!h-14 !w-14" src="/avatar-1.png" alt="it's me" />
          <div>
            <div className="text-lg text-mine-shaft-100 font-semibold">
              Ritesh Chauhan
            </div>
            <Rating value={4.5} fractions={2} readOnly />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
