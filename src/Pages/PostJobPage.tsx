import { Divider } from "@mantine/core";
import PostJob from "../PostJob/PostJob";

const PostJobPage = () => {
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-[Poppins] p-6">
      <Divider size="xs" mb="md" />
      <PostJob />
    </div>
  );
};

export default PostJobPage;